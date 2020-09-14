import React, { Component } from 'react';
import '../../css/RuleRow.css';

class RuleRow extends Component {
	render() {
		const { isRolling, doScore, name, description, score } = this.props;
		return (
			<tr
				className={`RuleRow RuleRow-${score !== undefined || isRolling
					? 'disabled'
					: 'active'}`}
				onClick={doScore}
			>
				<td className="RuleRow-name">{name}</td>
				<td className="RuleRow-score">
					{score !== undefined ? score : description}
				</td>
			</tr>
		);
	}
}

export default RuleRow;
