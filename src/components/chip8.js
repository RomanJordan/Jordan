import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from './Header'
import space1 from '../media/space1.png'
import space2 from '../media/space2.png'
import space3 from '../media/space3.png'
import arrowLeft from '../media/arrow_left.svg'
import arrowRight from '../media/arrow_right.svg'


class chip8 extends Component {
    state = {
        index: 0, 
        pics: [space1, space2, space3]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.pics.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.pics.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }

    render() {
        return (
            <div class="container text-center" style={{borderLeft: '1px solid black', borderRight: '1px solid black'}}>
                <h1>mShortStories</h1>
                <p>A small emulator for the CHIP8 emulator.</p>
                <p>Written in C++, with sounds, keyboad input, and all implemented. </p>
                
                <img src={this.state.pics[this.state.index]} style={{"maxHeight":"50%","maxWidth":"60%"}} /> <br/>
                <button class="btn btn-outline-dark mt-2 mr-1" onClick={this.onClickPrevious}> <img src={arrowLeft}></img> </button>
                <button class="btn btn-outline-dark mt-2 ml-1" onClick={this.onClickNext}> <img src={arrowRight}></img> </button>
            </div>
        )
    }
}

export default chip8;