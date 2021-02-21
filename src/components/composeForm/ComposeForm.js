import React from 'react';

const ComposeForm = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <input class="form-control" id="email" type="email" placeholder="To"/>
        </div>
        <div class="form-group">
          <input class="form-control" id="subject" type="text" placeholder="Subject"/>
        </div>
        <div class="form-group">
          <textarea class="form-control" id="emailContent" rows="3"></textarea>
        </div>
        <div class="form-group">
          <button className="btn btn-success">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ComposeForm;
