import React from 'react'
import './App.css'

export default class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            characters: 0,
            comment:'',
            comments:false
        }
    }

    handleChange = (e) => {
        this.setState({
            characters : e.length,
            comment:e
        })
    }


    render(){
        // const {maxChar,commentShow} = this.props
        return(
            <div className="comments">
                
                <div className="comment-box"> 
                    <form>
                        <textarea  
                        placeholder="Your comment here.."
                        className="form-control"
                        onChange={(e) => this.handleChange(e.target.value)}
                        />
                        <input
                         type="submit"
                         className="submit"
                         value="send"
                        /> 
                    </form> 
                    <small>{this.props.maxChar - this.state.characters} remaining</small>
                </div>                
            
            
            <div>{this.state.comment}</div>
            </div>
            
            
        )
    }
}