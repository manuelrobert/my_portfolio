import { Switch, Route } from 'react-router-dom';
import Home from './containers/home/Home';


function App() {
  return (
      <Switch>
        <Route path='/' component={Home} exact></Route>
      </Switch>
  );
}

export default App;
