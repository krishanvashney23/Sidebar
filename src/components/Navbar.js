import { useState, useEffect } from 'react';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const callNow = () => {
    window.location.href=`tel:${9632587410}`;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("dropbtn")) {
        setDropdownVisible(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="container1">
      <form className="navbarForm" action="#">
        <div className="searchContainer">
          <input type="text" className="searchInput" placeholder="Search..." />
          <i className="ri-search-line"></i>
        </div>
      </form>
      <div className="icons">
        <a className="qq">
          <i className="ri-notification-line"></i>
        </a>
        <a className="qq">
          <i className="ri-settings-4-line"></i>
        </a>
        <div className="dropdown">
              <button onClick={callNow}>Call Now</button>
          {dropdownVisible && (
            <div className="dropdownContent" id="myDropdown">
              <a href="#home">Profile</a>
              <a href="#about">Chat</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
