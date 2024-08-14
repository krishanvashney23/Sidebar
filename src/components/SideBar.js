import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 990) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (windowWidth > 990) {
      setSidebarOpen(prevState => !prevState);
    } else {
      setSidebarOpen(prevState => !prevState);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <div>
      <div className="logo-flx">
        <div className="logo-flx1">
          <h2 style={{ color: '#0052CC' }}>Birla</h2>
        </div>
        <div id="hamburger" className="logoFlx2">
          <span
            className="hamburger"
            style={{ fontSize: '30px', cursor: 'pointer' }}
            onClick={toggleSidebar}
          >
            &#9776;
          </span>
        </div>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: sidebarOpen ? (windowWidth > 990 ? '16.7%' : '80%') : '0' }}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a>
        <div className={"desk-flx"}>
          <h2 style={{ color: '#0052CC' }}>Birla</h2>
        </div>

        <div className="topMargin">
          <a href="#" className="pages"><i className="ri-home-4-line"></i> Dashboard</a>
          <a href="#" className="pages"><i className="ri-map-pin-line"></i> Dashboard</a>
          <a className="sidebar_flx"id="pages" onClick={toggleDropdown}>
            <div className="menu_txt">
              <i className="ri-chat-settings-line"></i> Report Manager
            </div>
            <div className="maenuDroparrow">
              <i className="ri-arrow-down-s-line down_arow"></i>
            </div>
          </a>
          {dropdownOpen && (
            <div className="dropdownMenu">
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report 1</a>
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report (MRT)</a>
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report (OR)</a>
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report (MRT)</a>
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report (OR)</a>
            </div>
          )}
        </div>
        <a href="#" className="pages"><i class="ri-arrow-up-circle-fill"></i>Category</a>
        <a href="#" className="pages"><i class="ri-team-line"></i> Report1</a>
        <a href="#" className="pages"><i class="ri-notification-line"></i> Help</a>
        <a href="#" className="pages"><i class="ri-notification-line"></i> Notification</a>
        <a href="#" className="pages"><i class="ri-settings-3-line"></i>Settings</a>
      </div>
    </div>
  );
};

export default Sidebar;
