import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
    console.log(dropdownOpen);
  };

  return (
    <>
    <div>
      <div className="logo-flx">
        <div className="logo-flx1">
          <h2 style={{ color: '#0052CC' }}>Admin</h2>
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
          <h2 className='admin-top'>Admin</h2>
        </div>

        <div className="topMargin">
          <Link href="/dashboard" className="pages active"><i className="ri-home-4-line"></i> Dashboard</Link>
          <Link href="/user" className="pages"><i className="ri-map-pin-line"></i> Users</Link>
          <a href="/creditTable" className="pages"><i className="ri-bank-card-line"></i> Credit</a>
          <a href="/requestCredit" className="pages"><i className="ri-file-list-3-line"></i> Request For Credit</a>
          <a href="/allReport" className="pages"><i class="ri-todo-line"></i>Report</a>
          <a href="#" className="pages"><i class="ri-team-line"></i> Report1</a>
          <a href="#" className="pages"><i class="ri-notification-line"></i> Help</a>
          <a href="#" className="pages"><i class="ri-notification-line"></i> Notification</a>
          <a href="#" className="pages"><i class="ri-settings-3-line"></i>Settings</a>
        {/* <div className="top-marginn12">
          <a className="sidebar_flx" id="pages" onClick={toggleDropdown}>
            <div className="menu_txt">
              <i className="ri-chat-settings-line"></i> Report Manager
            </div>
            <div className="maenuDroparrow">
              <i className="ri-arrow-down-s-line down_arow"></i>
            </div>
          </a>
          {dropdownOpen &&(
            <div className="dropdown-menu show">
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report 1</a>
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report (MRT)</a>
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report (OR)</a>
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report (MRT)</a>
              <a href="#" className="pages"><i className="ri-arrow-right-s-line"></i> Report (OR)</a>
            </div>
          )}
        </div> */}
      </div>
    </div>
    </div>
    </>
  );
};

export default Sidebar;
