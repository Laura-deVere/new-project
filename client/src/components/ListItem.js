import _ from 'lodash';
import React, { Component } from 'react';

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: this.props.level
		}
	}

	render() {
		let item = this.props.id;
		console.log(item)
		let image = item.imageUrl;

		const className = 'item level' + this.props.level;
		return (
				<li className={className} 
				// style={style}
				>
					<img src={image} alt="efr"/>
					<div className="overlay">
						<div className="text-overlay">{item.name}</div>
						</div>
				</li>
				
		)
	}
}

export default ListItem;