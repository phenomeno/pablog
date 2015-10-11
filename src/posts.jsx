import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';
import PostsModel from './postsmodel';

class PostRow extends React.Component {
    render() {
       return (
           <div key={this.props.id}>
               <Card>
                <CardTitle title={this.props.title} subtitle="">
                </CardTitle>
                <CardText>
                    {this.props.text}
                </CardText>
               </Card>
           </div>
       )
    }
}

class PostTable extends React.Component {
    render() {
        var rows = [];
        var posts = this.props.posts;
        return (<div>
         {posts.map(post => <PostRow key={post.id} title={post.title} text={post.text} />)}
        </div>);
    }
}

class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }; 
    }

    componentDidMount() {
        PostsModel.get(function(data) {
            this.setState(data);
        }.bind(this));
    }
    
    render() {
        return (<div>
            <PostTable posts={this.state.posts} />
        </div>);
    }
}

module.exports = Posts;
