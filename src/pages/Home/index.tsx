import * as React from 'react';
import { HomeState, HomeProp} from './interfaces';
import './Home.scss';

class Home extends React.Component<HomeState, HomeProp> {

  render() {
    return (
      <div className="home">
        <p className="label">Dashboard</p>
      </div>
    );
  }
}
 export default Home;
