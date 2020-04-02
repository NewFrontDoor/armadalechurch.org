/* eslint-disable */
import React, { Component } from 'react';

class NotificationBanner extends Component {
  render() {
    return (
      <div className="notification-banner">
        <p className="notification-banner-text">
          All Armadale services are now only online.  <a className="notification-banner-link" href="/covid-19">Find out more</a>
        </p>
      </div>
    );
  }
}

export default NotificationBanner;
