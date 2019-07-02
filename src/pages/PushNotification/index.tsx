import * as React from 'react';
import './PushNotification.scss';

const PushNotification = () => (
    <div className="push-notification">
      <p className="label">Push Notification</p>
      <p className="form-label">Send Notification</p>
      <div className="password-reset">
      <p>Title</p>
      <input placeholder="Enter title"/>
      <p>Message</p>
      <textarea />
      <br />
      <button>Send</button>
    </div>
    </div>
  );

 export default PushNotification;
