import React, { Component, Fragment } from 'react';

const pStyle = {
    margin: '150px',
    background: 'green'
}
export default class About extends Component {
    render() {

        return (
            <Fragment>
              <nav>
                <ul>
                  <li className="nav"><a href="/tier-board-client/">home</a></li>
                  <li className="nav"><a href="/tier-board-client/#/about">about</a></li>
                </ul>
              </nav>
              <h2>About this app</h2>
              <p style={pStyle}>This simple full stack app allows me to enter and display the work days status for safety, quality, delivery, cost, and morale info. I use this to assist my after lunch stand up meetings. I hosted my NodeJS server and MongoDB on Heroku, and for the front end I used React and Redux. </p>
            </Fragment>
        );
    }
}