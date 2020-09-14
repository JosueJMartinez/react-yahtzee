import React, { Component } from 'react';
import '../../css/RuleRow.css';

class RuleRow extends Component {
	render() {
		return (
			<tr
				className={`RuleRow RuleRow-${this.props.disableScore ||
				this.props.isRolling
					? 'disabled'
					: 'active'}`}
				onClick={this.props.doScore}
			>
				<td className="RuleRow-name">{this.props.name}</td>
				<td className="RuleRow-score">
					{this.props.disableScore ? (
						this.props.score
					) : (
						this.props.description
					)}
				</td>
			</tr>
		);
	}
}

export default RuleRow;
