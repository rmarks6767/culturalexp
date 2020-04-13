
import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Content/>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
