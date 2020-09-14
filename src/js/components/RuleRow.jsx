import React, { Component } from 'react';
import '../../css/RuleRow.css';

class RuleRow extends Component {
	render() {
		const {
			disableScore,
			isRolling,
			doScore,
			name,
			description,
			score
		} = this.props;
		return (
			<tr
				className={`RuleRow RuleRow-${disableScore || isRolling
					? 'disabled'
					: 'active'}`}
				onClick={doScore}
			>
				<td className="RuleRow-name">{name}</td>
				<td className="RuleRow-score">
					{disableScore ? score : description}
				</td>
			</tr>
		);
	}
}

export default RuleRow;
