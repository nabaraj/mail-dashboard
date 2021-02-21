import { useState } from 'react';
import { useLocal } from './../utils/utilty';
import { useHistory } from 'react-router-dom';
import useUpdateForm from "./../utils/submitFormHook";
export default function Loginpage({ appData }) {
  let history = useHistory();

  const [formData, changeField] = useUpdateForm({ email: '', password: '' });
  const [hasError, setHasError] = useState(false);

  function checkLogin(e) {
    e.preventDefault();
    console.log("checkLogin");
    let userDetails = appData.filter(item => {
      return item.email === formData.email && item.password === formData.password
    });
    if (userDetails.length === 0) {
      setHasError(true);
    } else {
      useLocal.save('userRef', userDetails[0].id);
      history.push('/dashboard/inbox')
    }

  }
  return (
    <div className="container" style={{ maxWidth: "480px" }}>
      <div className="card shadow mt-5">
        <div className="card-body">
          <form className="form-horizontal" onSubmit={checkLogin}>
            {hasError && <div class="text-danger">
              Email password not matched
            </div>}
            <fieldset>
              <legend>Login Form</legend>
              <div className="form-group">
                <label className="control-label" htmlFor="textinput">Email</label>
                <div className="">
                  <input id="email" onChange={changeField} name="email" type="text" placeholder="Enter your email" className="form-control input-md" required="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="passwordinput">Password</label>
                <div className="">
                  <input id="password" onChange={changeField} name="password" type="password" placeholder="Enter your password" className="form-control input-md" required="" />

                </div>
              </div>
              <button type="submit" className="btn btn-info btn-block" disabled={!formData.email || !formData.password}>Submit</button>
            </fieldset>
          </form>

        </div>
      </div>
    </div>
  )
}
