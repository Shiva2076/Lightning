import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [menuView, setMenuView] = useState('profile');

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (!isProfileOpen) {
      setMenuView('profile');
    }
  };

  const showNotifications = (e) => {
    e.stopPropagation();
    setMenuView('notifications');
  };

  const showChangeFirm = (e) => {
    e.stopPropagation();
    setMenuView('changeFirm');
  };

  const showProfileItems = (e) => {
    e.stopPropagation();
    setMenuView('profile');
  };

  const handleDateChange = (dateString) => {
    window.location.href = `/dashboard?date=${dateString}`;
  };

  return (
    <header className="header">
      <div className="header__title">Springfield Media</div>

      <div className="header__actions">
        <div className="header__search">
          <FaSearch className="search-icon" />
        </div>

        <div className="header__profile" onClick={toggleProfile}>
          <img src="/user_avatar.png" alt="User" className="profile-avatar" />
          <span className="profile-name">
            Evan Yates
            <i className={`arrow-icon ${isProfileOpen ? 'arrow-up' : 'arrow-down'}`}></i>
          </span>
        </div>

        {isProfileOpen && (
          <div className="profile-dropdown" onClick={(e) => e.stopPropagation()}>
            {menuView === 'profile' && (
              <ul>
                <li>
                  <img src="/IconSet.png" alt="Profile Icon" className="icon" />
                  Profile
                </li>
                <li onClick={showNotifications}>
                  <img src="/IconSetA.png" alt="Notifications Icon" className="icon" />
                  Notifications
                </li>
                <li onClick={showChangeFirm}>
                  <img src="/IconSetB.png" alt="Change Firm Icon" className="icon" />
                  Change Firm
                </li>
                <li>
                  <img src="/IconSetC.png" alt="Settings Icon" className="icon" />
                  Settings
                </li>
                <li>
                  <img src="/IconSetD.png" alt="Help/Support Icon" className="icon" />
                  Help/Support
                </li>
                <li>
                  <img src="/IconSetE.png" alt="About Icon" className="icon" />
                  About (Version Info)
                </li>
                <li onClick={() => (window.location.href = '/logout')}>
                  <img src="/IconSetF.png" alt="Logout Icon" className="icon" />
                  Logout
                </li>
              </ul>
            )}

            {menuView === 'notifications' && (
              <div className="notifications-panel">
                <h4>Notifications</h4>
                <ul>
                  <li>
                    <img src="/IconSet.png" alt="Notification1" className="icon" />
                    <div className="notification-text">
                      <span>You created a new Firm</span>
                      <span className="time">Just now</span>
                    </div>
                  </li>
                  <li>
                    <img src="/IconSet.png" alt="Notification2" className="icon" />
                    <div className="notification-text">
                      <span>New user registered</span>
                      <span className="time">59 minutes ago</span>
                    </div>
                  </li>
                  <li>
                    <img src="/IconSetA.png" alt="Notification3" className="icon" />
                    <div className="notification-text">
                      <span>Your subscription is renewed</span>
                      <span className="time">12 hours ago</span>
                    </div>
                  </li>
                  <li>
                    <img src="/IconSetA.png" alt="Notification4" className="icon" />
                    <div className="notification-text">
                      <span>New update received</span>
                      <span className="time">3 days ago</span>
                    </div>
                  </li>
                </ul>
                <button className="back-btn" onClick={showProfileItems}>
                  ← Back
                </button>
              </div>
            )}

            {menuView === 'changeFirm' && (
              <div className="notifications-panel">
                <h4>Change Firm</h4>
                <ul style={{ cursor: 'pointer' }}>
                  <li onClick={() => handleDateChange('01-01-2025')}>Firm 1 (Date: 01-01-2025)</li>
                  <li onClick={() => handleDateChange('02-01-2025')}>Firm 2 (Date: 02-01-2025)</li>
                  <li onClick={() => handleDateChange('03-01-2025')}>Firm 3 (Date: 03-01-2025)</li>
                  <li onClick={() => handleDateChange('04-01-2025')}>Firm 4 (Date: 04-01-2025)</li>
                  <li onClick={() => handleDateChange('05-01-2025')}>Firm 5 (Date: 05-01-2025)</li>
                  <li onClick={() => handleDateChange('06-01-2025')}>Firm 6 (Date: 06-01-2025)</li>
                </ul>
                <button className="back-btn" onClick={showProfileItems}>
                  ← Back
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;