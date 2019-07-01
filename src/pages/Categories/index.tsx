import * as React from 'react';
import './Categories.scss';

const Categories = () => (
  <div className="categories">
    <p className="label">Categories</p>
    <div className="top-bar">
      <button>+ Add new category</button>
      <div className="search">
        <span className="fa fa-search"></span>
        <input placeholder="Search categories"/>
      </div>
    </div>

    <div className="category-table">
      <div className="table-header">
        <div className="data">S/N</div>
        <div className="data">title</div>
        <div className="data">thumbnail</div>
        <div className="data">Description</div>
        <div className="data">Date added</div>
        <div className="data">Action</div>
      </div>
      <div className="table-row">
        <div className="data">1</div>
        <div className="data">Entertainment</div>
        <div className="data">thumbnail</div>
        <div className="data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</div>
        <div className="data">2018-03-09 06:32:30</div>
        <div className="data">
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="data">2</div>
        <div className="data">Entertainment</div>
        <div className="data">thumbnail</div>
        <div className="data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</div>
        <div className="data">2018-03-09 06:32:30</div>
        <div className="data">
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>

      <div className="table-row">
        <div className="data">3</div>
        <div className="data">Entertainment</div>
        <div className="data">thumbnail</div>
        <div className="data">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</div>
        <div className="data">2018-03-09 06:32:30</div>
        <div className="data">
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Categories;
