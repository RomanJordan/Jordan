import logo from './logo.svg';
import ReactDOM from "react-dom";
import Header from './components/Header'
import Main from './components/Contact'
import Projects from './components/Projects'
import mshortstories from './components/mshortstories'
import chip8 from './components/chip8'
import jgg from './components/jgg'
import About from './components/About'
import './App.css';
import "./components/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";

const Links = () => (
  <>
    <div>
      <p class="mb-1">
        <Link to="/">Home</Link>
      </p>

      
    </div>
  </>
);


function App() {
  return (
    <BrowserRouter>
      <h4 class="display-4"><Link to="/">Jordan</Link></h4>
      <p class="mt-1 mb-1">New York City</p>
      <p class="mt-1 mb-1">Jordan.Roman90@gmail.com</p>
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Header} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/mshortstories" component={mshortstories} />
                <Route exact path="/projects/chip8" component={chip8} />
                <Route exact path="/projects/jgg" component={jgg} />
                <Route exact path="/contact" component={Main} />
                <Route exact path="/about" component={About} />
              </Switch>
            </PageTransition>
          );
        }}
      />
     
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
