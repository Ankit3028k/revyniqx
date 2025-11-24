// src/components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../elements/Navbar';
import Sidebar from '../elements/Slidebar';
import '../../assets/css/styles.css';

const Layout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <Sidebar />
      <main className="main-content">
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;