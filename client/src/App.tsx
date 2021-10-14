import { Switch, Route, Router } from 'react-router-dom';
import { Login, Wallet } from 'pages';
import { history } from './index';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/wallet' component={Wallet}></Route>
      </Switch>
    </Router>
  );
}

export default App;
