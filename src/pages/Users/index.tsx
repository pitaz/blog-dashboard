import * as React from 'react';
import './Users.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Users = () => (
  <div className="users">
    <p className="label">Users</p>
    <div className="top-bar">
      <button>+ Add new user</button>
      <div className="search">
        <span className="fa fa-search"></span>
        <input placeholder="Search users"/>
      </div>
    </div>

    <div className="category-table">
      <div className="table-header">
        <div className="data">S/N</div>
        <div className="data">Username</div>
        <div className="data">Email</div>
        <div className="data">User role</div>
        <div className="data">Date created</div>
        <div className="data">Action</div>
      </div>
      <div className="table-row">
        <div className="data">1</div>
        <div className="data">pitaz</div>
        <div className="data">pitaz@mail.com</div>
        <div className="data">admin</div>
        <div className="data">2018-03-09 06:32:30</div>
        <div className="data">
          <div>
            <button>Edit</button>
            <button>Delete</button>
            <button> <FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="data">2</div>
        <div className="data">femi</div>
        <div className="data">femi@mail.com</div>
        <div className="data">admin</div>
        <div className="data">2018-03-09 06:32:30</div>
        <div className="data">
          <div>
            <button>Edit</button>
            <button>Delete</button>
            <button> <FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="data">3</div>
        <div className="data">bola</div>
        <div className="data">bola@mail.com</div>
        <div className="data">admin</div>
        <div className="data">2018-03-09 06:32:30</div>
        <div className="data">
          <div>
            <button>Edit</button>
            <button>Delete</button>
            <button> <FontAwesomeIcon icon={faPaperPlane} /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Users;
