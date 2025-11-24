import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../assets/css/styles.css';
import Dashboard from '../../assets/img/icon/dashboard.svg';
import Meeting from '../../assets/img/icon/meetings.svg';
import Agents from '../../assets/img/icon/agent.svg';
import Reports from '../../assets/img/icon/reports.svg';
import Settings from '../../assets/img/icon/setting.svg';
import LogOut from '../../assets/img/icon/logout.svg';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
}

const Sidebar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsExpanded(false); // Reset expanded state on desktop
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Listen for toggleSidebar event from Navbar
    const handleToggleSidebar = () => {
      if (isMobile) {
        setIsExpanded(prev => !prev);
      }
    };

    window.addEventListener('toggleSidebar', handleToggleSidebar);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('toggleSidebar', handleToggleSidebar);
    };
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  const menuItems: MenuItem[] = [
    { path: '/dashboard', label: 'Dashboard', icon: Dashboard },
    { path: '/meetings', label: 'Meetings', icon: Meeting },
    { path: '/agents', label: 'Agents', icon: Agents},
    { path: '#', label: 'Reports', icon: Reports },
    { path: '#', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {isMobile && (
        <div 
          className={`sidebar-overlay ${isExpanded ? 'expanded' : ''}`} 
          onClick={closeSidebar}
        />
      )}
      <div className={`sidebar ${isMobile ? 'mobile' : ''} ${isExpanded ? 'expanded' : ''}`}>
        <div className="sidebar-container">
          <div className="sidebar-menu">
            <nav className="sidebar-nav">
              <ul className="sidebar-menu-list">
                {menuItems.map((item) => (
                  <li key={item.path} className="sidebar-menu-item">
                    <Link
                      to={item.path}
                      className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
                      onClick={closeSidebar}
                    >
                      <img
                        src={item.icon}
                        alt={item.label}
                        className="sidebar-icon"
                      />
                      <span className="sidebar-label">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="sidebar-footer">
            <Link
              to="/"
              className="sidebar-link logout-link"
              onClick={closeSidebar}
            >
              <img
                src={LogOut}
                alt="Logout"
                className="sidebar-icon"
              />
              <span className="sidebar-label">Logout</span>
            </Link>
          </div>
        </div>
        {isMobile && (
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="sidebar-toggle-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar;