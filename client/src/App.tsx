import { BrowserRouter, Route } from 'react-router-dom';
import { Login, Wallet } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Route path='/login' component={Login}></Route>
      <Route path='/wallet' component={Wallet}></Route>
    </BrowserRouter>
  );
}

export default App;
