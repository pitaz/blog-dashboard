import * as React from 'react';
import './Posts.scss';

const Posts = () => (
  <div className="posts">
    <p className="label">Posts</p>
    <div className="top-bar">
      <button>+ Add new post</button>
      <div className="search">
        <span className="fa fa-search"></span>
        <input placeholder="Search posts"/>
      </div>
    </div>

    <div className="category-table">
      <div className="table-header">
        <div className="data">S/N</div>
        <div className="data">Post title</div>
        <div className="data">Post image</div>
        <div className="data">Posted by</div>
        <div className="data">Category</div>
        <div className="data">Action</div>
      </div>
      <div className="table-row">
        <div className="data">1</div>
        <div className="data">George H.W. Bush Hospitalized For ‘Low Blood Pressure And Fatigue’</div>
        <div className="data">thumbnail</div>
        <div className="data">Pitaz</div>
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
        <div className="data">George H.W. Bush Hospitalized For ‘Low Blood Pressure And Fatigue’</div>
        <div className="data">thumbnail</div>
        <div className="data">Pitaz</div>
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
        <div className="data">George H.W. Bush Hospitalized For ‘Low Blood Pressure And Fatigue’</div>
        <div className="data">thumbnail</div>
        <div className="data">Pitaz</div>
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

export default Posts;
