import Agenda from './screens/agenda';
import './screens/login/index'
import Login from './screens/login/index';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} > </Route>
        <Route path="/agenda" element={<Agenda />} > </Route>
      </Routes>
    </Router>

    // <Login/>    
  );
}

export default App;
