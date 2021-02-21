import React from 'react';

const Header = ({ collapsed, logOut }) => {
  return (
    <header className="navbar navbar-white d-flex sticky-top bg-white flex-md-nowrap p-2">
      <button className="btn btn-success text-white sideBarToggle pt-1 pb-2" onClick={collapsed}> <i className="bi-list"></i></button>
      <div className="ml-auto d-flex align-items-center headerToolbar">
        <div className="position-relative font-24 pr-3">
          <i className="bi bi-inbox-fill"></i>
          <span className="badge badge-warning text-white font-12 position-absolute">16</span>
        </div>
        <div className="position-relative font-24 pr-3">
          <i className="bi bi-bell-fill"></i>
          <span className="badge badge-success text-white font-12 position-absolute">8</span>
        </div>
        <button onClick={logOut} className="btn "><span className="mr-2"><i className="bi-box-arrow-right"></i></span>Log out</button>
      </div>
    </header>
  );
}

export default Header;
