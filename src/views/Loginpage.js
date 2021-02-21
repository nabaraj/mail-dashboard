
export default function Loginpage() {
  return (
    <div className="container" style={{ maxWidth: "480px" }}>
      <div className="card shadow mt-5">
        <div className="card-body">
          <form className="form-horizontal">
            <fieldset>
              <legend>Form Name</legend>
              <div className="form-group">
                <label className="control-label" for="textinput">Email</label>
                <div className="">
                  <input id="textinput" name="textinput" type="text" placeholder="Enter your email" className="form-control input-md" required="" />

                </div>
              </div>
              <div className="form-group">
                <label className="control-label" for="passwordinput">Password</label>
                <div className="">
                  <input id="passwordinput" name="passwordinput" type="password" placeholder="Enter your password" className="form-control input-md" required="" />

                </div>
              </div>
              <button type="button" className="btn btn-info btn-block">Submit</button>
            </fieldset>
          </form>

        </div>
      </div>
      {/* <div className="wrapper fadeInDown">
  <div id="formContent">
    <div className="fadeIn first">
      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
    </div>
    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div> */}
    </div>
  )
}
