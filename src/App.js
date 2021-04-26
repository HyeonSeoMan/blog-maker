import React from 'react';
import Home from './views/Home';
import Creater from './views/Creater';
import { Route, Link } from 'react-router-dom';

function App3() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/creater">creater</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/creater" component={Creater} />
    </div>
  );
}

export default App3;