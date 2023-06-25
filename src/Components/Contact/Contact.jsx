import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <img src="https://images.pexels.com/photos/33999/pexels-photo.jpg?cs=srgb&dl=pexels-negative-space-33999.jpg&fm=jpg" />
      <form className="form">
        <h2>Contact Us</h2>
        <div className="inline">
          <div class="form-group">
            <input
              type="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <input type="text" id="exampleInputPassword1" placeholder="Name" />
          </div>
        </div>
        <div class="form-group sbj">
          <input
            type="text"
            className="d"
            id="exampleInputPassword1"
            placeholder="Subject"
          />
        </div>
        
        <span>Message</span>
        <textarea rows="50"/>
        

        <button type="submit" class="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
