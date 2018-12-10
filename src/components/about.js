import React, { Component, Fragment } from 'react';

export default class About extends Component {
    render() {
        return (
            <Fragment>
              <nav>
                <ul>
                  <li className="nav"><a href="/tier-board-client/">home</a></li>
                  <li className="nav"><a href="/tier-board-client/about">about</a></li>
                </ul>
              </nav>
              <h2>About this app</h2>
              <p>This simple full stack app allows me to enter and display the work days status for safety, quality, delivery, cost, and morale info. I use this to assist my after lunch stand up meetings (it's convenient to use my phone). I hosted my NodeJS server and MongoDB on Heroku, and for the front end I used React and Redux hosted on GitHub pages. There are a few bugs and many more features that I could add if I decide it's worthwhile. For now it works for what I need it for. ***If you sample this app, the data entered should persist because it is entered into the database; however, I'm only pulling the data from today's date and there is a time zone disconnect or something from the server after...5pm or so. But it works great at lunch time!</p>
            </Fragment>
        );
    }
}