import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

class Landing extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div id={'landing'} className="ui container">
                <div className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="eight wide column">
                                <h3 className="ui header">We Help Companies and Companions</h3>
                                <p>We can give your company superpowers to do things that they never thought possible.
                                    Let us delight your customers and empower your needs...through pure data
                                    analytics.</p>
                                <h3 className="ui header">We Make Bananas That Can Dance</h3>
                                <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                    bioengineered.</p>
                            </div>
                            <div className="six wide right floated column">
                                <img alt={''} src="http://via.placeholder.com/350x150"
                                     className="ui large bordered rounded image"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="center aligned column">
                                <Link to={'/register'} className="ui huge button">Sign Up Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ideas">
                    <h1 style={{marginTop: '30px'}}>Idea Feed</h1>
                    <hr style={{marginBottom: '30px'}}/>
                    <div style={{marginBottom: '30px'}}>
                        <div className="ui menu">
                            <div className="header item">
                                Filters
                            </div>
                            <div class="item">
                                <div class="ui icon input">
                                    <input type="text" placeholder="Search..."/>
                                        <i class="search icon"></i>
                                </div>
                            </div>
                                <div class="ui simple  dropdown item">
                                    Categories
                                    <i class="dropdown icon"></i>
                                    <div class="menu">
                                        <a class="item">Electronics</a>
                                        <a class="item">Automotive</a>
                                        <a class="item">Home</a>
                                    </div>
                                </div>
                            <a className="item">
                               Next
                            </a>
                        </div>
                    </div>
                            <div className="ui items">
                                <div id={'ideaItem'} className="ui item">
                                    <div className="image">
                                        <img alt={'yikes'} src="http://via.placeholder.com/350x250"/>
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                                Description
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                architecto atque consectetur cum debitis deleniti dicta error...</p>
                                        </div>
                                        <div className="extra">
                                                <span>
                                                  <a href=""><i className="heart icon"></i></a>
                                                121
                                                </span>
                                                <span>
                                                  <a href=""><i className="comment icon"></i></a>
                                                121
                                                </span>
                                            <div className="ui right floated button">
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id={'ideaItem'} className="ui item">
                                    <div className="image">
                                        <img alt={'yikes'} src="http://via.placeholder.com/350x250"/>
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                            Description
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                architecto atque consectetur cum debitis deleniti dicta error...</p>
                                        </div>
                                        <div className="extra">
                                                <span>
                                                  <a href=""><i className="heart icon"></i></a>
                                                121
                                                </span>
                                            <span>
                                                  <a href=""><i className="comment icon"></i></a>
                                                121
                                                </span>
                                            <div className="ui right floated button">
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id={'ideaItem'} className="ui item">
                                    <div className="image">
                                        <img alt={'yikes'} src="http://via.placeholder.com/350x250"/>
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                            Description
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                architecto atque consectetur cum debitis deleniti dicta error...</p>
                                        </div>
                                        <div className="extra">
                                                <span>
                                                  <a href=""><i className="heart icon"></i></a>
                                                121
                                                </span>
                                            <span>
                                                  <a href=""><i className="comment icon"></i></a>
                                                121
                                                </span>
                                            <div className="ui right floated button">
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id={'ideaItem'} className="ui item">
                                    <div className="image">
                                        <img alt={'yikes'} src="http://via.placeholder.com/350x250"/>
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                            Description
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                architecto atque consectetur cum debitis deleniti dicta error...</p>
                                        </div>
                                        <div className="extra">
                                                <span>
                                                  <a href=""><i className="heart icon"></i></a>
                                                121
                                                </span>
                                            <span>
                                                  <a href=""><i className="comment icon"></i></a>
                                                121
                                                </span>
                                            <div className="ui right floated button">
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id={'ideaItem'} className="ui item">
                                    <div className="image">
                                        <img alt={'yikes'} src="http://via.placeholder.com/350x250"/>
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                            Description
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                architecto atque consectetur cum debitis deleniti dicta error...</p>
                                        </div>
                                        <div className="extra">
                                                <span>
                                                  <a href=""><i className="heart icon"></i></a>
                                                121
                                                </span>
                                            <span>
                                                  <a href=""><i className="comment icon"></i></a>
                                                121
                                                </span>
                                            <div className="ui right floated button">
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id={'ideaItem'} className="ui item">
                                    <div className="image">
                                        <img alt={'yikes'} src="http://via.placeholder.com/350x250"/>
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                            Description
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                architecto atque consectetur cum debitis deleniti dicta error...</p>
                                        </div>
                                        <div className="extra">
                                                <span>
                                                  <a href=""><i className="heart icon"></i></a>
                                                121
                                                </span>
                                            <span>
                                                  <a href=""><i className="comment icon"></i></a>
                                                121
                                                </span>
                                            <div className="ui right floated button">
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id={'ideaItem'} className="ui item">
                                    <div className="image">
                                        <img alt={'yikes'} src="http://via.placeholder.com/350x250"/>
                                    </div>
                                    <div className="content">
                                        <a className="header">Header</a>
                                        <div className="meta">
                                            Description
                                        </div>
                                        <div className="description">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                                                architecto atque consectetur cum debitis deleniti dicta error...</p>
                                        </div>
                                        <div className="extra">
                                                <span>
                                                  <a href=""><i className="heart icon"></i></a>
                                                121
                                                </span>
                                            <span>
                                                  <a href=""><i className="comment icon"></i></a>
                                                121
                                                </span>
                                            <div className="ui right floated button">
                                                Learn More
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        );
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);
