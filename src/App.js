import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LogIn from './components/LogIn';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Router >
        <Header />
        <Routes>
          <Route exact path='/' Component={LogIn} />
          <Route exact path='/home' Component={Home} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
