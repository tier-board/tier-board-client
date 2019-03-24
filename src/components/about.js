import React, { Component, Fragment } from 'react';

const pStyle = {
    margin: '50px',
    
}
export default class About extends Component {
    render() {

        return (
            <Fragment>
              {/* <nav>
                <ul>
                  <li className="nav"><a href="/tier-board-client/">home</a></li>
                  <li className="nav"><a href="https://tier-board.github.io/tier-board-client/#/about">about</a></li>
                </ul>
              </nav> */}
              <h2>About Tier Board</h2>
              <div>
              <p style={pStyle}>This full stack app allows you to enter and display the work days status for safety, quality, delivery, cost, and morale info. Double click on an existing entry if you'd like to update or delete. The NodeJS server and MongoDB are hosted on Heroku.  The front end is built with React and Redux. </p>
              </div>
            </Fragment>
        );
    }
}