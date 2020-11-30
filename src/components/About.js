import { Component } from "react";

class About extends Component {

    render() {
        
        return (
            <div className="container" style={{borderLeft: '1px solid black', borderRight: '1px solid black'}}>
                <p class="lead">Hello!</p>
                <p>I'm Jordan Roman, living in New York City. I have been programming for about 5 years. Currently pursuing a B.S. in Computer Science at City University of New York, Lehman College </p>
                <p>I have experience with frontend web development, and backend, with the backend being my strongest area. </p>    
            </div>
            
        )
    }
}


export default About;