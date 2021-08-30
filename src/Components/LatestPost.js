import React from 'react';
import LatestPostService from '../Services/LatestPostService';


class LatestPost extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        LatestPostService.getPosts()
        .then((res) => {
            this.setState({posts:res});

            // confirmed the post from backend is received
            console.log(res);
        });
    }


    render(){
        return(
            <div>
                <h2>Latest Post Component Loaded</h2>
            </div>
        )
    }

}

export default LatestPost;