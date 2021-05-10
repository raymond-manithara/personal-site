import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import About from './screens/about';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
    </BrowserRouter>
  );
}

export default App;
