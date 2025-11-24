import { Link } from 'react-router-dom';
import Logo from './Logo';
import Notification from '../../assets/img/icon/notification.svg'
import Account from '../../assets/img/icon/account.svg'
import Logout from '../../assets/img/icon/logout.svg'

interface NavItem {
  icon: string;
  label: string;
  hasNotification?: boolean;
}

const Navbar = () => {
  // Navigation items
  const navItems: NavItem[] = [
    { 
      icon: Notification,
      label: 'Notifications',
      hasNotification: true
    },
    { 
      icon: Account,
      label: 'Account'
    },
    { 
      icon:Logout,
      label: 'Logout'
    }
  ];

  // Function to toggle sidebar - will be implemented with context or state management
  const toggleSidebar = () => {
    // This will be connected to the sidebar component
    const event = new CustomEvent('toggleSidebar');
    window.dispatchEvent(event);
  };

  return (
    <header className="navbar-container">
    
      <nav className="navbar">
        {/* Left section */}
        <div className="navbar-left">
          {/* Hamburger menu */}
          <button className="menu-button" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Logo */}
          <Link to="/" className="logo-container mx-2">
            {/* <img src="/Revyniqx_Logo.png" alt="Revyniqx Logo" className="logo" /> */}
            <Logo/>
          </Link>
        </div>

        {/* Right section */}
        <div className="navbar-right">
          {/* Navigation items */}
          <div className="nav-items-container">
            {navItems.map((item, index) => (
              <div key={index} className="nav-item">
                <div className="nav-icon-container">
                  {typeof item.icon === 'string' ? <img src={item.icon} alt="" /> : item.icon}
                  {item.hasNotification && (
                    <span className="notification-badge"></span>
                  )}
                </div>
                <span className="nav-label">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* New Agent Button */}
          <Link 
            to="#" 
            className="new-agent-btn"
          >
            New Agent
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;