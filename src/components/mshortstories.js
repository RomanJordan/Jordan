import { Component } from "react";
import mshortstories2 from '../media/mshortstories2.png'
import mshortstories3 from '../media/mshortstories3.png'
import mshortstories4 from '../media/mshortstories4.png'
import mshortstories5 from '../media/mshortstories5.png'
import arrowLeft from '../media/arrow_left.svg'
import arrowRight from '../media/arrow_right.svg'

class mshortstories extends Component {
    state = {
        index: 0, 
        pics: [mshortstories2, mshortstories3, mshortstories5]
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
                <p>A site for short stories, post your own short stories, share them, and read short stories of others</p>
                <p>Technologies used: Django (python), PostgreSQL, AWS, Heroku</p>
                
                <img src={this.state.pics[this.state.index]} style={{"maxHeight":"50%","maxWidth":"60%"}} /> <br/>
                <button class="btn btn-outline-dark mt-2 mr-1" onClick={this.onClickPrevious}> <img src={arrowLeft}></img> </button>
                <button class="btn btn-outline-dark mt-2 ml-1" onClick={this.onClickNext}> <img src={arrowRight}></img> </button>
            </div>
        )
    }
}

export default mshortstories;