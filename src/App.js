import logo from './logo.svg';
import Header from './components/Header'
import Main from './components/Main'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
        <Header/>
        <Main />
    </div>
  );
}

export default App;
