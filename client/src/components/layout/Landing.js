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
                                <img src="http://via.placeholder.com/350x150"
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
                <div className="ui grid container">
                    <div className="four wide column">
                        <div  style={{marginTop: '80px'}} className="ui vertical menu sticky">
                            <h3 className={'item'}>Filter</h3>
                            <div className="item">
                                <div className="header">Products</div>
                                <div className="menu">
                                    <a className="item">Enterprise</a>
                                    <a className="item">Consumer</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="header">CMS Solutions</div>
                                <div className="menu">
                                    <a className="item">Rails</a>
                                    <a className="item">Python</a>
                                    <a className="item">PHP</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="header">Hosting</div>
                                <div className="menu">
                                    <a className="item">Shared</a>
                                    <a className="item">Dedicated</a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="header">Support</div>
                                <div className="menu">
                                    <a className="item">E-mail Support</a>
                                    <a className="item">FAQs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="twelve wide column">
                        <div id="ideas">
                            <h1 style={{marginTop: '30px'}}>Idea Feed</h1>
                            <hr/>
                            <div className="ui grid container">
                                <div className="five wide column">
                                    <div className="ui card">
                                        <div className="content">
                                            <div className="right floated meta">14h</div>
                                            <img className="ui avatar image" src="http://via.placeholder.com/350x250"/> Elliot
                                        </div>
                                        <div className="image">
                                            <img src="http://via.placeholder.com/350x250" alt=""/>
                                        </div>
                                        <div className="content">
                                            <span className="right floated">
                                              <i className="heart outline like icon"></i>
                                              17 likes
                                            </span>
                                            <i className="comment icon"></i>
                                            3 comments
                                        </div>
                                        <div className="extra content">
                                            <div class="ui bottom attached button" tabindex="0">Learn More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="five wide column">
                                    <div className="ui card">
                                        <div className="content">
                                            <div className="right floated meta">14h</div>
                                            <img className="ui avatar image" src="http://via.placeholder.com/350x250"/> Elliot
                                        </div>
                                        <div className="image">
                                            <img src="http://via.placeholder.com/350x250" alt=""/>
                                        </div>
                                        <div className="content">
                                            <span className="right floated">
                                              <i className="heart outline like icon"></i>
                                              17 likes
                                            </span>
                                            <i className="comment icon"></i>
                                            3 comments
                                        </div>
                                        <div className="extra content">
                                            <div class="ui bottom attached button" tabindex="0">Learn More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="five wide column">
                                    <div className="ui card">
                                        <div className="content">
                                            <div className="right floated meta">14h</div>
                                            <img className="ui avatar image" src="http://via.placeholder.com/350x250"/> Elliot
                                        </div>
                                        <div className="image">
                                            <img src="http://via.placeholder.com/350x250" alt=""/>
                                        </div>
                                        <div className="content">
                                            <span className="right floated">
                                              <i className="heart outline like icon"></i>
                                              17 likes
                                            </span>
                                            <i className="comment icon"></i>
                                            3 comments
                                        </div>
                                        <div className="extra content">
                                            <div class="ui bottom attached button" tabindex="0">Learn More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="five wide column">
                                    <div className="ui card">
                                        <div className="content">
                                            <div className="right floated meta">14h</div>
                                            <img className="ui avatar image" src="http://via.placeholder.com/350x250"/> Elliot
                                        </div>
                                        <div className="image">
                                            <img src="http://via.placeholder.com/350x250" alt=""/>
                                        </div>
                                        <div className="content">
                                            <span className="right floated">
                                              <i className="heart outline like icon"></i>
                                              17 likes
                                            </span>
                                            <i className="comment icon"></i>
                                            3 comments
                                        </div>
                                        <div className="extra content">
                                            <div class="ui bottom attached button" tabindex="0">Learn More</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="five wide column">
                                    <div className="ui card">
                                        <div className="content">
                                            <div className="right floated meta">14h</div>
                                            <img className="ui avatar image" src="http://via.placeholder.com/350x250"/> Elliot
                                        </div>
                                        <div className="image">
                                            <img src="http://via.placeholder.com/350x250" alt=""/>
                                        </div>
                                        <div className="content">
                                            <span className="right floated">
                                              <i className="heart outline like icon"></i>
                                              17 likes
                                            </span>
                                            <i className="comment icon"></i>
                                            3 comments
                                        </div>
                                        <div className="extra content">
                                            <div class="ui bottom attached button" tabindex="0">Learn More</div>
                                        </div>
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
