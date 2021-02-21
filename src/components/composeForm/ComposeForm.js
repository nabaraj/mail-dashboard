import { useEffect } from 'react';
import useUpdateForm from "./../../utils/submitFormHook";

const ComposeForm = ({ submitMail, changeField, formData }) => {

  return (
    <div>
      <form onSubmit={submitMail}>
        <div className="form-group">
          <input className="form-control" id="email" name="toEmail" onChange={changeField} type="email" placeholder="To" />
        </div>
        <div className="form-group">
          <input className="form-control" id="subject" name="subject" onChange={changeField} type="text" placeholder="Subject" />
        </div>
        <div className="form-group">
          <textarea className="form-control" id="emailContent" onChange={changeField} name="content" rows="3"></textarea>
        </div>
        <div className="form-group">
          <button type="submit" disabled={!formData.toEmail || !formData.subject || !formData.content} className="btn btn-success" >Send</button>
        </div>
      </form>
    </div>
  );
}

export default ComposeForm;
