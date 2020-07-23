import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
    componentDidMount() {
        // api requests are generally made from inside the component
        this.props.fetchPosts();
    };
    render() {
        console.log(this.props.posts)
        return (
            <h1>Post List</h1>
        );
    };
};

// state has properties returned by each reducers
const mapStateToProps = (state) => {
    return { posts: state.posts };
};

// first arg is always MSTP
// second arg is action creators
export default connect(mapStateToProps, { fetchPosts })(PostList);