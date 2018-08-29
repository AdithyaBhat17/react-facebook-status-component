import React from 'react'
import './App.css'
import Comment from './Comment'

export default class Like extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liked:false,
            commentShow:false
        }
    }

    toggleLikes = () => {
        this.setState((prevState) => ({
            liked: !prevState.liked
        }))
    }

    toggleComments = () => {
        this.setState((prevState) => ({
            commentShow: !prevState.commentShow
        }))
    }


    render(){
        return(
            <div className="likes">
                {this.state.liked && 
                    <div className="liked">
                        <i className="far fa-thumbs-up"></i>You
                    </div>
                }
                <div className="like-comment-share">
                    <div className="col-sm-4 col-xs-4">
                        <button onClick={() => this.toggleLikes()}>
                            <i className="far fa-thumbs-up"></i>Like
                        </button>                        
                    </div>
                    <div className="col-sm-4 col-xs-4">
                        <button onClick={() => this.toggleComments()}>
                            <i className="far fa-comment"></i>Comment
                        </button>
                    </div>
                    <div className="col-sm-4 col-xs-4">
                        <button>
                            <i className="fas fa-share"></i>Share
                        </button>
                    </div>
                </div>
                <Comment 
                maxChar={140}
                commentShow={this.state.commentShow}
                />
            </div>
            
        )
    }
}