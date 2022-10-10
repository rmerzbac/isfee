import React from "react";

class Contact extends React.Component {
    render() {
        return(
            <div className="body">
                <h2>Contact us</h2>
                <p>Reach out to us about any questions, suggestions, bugs, or to submit a new page for the site.</p>
                <br/>

                <form name="contact" method="POST" data-netlify="true">
                    <p>
                    <label>Name: <input type="text" name="name" required/></label>
                    </p>
                    <p>
                    <label>Email: <input type="email" name="email" required/></label>
                    </p>
                    <p>
                    <label>Message: <textarea name="message" required></textarea></label>
                    </p>
                    <p>
                    <button type="submit">Send</button>
                    </p>
                </form>

            </div>
        );
    }
  }
  export default Contact;