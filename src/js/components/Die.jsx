import React, { Component } from 'react';
import '../../css/Die.css';

class Die extends Component {
	static defaultProps = {
		die: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};
	handleClick = e => {
		this.props.handleClick(this.props.idx);
	};
	render() {
		return (
			<button
				className={`Die `}
				style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
				onClick={this.handleClick}
				disabled={this.props.isRolling}
			>
				{this.props.val ? (
					<i
						className={`fas fa-dice-${this.props.die[
							this.props.val - 1
						]} ${this.props.isRolling && !this.props.locked
							? 'Die-rolling'
							: ''}`}
					/>
				) : (
					''
				)}
			</button>
		);
	}
}

export default Die;
