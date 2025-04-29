import React, { useState } from 'react';

const SideForm = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
        <div className="side-tab" onClick={()=> setOpen(!open)}>
            {open ? 'Close' : 'Contact Us'}
        </div>
        <div className={`side-form ${open ? 'open' : ''}`}>
            <form>
                <h2>Course Enquiry Form</h2>
                <p>Contact us Anytime!</p>
                <input type="text" placeholder="Name*" />
                <input type="number" placeholder="Phone Number*" />
                <input type="email" placeholder="Email ID" />
                <input type="text" placeholder="Course" />
                <textarea placeholder="Comments" />
                <button type="submit">Enquire</button>
            </form>
        </div>
    </>
  );
};

export default SideForm;