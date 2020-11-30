import { Component } from "react";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(ev) {
        alert('Thanks!' );
        
        ev.preventDefault();
    }

    render() {
        
        return (
            <div className="container">
                <h1 class="text-center">Contact me</h1>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" value="submit">Submit</button>
                </form>
            </div>
            
        )
    }
}


export default Main;