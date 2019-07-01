import * as React from 'react';
import './Videos.scss';

const Videos = () => (
  <div className="videos">
    <p className="label">Videos</p>
    <div className="top-bar">
      <button>+ Add new video</button>
      <div className="search">
        <span className="fa fa-search"></span>
        <input placeholder="Search videos"/>
      </div>
    </div>

    <div className="category-table">
      <div className="table-header">
        <div className="data">S/N</div>
        <div className="data">Title</div>
        <div className="data">Video thumbnail</div>
        <div className="data">video type</div>
        <div className="data">Date created</div>
        <div className="data">Action</div>
      </div>
      <div className="table-row">
        <div className="data">1</div>
        <div className="data">Big buck bunny</div>
        <div className="data">thumbnail</div>

        <div className="data">MISC</div>
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
        <div className="data">Big buck bunny</div>
        <div className="data">thumbnail</div>
        <div className="data">MISC</div>
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
        <div className="data">Big buck bunny</div>
        <div className="data">thumbnail</div>
        <div className="data">MISC</div>
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

export default Videos;
