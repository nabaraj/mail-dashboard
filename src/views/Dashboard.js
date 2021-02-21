import { useState, useEffect } from 'react';
import Header from "../components/header/Header";
import MainContentSidebar from "../components/maincontentsidebar/MainContentSidebar";
import ModalWindow from '../components/modal/ModalWindow';
import Sidebar from "../components/sidebar/Sidebar"
import MailListing from './../components/mailingList/MailingList';
import { useLocal } from "./../utils/utilty";
import ComposeForm from "./../components/composeForm/ComposeForm";
import EmailBody from '../components/emailbody/EmailBody';

const Dashboard = ({appData}) => {
  const [mailData, setMailData] = useState([]);
  const [boxName, setBoxName] = useState('inbox');
  const [mailContent, setMailContent] = useState({});
  const [userData, setUserData] = useState({});
  const [toggleModal, setToggleModal] = useState(false);
  const [modalType, setModalContent] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  function showCompose (e){
    setToggleModal(true);
    setModalContent('compose');
  }
  function closeModal(){
    setToggleModal(false);
  }
  function showEmail(content){
    setMailContent(content);
    setToggleModal(true);
    setModalContent('email');
  }
  function collapsed(){
    let collapseStatus = sidebarCollapsed;
    setSidebarCollapsed(!collapseStatus);
  }
  useEffect(() => {
    let userData = appData.filter(item => {
      return item.id === '6031465f59eb1ef5571b82ff'
    });
    setUserData(userData[0]);
    setMailData(userData[0][boxName]);
  }, []);
  return (
    <div style={{height:"100%"}}>
      <div className="d-flex" style={{height:"100%"}}>
        <Sidebar sidebarCollapsed={sidebarCollapsed}/>
        <main className="mainContent">
          <Header collapsed={collapsed}/>
          <div className="row mx-0 mt-5">
            <MainContentSidebar userData={userData} displayCompose={showCompose} />
            <MailListing boxName="inbox" mailData={mailData} showEmail={showEmail} />
          </div>
        </main>
      </div>
      <ModalWindow show={toggleModal} modalSize={modalType==='compose'?'modal-lg':''} hidemethod={closeModal}>
        {modalType==='compose' && <ComposeForm/>}
        {modalType==='email' && <EmailBody mail={mailContent}/>}
      </ModalWindow>
    </div>
  );
}

export default Dashboard;
