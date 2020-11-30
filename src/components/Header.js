import { Component } from "react";
import Typed from "react-typed"
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        
        return (
            <div className="container">
                <div id="lead">
                    <h1 className="display-1 text-center" id="lead">
                        <Typed
                            strings={['Hello!', 'こんにちわ!']}
                            typeSpeed={80}
                            backSpeed={60}
                            loop
                        />
                    </h1>
                </div>

                <div className="display-5 text-center">
                    <h2> <Link to="/about">About</Link> </h2>
                    <h2> <Link to="/contact">Contact me</Link> </h2>
                    <h2> <Link to="/projects">Work</Link> </h2>
                </div>
                
            </div>
            
        )
    }
}


export default Header;