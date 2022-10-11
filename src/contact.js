import React from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      return (
        <div className="body">
            <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" required />
            </p>
            <p>
                <label htmlFor="email">Email</label> <br />
                <input type="email" id="email" name="email" required />
            </p>
            <p>
                <label htmlFor="message">Message</label> <br />
                <textarea id="message" name="message" required></textarea>
            </p>
            <p>
                <input type="submit" value="Submit message" />
            </p>
            </form>
        </div>
      );
    }
  }

  export default Contact;
