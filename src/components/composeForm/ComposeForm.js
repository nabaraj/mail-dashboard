import { useHistory } from "react-router-dom";
import useUpdateForm from "./../../utils/submitFormHook";
import { useLocal, ID } from "./../../utils/utilty";

const ComposeForm = ({ changeField, formData, onSubmit, userData }) => {
  // const [appData, setAppData] = useState(null);
  const history = useHistory();

  function submitMail(e) {
    e.preventDefault();
    let appData = useLocal.get('appData');
    let toData = { ...formData };
    let fromData = { ...formData };
    let { toEmail } = formData;
    fromData['id'] = ID();
    toData['id'] = fromData['id'];
    fromData['date'] = new Date().toISOString();
    toData['date'] = fromData['date'];
    fromData['from'] = userData.name;
    fromData['fromEmail'] = userData.email;
    toData['to'] = userData.name;
    let userRef = useLocal.get('userRef');
    console.log(fromData, toData);
    if (!userRef) {
      history.push('/');
    }
    delete fromData.toEmail;
    // console.log(fromData);
    let editedAppData = appData.map(item => {
      if (item.email === toEmail) {
        item.inbox.unshift(fromData);
      }
      if (item.email === userData.email) {
        item.sent.unshift(toData);
      }
      return item;
    });
    console.log(editedAppData);
    useLocal.save('appData', editedAppData);
    // setDashboardData(useLocal.get('appData'));
    // closeModal();
    onSubmit();
    // editMailStatus(editedAppData);
  }

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
