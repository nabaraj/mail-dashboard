import { filterList } from "./../../utils/utilty";
import { Link } from 'react-router-dom';
const MainContentSidebar = ({ userData, displayCompose }) => {

  return (
    <div className="col-sm-3 mb-5">
      <button className="btn btn-block btn-success cursor-pointer" onClick={displayCompose}>Compose Mail</button>
      <h3 className="font-14 mt-4">FOLDERS</h3>
      <ul className="list-group list-group-flush font-14">
        <li className="list-group-item bg-transparent py-1 px-2 d-flex">
          <Link to="/dashboard/inbox"><span className="mr-2"><i className="bi bi-inbox-fill"></i></span>
          Inbox</Link>
          {(userData && userData['inbox'] && userData['inbox'].length > 0) && <span className="d-inline-block text-white rounded px-2 bg-warning ml-auto">{filterList(userData['inbox'])}</span>}
        </li>
        <li className="list-group-item bg-transparent py-1 px-2 d-flex">
          <Link to="/dashboard/sent"><span className="mr-2">
            <i className="bi bi-envelope"></i>
          </span>
          Send Mail</Link>
          {(userData && userData['sent'] && userData['sent'].length > 0) &&
            (<span className="d-inline-block text-white rounded px-2 bg-info ml-auto">{filterList(userData['sent'])}</span>)}
        </li>
        <li className="list-group-item bg-transparent py-1 px-2"><span className="mr-2"><i className="bi bi-sun"></i></span> Important</li>
        <li className="list-group-item bg-transparent py-1 px-2 d-flex">
          <Link to="/dashboard/drafts"><span className="mr-2">
            <i className="bi bi-file-earmark-text"></i>
          </span>
          Drafts</Link>
          {(userData && userData['drafts'] && userData['drafts'].length > 0) && <span className="d-inline-block text-white rounded px-2 bg-danger ml-auto">{filterList(userData['drafts'])}</span>}
        </li>
        <li className="list-group-item bg-transparent py-1 px-2"><span className="mr-2"><i className="bi bi-trash"></i></span>Trash</li>
      </ul>
      <h3 className="font-14 mt-4">CATEGORIES</h3>
      <ul className="list-group list-group-flush font-14">
        <li className="list-group-item bg-transparent py-1 px-2"><span className="mr-2 text-success"><i className="bi bi-circle-fill"></i></span>Work</li>
        <li className="list-group-item bg-transparent py-1 px-2"><span className="mr-2 text-danger"><i className="bi bi-circle-fill"></i></span>Documents</li>
        <li className="list-group-item bg-transparent py-1 px-2"><span className="mr-2 text-primary"><i className="bi bi-circle-fill"></i></span> Social</li>
        <li className="list-group-item bg-transparent py-1 px-2"><span className="mr-2 text-info"><i className="bi bi-circle-fill"></i></span>Advertising</li>
        <li className="list-group-item bg-transparent py-1 px-2"><span className="mr-2 text-warning"><i className="bi bi-circle-fill"></i></span>Clients</li>
      </ul>

    </div>
  );
}

export default MainContentSidebar;
