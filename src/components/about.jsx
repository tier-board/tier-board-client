import React from 'react';
const pStyle = {
  margin: '50px',
    
};
const About = () => (

  <div>
    <h2>About Tier Board</h2>
    <div>
      <p style={pStyle}>This full stack app allows you to enter and display the work days status for safety, quality, delivery, cost, and morale info. Double click on an existing entry if you'd like to update or delete. The NodeJS server and MongoDB are hosted on Heroku.  The front end is built with React and Redux. </p>
    </div>
  </div>
);

export default About;