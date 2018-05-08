import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {deletePost, addLike, removeLike} from '../../actions/postActions';
import idea from '../../img/showcase.jpg';

class PostItem extends Component {
    onDeleteClick(id) {
        this.props.deletePost(id);
    }

    onLikeClick(id) {
        this.props.addLike(id);
    }

    onUnlikeClick(id) {
        this.props.removeLike(id);
    }

    findUserLike(likes) {
        const {auth} = this.props;
        if (likes.filter(like => like.user === auth.user.id).length > 0) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const {post, auth, showActions} = this.props;

        return (
            <div id="ideas">
                <h1 style={{marginTop: '80px', fontSize: '2em'}}>Idea Feed</h1>
                <hr style={{marginBottom: '30px'}}/>
                <div style={{marginBottom: '30px'}}>
                </div>
                <div className="ui three stackable cards">
                    <div className="ui raised link card idea-card">
                        <div className="image">
                            <img src={idea}/>
                        </div>
                        <div className="content">
                            <div className="right floated author">
                                <img className="ui avatar image" src="https://tinyurl.com/y86yjmya"/> Ace
                            </div>
                            <div className="header">
                                Idea Title
                            </div>
                            <div className="meta">2 days ago</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur
                                consequuntur voluptates? Ad alias, aperiam culpa cum illum magnam...
                            </div>
                        </div>
                        <div className="extra content">
                                <span className="left floated like">
                                  <i className="like icon"></i>
                                  123
                                </span>
                            <span className="right floated star">
                                  <a href="">
                                      <i className="comment icon"></i>
                                  </a>
                                  123
                                </span>
                        </div>
                        <div className="ui bottom attached button">
                            Learn More
                            <i className="caret right icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//
// <div className="card card-body mb-3">
//   <div className="row">
//     <div className="col-md-2">
//       <a href="profile.html">
//         <img
//             className="rounded-circle d-none d-md-block"
//             src={post.avatar}
//             alt=""
//         />
//       </a>
//       <br />
//       <p className="text-center">{post.name}</p>
//     </div>
//     <div className="col-md-10">
//       <p className="lead">{post.text}</p>
//         {showActions ? (
//             <span>
//                 <button
//                     onClick={this.onLikeClick.bind(this, post._id)}
//                     type="button"
//                     className="btn btn-light mr-1"
//                 >
//                   <i
//                       className={classnames('fas fa-thumbs-up', {
//                           'text-info': this.findUserLike(post.likes)
//                       })}
//                   />
//                   <span className="badge badge-light">{post.likes.length}</span>
//                 </button>
//                 <button
//                     onClick={this.onUnlikeClick.bind(this, post._id)}
//                     type="button"
//                     className="btn btn-light mr-1"
//                 >
//                   <i className="text-secondary fas fa-thumbs-down" />
//                 </button>
//                 <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
//                   Comments
//                 </Link>
//                 {post.user === auth.user.id ? (
//                     <button
//                         onClick={this.onDeleteClick.bind(this, post._id)}
//                         type="button"
//                         className="btn btn-danger mr-1"
//                     >
//                       <i className="fas fa-times" />
//                     </button>
//                 ) : null}
//               </span>
//         ) : null}
//     </div>
//   </div>
// </div>

PostItem.defaultProps = {
    showActions: true
};

PostItem.propTypes = {
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {deletePost, addLike, removeLike})(
    PostItem
);
