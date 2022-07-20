import logo from './logo.svg';
import './App.css';
import Api from './components/Api';
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Api/>
      <Footer/>
    </div>
  );
}

export default App;
