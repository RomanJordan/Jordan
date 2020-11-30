import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from './Header'


class Projects extends Component {
    render() {
        return (
            <div class="container-fluid">
                <h1>Stuff I've been working on</h1>

                <div class="work-container pt-2 pb-2" style={{borderTop: '1px solid black', borderBottom: '1px solid black'}}>
                    <h3 class="title"><Link to="/projects/mshortstories">mShortStories</Link> </h3>
                </div>

                <div class="work-container pt-2 pb-2" style={{borderBottom: '1px solid black'}}>
                    <h3 class="title"><Link to="/projects/mshortstories">Chip8 Emulator</Link> </h3>
                </div>

                <div class="work-container pt-2 pb-2" style={{borderBottom: '1px solid black'}}>
                    <h3 class="title"><Link to="/projects/mshortstories">Just Good Games</Link> </h3>
                </div>

            </div>
        )
    }
}

export default Projects;