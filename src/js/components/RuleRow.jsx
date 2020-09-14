import React, { Component } from 'react';
import '../../css/RuleRow.css';

class RuleRow extends Component {
	render() {
		const { isRolling, doScore, name, description, score } = this.props;
		const disable = score !== undefined;
		return (
			<tr
				className={`RuleRow RuleRow-${disable || isRolling
					? 'disabled'
					: 'active'}`}
				onClick={doScore}
			>
				<td className="RuleRow-name">{name}</td>
				<td className="RuleRow-score">{disable ? score : description}</td>
			</tr>
		);
	}
}

export default RuleRow;
