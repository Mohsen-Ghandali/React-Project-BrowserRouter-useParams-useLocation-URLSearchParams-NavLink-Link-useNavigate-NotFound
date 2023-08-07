import { memo } from "react";
import "./Contact.css"
const Contact = () => {
    return ( 
      <main className="contact">
        <h1>Contact us</h1>
        <div className="container">
        <h1>Contact Form</h1>
        <form >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
      
            required
          />
  
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
  
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
  
          <button type="submit">Send</button>
        </form>
      </div>
      </main>
     );
}
 
export default memo(Contact);