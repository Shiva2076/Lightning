import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    {
      label: 'Dashboard',
      path: '/dashboard',
      activeIcon: '/active.png',
      inactiveIcon: '/active.png'
    },
    {
      label: 'Menu 1',
      path: '/menu1',
      activeIcon: '/C.png',   
      inactiveIcon: '/C.png'
    },
    {
      label: 'Menu 2',
      path: '/menu2',
      activeIcon: '/D.png',
      inactiveIcon: '/D.png'
    },
    {
      label: 'Menu 3',
      path: '/menu3',
      activeIcon: '/A.png',
      inactiveIcon: '/A.png'
    },
    {
      label: 'Admin Panel',
      path: '/admin',
      activeIcon: '/inactive.png',
      inactiveIcon: '/inactive.png'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img
          src="/c163cb6da41a5528ea1ac57f3fe77daf.png"
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
          <img src="/Support.png" alt="Support" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;