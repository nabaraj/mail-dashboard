import { useParams, useHistory } from "react-router-dom";

import { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import MainContentSidebar from "../components/maincontentsidebar/MainContentSidebar";
import ModalWindow from '../components/modal/ModalWindow';
import Sidebar from "../components/sidebar/Sidebar"
import MailListing from './../components/mailingList/MailingList';
import { useLocal, ID } from "./../utils/utilty";
import ComposeForm from "./../components/composeForm/ComposeForm";
import EmailBody from '../components/emailbody/EmailBody';
import useUpdateForm from './../utils/submitFormHook';


const Dashboard = ({ appData }) => {
  const { boxName } = useParams();
  const history = useHistory();
  const initialValue = {
    toEmail: '',
    subject: '',
    content: '',
    date: '',
    id: '',
    from: '',
    fromEmail: ''
  }
  const [formData, changeField, resetForm] = useUpdateForm(initialValue);

  const [dashBoardData, setDashboardData] = useState(appData);
  const [mailData, setMailData] = useState([]);
  // const [boxName, setBoxName] = useState(boxname);
  const [mailContent, setMailContent] = useState({});
  const [userData, setUserData] = useState({});
  const [toggleModal, setToggleModal] = useState(false);
  const [modalType, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  function showCompose(e) {
    setToggleModal(true);
    setModalContent('compose');
    setModalTitle('Compose Mail');
  }

  function closeModal() {
    setModalContent('')
    setToggleModal(false);
    resetForm(initialValue);
  }

  function showEmail(content) {
    let mailId = content.id;
    content.boxName = boxName;
    mailData.map(item => {
      if (item.id === mailId) {
        item.opened = true;
      }
      return item;
    });
    setMailContent(content);
    setToggleModal(true);
    setModalContent('email');
    console.log(content);
    setModalTitle(content.subject);
    editMailStatus(mailData);
  }
  function editMailStatus(mailData) {
    let userRef = useLocal.get('userRef');
    if (!userRef) {
      history.push('/');
    } else {

      let editedAppData = appData.map(item => {
        if (item.id === userRef) {
          item[boxName] = mailData;
        }
        return item
      });
      useLocal.save('appData', editedAppData);
      setDashboardData(useLocal.get('appData'));
    }
  }
  function collapsed() {
    let collapseStatus = sidebarCollapsed;
    setSidebarCollapsed(!collapseStatus);
  }
  function logOut() {
    useLocal.removeItem('userRef');
    history.push('/');
  }

  function setAppData(userRef) {
    let userData = dashBoardData.filter(item => {
      return item.id === userRef
    });
    setUserData(userData[0]);
    setMailData(userData[0][boxName]);
  }

  function deleteMail(selectedMail) {
    let filteredMail = mailData.filter(item => {
      return selectedMail.indexOf(item.id) === -1
    })
    editMailStatus(filteredMail);
  }

  function submitMail(e) {
    e.preventDefault();
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
    setDashboardData(useLocal.get('appData'));
    closeModal();
    // editMailStatus(editedAppData);
  }

  useEffect(() => {
    let userRef = useLocal.get('userRef');
    setAppData(userRef);
  }, [dashBoardData]);

  useEffect(() => {
    let userRef = useLocal.get('userRef');
    // console.log(userRef);
    if (!userRef) {
      history.push('/');
    } else {
      setAppData(userRef);
    }

  }, [boxName]);

  return (
    <div style={{ height: "100%" }}>
      <div className="d-flex" style={{ height: "100%" }}>
        <Sidebar sidebarCollapsed={sidebarCollapsed} userData={userData} />
        <main className="mainContent">
          <Header collapsed={collapsed} logOut={logOut} />
          <div className="row mx-0 mt-5">
            <MainContentSidebar userData={userData} displayCompose={showCompose} />
            <MailListing boxName={boxName} mailData={mailData} showEmail={showEmail} deleteMail={deleteMail} />
          </div>
        </main>
      </div>
      <ModalWindow show={toggleModal} title={modalTitle} modalSize={modalType === 'compose' ? 'modal-lg' : ''} hidemethod={closeModal}>
        {modalType === 'compose' && <ComposeForm changeField={changeField} formData={formData} submitMail={submitMail} />}
        {modalType === 'email' && <EmailBody mail={mailContent} />}
      </ModalWindow>
    </div>
  );
}

export default Dashboard;
