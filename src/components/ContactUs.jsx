import React, { useRef } from 'react';


const ContactUs = (props) => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');

  const submitHandler = (event) => {

    event.preventDefault();

    const data = {
      name: nameRef.current.valueOf,
      email: emailRef.current.valueOf,
      phone: phoneRef.current.valueOf
    }

    console.log(data);
    // props.onSubmit(data);

    nameRef.current.valueOf = "";
    emailRef.current.valueOf = "";
    phoneRef.current.valueOf = ""
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder='+910000000000' ref={phoneRef} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUs;