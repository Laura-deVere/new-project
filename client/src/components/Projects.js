import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import ListItem from './ListItem';
import projectsList from './projectData';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listItems: projectsList,
			active: 0,
			direction: ''
		}
	}
	
	renderList() {
		const listItems = [];
		let level;


		for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
            let index = i
            if (i < 0) {
                index = this.state.listItems.length + i
                console.log('THIS IS THE INDEX' + index);
                console.log('THIS IS THE I' + i);
            } else if (i >= this.state.listItems.length) {
                index = i % this.state.listItems.length
                console.log('THIS IS THE INDEX' + index);
                console.log('THIS IS THE I' + i);
            }
            level = this.state.active - i
			listItems.push(<ListItem key={index} id={this.state.listItems[index]} level={level} />)
		}
		return listItems
	}

	moveLeft() {
		let nowActive = this.state.active;
		nowActive--
		this.setState({
			active: nowActive < 0 ? this.state.listItems.length - 1:nowActive,
			direction: 'left'
		});
	}

	moveRight() {
		let nowActive = this.state.active;
		this.setState({
			active: (nowActive + 1) % this.state.listItems.length,
			direction: 'right'
		});
	}

	render() {
		return (
			<div className="projects">
				<h1>PROJECTS</h1>
				<div id="carousel">
					<button className="slider-btn" id="arrow-left" onClick={this.moveLeft.bind(this)}>
						<i className="ion-chevron-left"></i>
					</button>
					<CSSTransition
						timeout={300}
						classNames={this.state.direction}
					>
						<ul>
							{this.renderList()}
						</ul>						
					</CSSTransition>
					<button className="slider-btn" id="arrow-right" onClick={this.moveRight.bind(this)}>
						<i className="ion-chevron-right"></i>
					</button>
				</div>
			</div>
		)
	}
}

export default Projects;