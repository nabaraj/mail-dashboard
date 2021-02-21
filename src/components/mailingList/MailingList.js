import { useState } from 'react';

import style from "./mailingList.module.scss";
import moment from 'moment';
import { filterList } from './../../utils/utilty';

const MailListing = ({ boxName, mailData, showEmail, deleteMail }) => {
  const [selectedMail, setselectedMail] = useState({});
  function selectedId(e) {
    let mailList = { ...selectedMail };
    let mailId = e.target.value;
    let isChecked = e.target.checked;
    if (!isChecked) {
      delete mailList[mailId];
    } else {
      mailList[mailId] = true;
    }
    setselectedMail(mailList);
  }
  function triggerDelete() {

    deleteMail(Object.keys(selectedMail));
    setselectedMail({});
  }
  return (
    <div className="col bg-white">
      <div className="row">
        <div className="col-sm-6 font-24 py-3 text-capitalize">
          {boxName} ({mailData ? filterList(mailData) : 0})
        </div>
        <div className="col-sm-6 py-3">
          <div className={`custom-file form-inline d-flex justify-content-end ${style.searchFields}`}>
            <input type="text" className="form-control display-inline-block w-auto" placeholder="Search email" />
            <button className="btn btn-success">Search</button>
          </div>
        </div>
      </div>
      <div className="row toolbar">
        <div className="toolbar-left col-sm-6 py-2 font-14">
          <button type="button" className="btn btn-light btn-sm pt-0 pb-1 mr-1"><i className="bi bi-arrow-counterclockwise"></i> refresh</button>
          <button type="button" className="btn btn-light btn-sm pt-0 pb-1 mr-1"><i className="bi bi-eye"></i></button>
          <button type="button" className="btn btn-light btn-sm pt-0 pb-1 mr-1"><i className="bi bi-exclamation"></i></button>
          <button type="button" disabled={Object.keys(selectedMail).length === 0} className="btn btn-light btn-sm pt-0 pb-1 mr-1" onClick={triggerDelete}><i className="bi bi-trash"></i></button>

        </div>
        <div className="toolbar-right col-sm-6 py-2 ml-auto text-sm-right">
          <div className="btn-group btn-group-sm">
            <button type="button" className="btn btn-light pt-0 pb-1"><i className="bi bi-arrow-left-short"></i></button>
            <button type="button" className="btn btn-light pt-0 pb-1"><i className="bi bi-arrow-right-short"></i></button>
          </div>
        </div>
      </div>
      {mailData ? mailData.map((item, index) => (
        <div className={`p-2 ${style.mailRow} d-flex border row font-weight-bold font-13 ${item.opened ? 'bg-bodyGray' : ' bg-white'}`} key={item.id}>
          <div className={`pr-2 ${style.selection}`}><input type="checkbox" value={item.id} onChange={selectedId} /></div>
          <div className={`px-2 ${style.from}`} onClick={() => showEmail(item)}>
            <div><span>{boxName === 'sent' ? item.to : item.from}</span></div>
          </div>
          <div className={`px-2 ${style.subject}`} onClick={() => showEmail(item)}>
            <span>{item.subject}</span>
          </div>
          <div className={`px-2 ${style.date} ml-auto`}>{moment(item.date).format('MMM-DD')}</div>
        </div>
      )) : <div className="text-center">No Results Found</div>}
    </div>
  );
}

export default MailListing;
