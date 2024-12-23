import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="container mt-5" id="contact">
      <h2 className="text-center top-sec">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name" className="mt-4">
                Name:
              </label>
              <input
                type="text"
                className="form-control bg-dark"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="mt-3">
                Email:
              </label>
              <input
                type="email"
                className="form-control bg-dark"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="mt-3">
                Message:
              </label>
              <textarea
                id="message"
                className="form-control bg-dark"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-5">
              Submit
            </button>
          </form>
          {/* TODO - ADD LINKS TO GITHUB AND LINKEDIN */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
