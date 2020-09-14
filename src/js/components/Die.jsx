import React, { Component, Fragment } from 'react';
import '../../css/Die.css';

class Die extends Component {
	static defaultProps = {
		die: [ 'one', 'two', 'three', 'four', 'five', 'six' ],
		val: 6
	};

	handleClick = e => {
		this.props.handleClick(this.props.idx);
	};

	render() {
		// <button
		// 	// className={`Die `}
		// 	// style={{ backgroundColor: this.props.locked ? 'grey' : 'black' }}
		// 	// onClick={this.handleClick}
		// 	// disabled={this.props.isRolling}
		// >
		const { die, val, locked, isRolling, disable } = this.props;
		return (
			<Fragment>
				<i
					className={`Die fas fa-dice-${die[val - 1]} ${isRolling &&
						!locked &&
						'Die-rolling'} ${locked && 'Die-locked'} fa-5x`}
					// style={{
					// 	backgroundColor: locked ? 'grey' : 'black'
					// }}
					onClick={this.handleClick}
					disabled={disable}
				/>
			</Fragment>
		);
	}
}

export default Die;
