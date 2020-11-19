import { Component } from "react";
import Typed from "react-typed"

class Header extends Component {

    render() {
        
        return (
            <div className="header">
                <div id="lead">
                    <h1 className="display-1 text-center">
                        <Typed
                            strings={['Hello!', 'こんにちわ!']}
                            typeSpeed={80}
                            backSpeed={60}
                            loop
                        />
                    </h1>
                </div>

                <h3 className="text-center">
                    I'm Jordan. I like writing software
                </h3>
                <div className="pr-2 text-center">
                    <h2><a href="">Contact me</a></h2>
                </div>
            </div>
            
        )
    }
}


export default Header;