/* eslint-disable */
import React, { Component } from 'react';

class NotificationBanner extends Component {
  render() {
    return (
      <div className="notification-banner">
        <p className="notification-banner-text">
          {/*All Armadale Congregational Church services are now only online.  <a className="notification-banner-link" href="/covid-19">Find out more</a>*/}
          All Armadale Congregational services have resumed in person, but are also livestreamed and recorded on <a style={{ color: 'white', textDecoration: 'underline' }} href="https://www.youtube.com/channel/UCGJStzEWZVyvZaX0zK4PA9Q">YouTube</a>.
        </p>
      </div>
    );
  }
}

export default NotificationBanner;
