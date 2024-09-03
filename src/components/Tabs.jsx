import React, { useState } from 'react';
import './Tabs.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={activeTab === 'About Me' ? 'active' : ''}
          onClick={() => setActiveTab('About Me')}
        >
          About Me
        </button>
        <button
          className={activeTab === 'Experiences' ? 'active' : ''}
          onClick={() => setActiveTab('Experiences')}
        >
          Experiences
        </button>
        <button
          className={activeTab === 'Recommended' ? 'active' : ''}
          onClick={() => setActiveTab('Recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'About Me' && <div>Hello, I am Roshan Kumar from Deoghar, Jharkhand, and I am currently living in Bangalore. I completed my schooling at DAV Public School, Deoghar, and I graduated in Information Technology from DY Patil College of Engineering, Akurdi, Pune.

I have completed two internships: one as a Web Developer Intern at The Sparks Foundation and the other as an ESD Trainee at Zensar Technologies. I am skilled in programming languages like C++ and have a strong interest in HTML, CSS, JavaScript, and ReactJS.

In addition to my professional interests, I enjoy playing cricket and football, watching matches, and listening to music. </div>}
        {activeTab === 'Experiences' && <div><b>The Sparks Foundation (Web Developer Intern):</b>
At The Sparks Foundation, I worked as a Web Developer Intern, where I successfully designed and developed a dynamic, responsive website integrated with a secure payment gateway. Using HTML, CSS, and JavaScript, I enhanced the user experience and improved page load speed by 40%. Additionally, I implemented the Razorpay payment method, ensuring secure and efficient transactions for users.</div>}
        {activeTab === 'Recommended' && <div>I am good at c++, html, css, javascript, reactjs, tailwindcss,nodejs, mongoDB.</div>}
      </div>
    </div>
  );
}

export default Tabs;