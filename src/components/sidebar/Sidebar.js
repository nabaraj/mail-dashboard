import style from './sidebar.module.scss';

const Sidebar = ({ sidebarCollapsed, userData }) => {
  return (
    <nav id="sidebarMenu" className={`d-md-block text-white sidebar bg-secondary collapse ${sidebarCollapsed ? style.collapsed : ''} ${style.sidebar}`}>
      <div className={`${style.sidebarSticky} pt-3`}>
        {userData && userData.name && <div className="p-2">
          {/* <img src={`https://dummyimage.com/30x30/000/fff&text=${userData.name[0]}`} className="rounded-circle" alt={userData.name} /> */}
          <span className="rounded-circle bg-info text-white avatar font-16 mr-2 mb-2 text-uppercase px-2 py-1 font-weight-bold text-center">{userData.name[0]}</span>
          <div className=" text-truncate">{userData.name}</div>
        </div>}
        <ul className={`list-group list-group-flush ${style.navLink}`}>
          <li className="list-group-item "><span className="mr-4"><i className="bi bi-grid"></i></span><span className={`${style.navLinkContent}`}>Dashboard</span></li>
          <li className="list-group-item "><span className="mr-4"><i className="bi bi-layout-text-window-reverse"></i></span><span className={`${style.navLinkContent}`}>Layouts</span></li>
          <li className="list-group-item "><span className="mr-4"><i className="bi bi-bar-chart-line"></i></span><span className={`${style.navLinkContent}`}>Graphs</span></li>
          <li className={`list-group-item ${style.active}`}>
            <span className="mr-4"><i className="bi bi-envelope-fill"></i></span><span className={`${style.navLinkContent}`}>Mailbox</span>
            <ul className="list-unstyled pl-3 pt-3 bg-dark">
              <li className={`py-1 ${style.activeSubmenu}`}>Inbox</li>
              <li className="py-1">Email view</li>
              <li className="py-1">Compose email</li>
              <li className="py-1">Email template</li>
            </ul>
          </li>
          <li className="list-group-item text-textLightDark"><span className="mr-4"><i className="bi bi-pie-chart"></i></span><span className={`${style.navLinkContent}`}>Matrics</span></li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
