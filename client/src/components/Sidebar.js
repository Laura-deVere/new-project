import React, { Component } from 'react';
import NavMenu from './NavMenu';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.handleMenuClick = this.handleMenuClick.bind(this);
		this.state = {
			active: false,
			ishidden: true
		};
	}

	handleMenuClick() {
		const buttonState = this.state.active;
		const ishidden = this.state.ishidden;

		this.setState({ 
			active: !buttonState,
			ishidden: !ishidden
		});
	}

	render() {
		return (
			<div>
				<nav className={this.state.ishidden ? "side-nav show-div":"side-nav"}>
					<div className='visible-nav'>
						<button className={this.state.active ? "hamburger hamburger--arrow is-active":"hamburger hamburger--arrow"} type="button" onClick={this.handleMenuClick}>
	  						<span className="hamburger-box">
	    						<span className="hamburger-inner"></span>
	  						</span>
						</button> 
						<div className="name">Laura deVere-Hopkins</div>
					</div>
					<div className="slide-out">
						<NavMenu handleMenuClick={this.handleMenuClick}/>
					</div>
				</nav>
			</div>
		)
	}
}

export default Sidebar;