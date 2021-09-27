import React from "react";

function ContactMe() {
  return (
    <div>
      
      <form>
        
        <div className='comment'>
        <h1>Contact me!</h1>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" required autoComplete="off" autoFocus />
          <label htmlFor="lastname">Lastname:</label>
          <input
            id="lastname"
            type="text"
            required
            autoComplete="off"
            autoFocus
          />
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" required autoComplete="off" autoFocus />
          <label htmlFor="message">Message:</label>
          <input
            id="message"
            type="text"
            required
            autoComplete="off"
            autoFocus
          />

          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
