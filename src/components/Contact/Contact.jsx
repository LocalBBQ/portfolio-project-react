import React from "react";

const Contact = () => {
  return (
    <div className="wrap">
      <div className="col-1-1"></div>
      <section>
        <h1>Let's Connect!</h1>
        <article id="Contact-intro">
          <p>
            The fastest way to reach me is at:{" "}
            <a href="tel:671-223-2938">671-223-2938 (this is a fake number)</a>
          </p>
          <h2>Other options?</h2>
          <p>
            You can also email me at{" "}
            <a href="mailto:leschultz1@students.ntc.edu">
              leschultz1@students.ntc.edu
            </a>
          </p>
          <p>I will try my best to contact you back as soon as I can.</p>
          <form>
            <fieldset>
              <legend>Business Information</legend>
              <label>Company</label>
              <input type="text" name="company" required />
              <br />
              <label>First Name</label>
              <input id="firstBox" name="fName" type="text" required />
              <br />
              <label>Last Name</label>
              <input id="lastBox" name="lName" type="text" required />
              <br />
              <label>Street Address</label>
              <input
                id="streetBox"
                name="street"
                type="text"
                placeholder="Address"
              />
              <br />
              <label>Street Address (2)</label>
              <input
                id="streetBox2"
                name="street2"
                type="text"
                placeholder="Address2"
              />
              <br />
              <label>City</label>
              <input id="cityBox" name="city" type="text" placeholder="City" />
              <br />
              <label>State</label>
              <select id="state">
                {/* Add state options here */}
              </select>
              <br />
              <label>Zip</label>
              <input
                id="zipBox"
                name="zip"
                placeholder="nnnnn"
                type="text"
                pattern="^\d{5}(-\d{4})?$"
              />
              <br />
              <label>Phone number</label>
              <input
                id="phoneBox"
                name="phone"
                type="tel"
                placeholder="nnn-nnn-nnnn"
                pattern="^\d{10}$|^(\(\d{3}\)\s*)?\d{3}[\s-]?\d{4}$"
              />
              <br />
              <label>Email address</label>
              <input type="email" name="email" required />
              <br />
              <fieldset>
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" name="user_comment"></textarea>
              </fieldset>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </article>
      </section>
    </div>
  );
};

export default Contact;