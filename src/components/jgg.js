import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from './Header'


class jgg extends Component {
    render() {
        return (
            <div class="container text-center" style={{borderLeft: '1px solid black', borderRight: '1px solid black'}}>
                <h1>jgj</h1>
                <p>A site for short stories, post your own short stories, share them, and read short stories of others</p>
                <p>Technologies used: Django (python), PostgreSQL, AWS, Heroku</p>
            </div>
        )
    }
}

export default jgg;