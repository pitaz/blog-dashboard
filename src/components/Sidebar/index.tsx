import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faServer, 
  faHome, 
  faFile, 
  faVideo, 
  faPaperPlane, 
  faUser, 
  faUsers, 
  faCog, 
  faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-header">
      <img src="https://res.cloudinary.com/doibwtx2d/image/upload/v1561827988/images/onews_pipyv2.png" alt="header" className="header-image" />
      <span className="user">
        <span className="menu-icon "><FontAwesomeIcon icon={faUser} /> Authors</span>
        <span className="label">admin</span>
      </span>
    </div>
    <div className="sidebar-options">
      <span className="menu-icon"><FontAwesomeIcon icon={faHome} /> Analytics</span>
      <span className="menu-icon"><FontAwesomeIcon icon={faServer} /> Categories</span>
      <span className="menu-icon"><FontAwesomeIcon icon={faFile} /> Posts</span>
      <span className="menu-icon"><FontAwesomeIcon icon={faVideo} /> Videos</span>
      <span className="menu-icon"><FontAwesomeIcon icon={faPaperPlane} /> Push notification</span>
      <span className="menu-icon"><FontAwesomeIcon icon={faUser} /> Authors</span>
      <span className="menu-icon"><FontAwesomeIcon icon={faUsers} /> users</span>
      <span className="menu-icon"><FontAwesomeIcon icon={faCog} /> Settings</span>
      <span className="menu-icon"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</span>
    
    </div>
     
  </div>
);

export default Sidebar;
