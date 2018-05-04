import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import header from '../../img/test-back.png';
import idea from '../../img/showcase.jpg';

class Landing extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    render() {

        return (
            <div id={'landing'} className="ui container">
                <div className="ui vertical stripe">
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="eight wide column">
                                <h1 className={'logo-text'}>Project: Idea</h1>
                                <h3 className="ui header">We Help Companies and Companions</h3>
                                <p>We can give your company superpowers to do things that they never thought possible.
                                    Let us delight your customers and empower your needs...through pure data
                                    analytics.</p>
                                <h3 className="ui header">We Make Bananas That Can Dance</h3>
                                <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                    bioengineered.</p>
                            </div>
                            <div className="six wide right floated column">
                                <img alt={''} src={header}
                                     className="ui large rounded image"/>
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
                    <h1 style={{marginTop: '80px', fontSize: '2em'}}>Idea Feed</h1>
                    <hr style={{marginBottom: '30px'}}/>
                    <div style={{marginBottom: '30px'}}>
                        {/*<div className="ui menu">*/}
                            {/*<div className="header item">*/}
                                {/*Filters*/}
                            {/*</div>*/}
                            {/*<div class="item">*/}
                                {/*<div class="ui icon input">*/}
                                    {/*<input type="text" placeholder="Search..."/>*/}
                                    {/*<i class="search icon"></i>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div class="ui simple  dropdown item">*/}
                                {/*Categories*/}
                                {/*<i class="dropdown icon"></i>*/}
                                {/*<div class="menu">*/}
                                    {/*<a class="item">Electronics</a>*/}
                                    {/*<a class="item">Automotive</a>*/}
                                    {/*<a class="item">Home</a>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<a className="item">*/}
                                {/*Next*/}
                            {/*</a>*/}
                        {/*</div>*/}
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur consequuntur voluptates? Ad alias, aperiam culpa cum illum magnam...
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur consequuntur voluptates? Ad alias, aperiam culpa cum illum magnam...
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur consequuntur voluptates? Ad alias, aperiam culpa cum illum magnam...
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur consequuntur voluptates? Ad alias, aperiam culpa cum illum magnam...
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur consequuntur voluptates? Ad alias, aperiam culpa cum illum magnam...
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
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur consequuntur voluptates? Ad alias, aperiam culpa cum illum magnam...
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
