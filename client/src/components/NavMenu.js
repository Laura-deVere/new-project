import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavMenu extends Component {
	render() {
		return (
			<div className="nav-list-container">
				<ul className="nav-list">
					<li onClick={this.props.handleMenuClick}>
						<Link to="/">ABOUT</Link>
					</li>
					<li onClick={this.props.handleMenuClick}>
						<Link to="/projects">PROJECTS</Link>
					</li>
					<li onClick={this.props.handleMenuClick}>
						<Link to="/blog">BLOG</Link>
					</li>
				</ul>
				<ul className="media-list">
					<li><i className="ion-social-linkedin-outline"></i></li>
					<li><i className="ion-social-github-outline"></i></li>
					<li><i className="ion-ios-email-outline"></i></li>
				</ul>
			</div>
		)
	}
}

export default NavMenu;