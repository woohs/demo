import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from './page/main';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/users/">Users</Link></li>
            <li><Link to="/main/">Main</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route path="/users" exact component={Users} />
        <Route path="/Main" exact component={Main} />

      </div>
    </Router>
  )
}

export default AppRouter;