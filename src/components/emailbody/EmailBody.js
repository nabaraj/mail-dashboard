const EmailBody = ({ mail }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="pb-3">
          <h3>{mail.subject}</h3>
        </div>
        <div>
          <h5 className="font-14">{mail.from}<span className="text-textLightDark pl-3">{`<${mail.fromEmail}>`}</span></h5>
          
        </div>
        <div>
          <p>{mail.content}</p>
        </div>
      </div></div>
  );
}

export default EmailBody;
