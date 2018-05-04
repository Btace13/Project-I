import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <div className="menu">
            <Link className="item" to={'/about'}>About</Link>
            <Link className="item" to={'/feed'}>Idea Feed</Link>
            <Link className="item" to={'/dashboard'}>Dashboard</Link>
            <div className="divider"></div>
            <a
                href=""
                onClick={this.onLogoutClick.bind(this)}
                className="item"
            >
                <img
                    className="rounded-circle"
                    src={user.avatar}
                    alt={user.name}
                    style={{ width: '25px', marginRight: '5px' }}
                    title="You must have a Gravatar connected to your email to display an image"
                />{' '}
                Logout
            </a>
        </div>
    );

    const guestLinks = (
        <div className="menu">
            <Link className="item" to={'/about'}>About</Link>
            <Link className="item" to={'/login'}>LogIn</Link>
            <div className="divider"></div>
            <Link className="item" to={'/register'}>Sign Up</Link>
        </div>
    );

    return (
      <div>
          <div className="ui fixed menu" id={'navbar'}>
              <div className="ui container">
                  <Link to={'/'} className="header item">
                      Project: Idea
                  </Link>
                  <div className="right menu">
                      <div className="ui simple dropdown item">
                          <i className="fas fa-ellipsis-v"></i>
                          {isAuthenticated ? authLinks : guestLinks}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
