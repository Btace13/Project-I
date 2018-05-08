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
