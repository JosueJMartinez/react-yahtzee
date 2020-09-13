import React, { Component } from 'react';
import '../../css/RuleRow.css';

class RuleRow extends Component {
	render() {
		return (
			<tr
				className={`RuleRow RuleRow-${this.props.disableScore
					? 'disabled'
					: 'active'}`}
				onClick={this.props.doScore}
				disabled={this.props.disableScore}
			>
				<td className="RuleRow-name">{this.props.name}</td>
				<td className="RuleRow-score">{this.props.score}</td>
			</tr>
		);
	}
}

export default RuleRow;
