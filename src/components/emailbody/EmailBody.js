const EmailBody = ({ mail }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="pb-3 col-12 d-none">
          <h3>{mail.subject}</h3>
        </div>
        <div className="col-12">
          <h5 className="font-14">{mail.boxName === 'sent' ? mail.to : mail.from}<span className="text-textLightDark pl-3">{`<${mail.boxName === 'sent' ? mail.toEmail : mail.fromEmail}>`}</span></h5>

        </div>
        <div className="col-12">
          <p>{mail.content}</p>
        </div>
      </div></div>
  );
}

export default EmailBody;
