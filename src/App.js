import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LogIn from './components/LogIn';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className='App'>
      <Router >
        <Header />
        <Routes>
          <Route exact path='/' Component={LogIn} />
          <Route exact path='/home' Component={Home} />
          <Route exact path='/detail/:id' Component={Detail} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
