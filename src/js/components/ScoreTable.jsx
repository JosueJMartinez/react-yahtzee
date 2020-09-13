import React, { Component } from 'react';
import RuleRow from './RuleRow';
import '../../css/ScoreTable.css';
import {
	ones,
	twos,
	threes,
	fours,
	fives,
	sixes,
	threeOfKind,
	fourOfKind,
	fullHouse,
	smallStraight,
	largeStraight,
	yahtzee,
	chance
} from '../Rules';

class ScoreTable extends Component {
	render() {
		const { scores, doScore, disableScores } = this.props;

		return (
			<div className="ScoreTable">
				<section className="ScoreTable-section">
					<h2>Upper</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Ones"
								score={scores.ones}
								doScore={evt => doScore('ones', ones.evalRoll)}
								disableScore={disableScores.ones}
							/>
							<RuleRow
								name="Twos"
								score={scores.twos}
								doScore={evt => doScore('twos', twos.evalRoll)}
								disableScore={disableScores.twos}
							/>
							<RuleRow
								name="Threes"
								score={scores.threes}
								doScore={evt => doScore('threes', threes.evalRoll)}
								disableScore={disableScores.threes}
							/>
							<RuleRow
								name="Fours"
								score={scores.fours}
								doScore={evt => doScore('fours', fours.evalRoll)}
								disableScore={disableScores.fours}
							/>
							<RuleRow
								name="Fives"
								score={scores.fives}
								doScore={evt => doScore('fives', fives.evalRoll)}
								disableScore={disableScores.fives}
							/>
							<RuleRow
								name="Sixes"
								score={scores.sixes}
								doScore={evt => doScore('sixes', sixes.evalRoll)}
								disableScore={disableScores.sixes}
							/>
						</tbody>
					</table>
				</section>
				<section className="ScoreTable-section ScoreTable-section-lower">
					<h2>Lower</h2>
					<table cellSpacing="0">
						<tbody>
							<RuleRow
								name="Three of Kind"
								score={scores.threeOfKind}
								doScore={evt =>
									doScore('threeOfKind', threeOfKind.evalRoll)}
								disableScore={disableScores.threeOfKind}
							/>
							<RuleRow
								name="Four of Kind"
								score={scores.fourOfKind}
								doScore={evt => doScore('fourOfKind', fourOfKind.evalRoll)}
								disableScore={disableScores.fourOfKind}
							/>
							<RuleRow
								name="Full House"
								score={scores.fullHouse}
								doScore={evt => doScore('fullHouse', fullHouse.evalRoll)}
								disableScore={disableScores.fullHouse}
							/>
							<RuleRow
								name="Small Straight"
								score={scores.smallStraight}
								doScore={evt =>
									doScore('smallStraight', smallStraight.evalRoll)}
								disableScore={disableScores.smallStraight}
							/>
							<RuleRow
								name="Large Straight"
								score={scores.largeStraight}
								doScore={evt =>
									doScore('largeStraight', largeStraight.evalRoll)}
								disableScore={disableScores.largeStraight}
							/>
							<RuleRow
								name="Yahtzee"
								score={scores.yahtzee}
								doScore={evt => doScore('yahtzee', yahtzee.evalRoll)}
								disableScore={disableScores.yahtzee}
							/>
							<RuleRow
								name="Chance"
								score={scores.chance}
								doScore={evt => doScore('chance', chance.evalRoll)}
								disableScore={disableScores.chance}
							/>
						</tbody>
					</table>
				</section>
			</div>
		);
	}
}

export default ScoreTable;
