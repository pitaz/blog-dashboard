import * as React from 'react';
import './Settings.scss';

const Settings = () => (
  <div className="settings">
    <p className="label">Settings</p>
    <p className="form-label">Change password</p>
    <div className="password-reset">
      <p>Old password</p>
      <input />
      <p>New password</p>
      <input />
      <p>Confirm new password</p>
      <input />
      <br />
      <button>Change password</button>
    </div>
  </div>
);

export default Settings;
