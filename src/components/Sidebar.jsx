import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      activeIcon: './src/assets/active.png',
      inactiveIcon: './src/assets/active.png'
    },
    {
      label: 'Menu 1',
      path: '/menu1',
      activeIcon: './src/assets/C.png',   
      inactiveIcon: './src/assets/C.png'
    },
    {
      label: 'Menu 2',
      path: '/menu2',
      activeIcon: './src/assets/D.png',
      inactiveIcon: './src/assets/D.png'
    },
    {
      label: 'Menu 3',
      path: '/menu3',
      activeIcon: './src/assets/A.png',
      inactiveIcon: './src/assets/A.png'
    },
    {
      label: 'Admin Panel',
      path: '/admin',
      activeIcon: './src/assets/inactive.png',
      inactiveIcon: './src/assets/inactive.png'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img
          src="./src/assets/c163cb6da41a5528ea1ac57f3fe77daf.png"
          alt="Lightning Logo"
        />
      </div>

      <nav className="sidebar__nav">
        <ul>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const iconSrc = isActive ? item.activeIcon : item.inactiveIcon;

            return (
              <li key={item.path} className={isActive ? 'nav-item active' : 'nav-item'}>
                <Link to={item.path} className="nav-link">
                  <img
                    src={iconSrc}
                    alt={`${item.label} Icon`}
                    className="icon"
                  />
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

     
      <div className="sidebar__support">
        <div className="support-illustration">
          <img src="./src/assets/Support.png" alt="Support" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
