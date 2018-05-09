import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './IdeaForm';
import PostFeed from './IdeaFeed';
import Spinner from '../common/Spinner';
import { getPosts } from '../../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
              <PostForm />
                <div id="ideas">
                    <h1 style={{marginTop: '80px', fontSize: '2em'}}>Idea Feed</h1>
                    <hr style={{marginBottom: '30px'}}/>
                    <div className="ui three stackable cards">
                        {postContent}
                    </div>
                </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
