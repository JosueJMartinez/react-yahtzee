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
								description="1 point per 1"
								disableScore={disableScores.ones}
							/>
							<RuleRow
								name="Twos"
								score={scores.twos}
								doScore={evt => doScore('twos', twos.evalRoll)}
								description="2 points per 2"
								disableScore={disableScores.twos}
							/>
							<RuleRow
								name="Threes"
								score={scores.threes}
								doScore={evt => doScore('threes', threes.evalRoll)}
								description="3 points per 3"
								disableScore={disableScores.threes}
							/>
							<RuleRow
								name="Fours"
								score={scores.fours}
								doScore={evt => doScore('fours', fours.evalRoll)}
								description="4 points per 4"
								disableScore={disableScores.fours}
							/>
							<RuleRow
								name="Fives"
								score={scores.fives}
								doScore={evt => doScore('fives', fives.evalRoll)}
								description="5 points per 5"
								disableScore={disableScores.fives}
							/>
							<RuleRow
								name="Sixes"
								score={scores.sixes}
								doScore={evt => doScore('sixes', sixes.evalRoll)}
								description="6 points per 6"
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
								description="Sum all dice if 3 are the same"
								disableScore={disableScores.threeOfKind}
							/>
							<RuleRow
								name="Four of Kind"
								score={scores.fourOfKind}
								doScore={evt => doScore('fourOfKind', fourOfKind.evalRoll)}
								description="Sum all dice if 4 are the same"
								disableScore={disableScores.fourOfKind}
							/>
							<RuleRow
								name="Full House"
								score={scores.fullHouse}
								doScore={evt => doScore('fullHouse', fullHouse.evalRoll)}
								description="25 points for a fullHouse"
								disableScore={disableScores.fullHouse}
							/>
							<RuleRow
								name="Small Straight"
								score={scores.smallStraight}
								doScore={evt =>
									doScore('smallStraight', smallStraight.evalRoll)}
								description="30 points for a Small Straight"
								disableScore={disableScores.smallStraight}
							/>
							<RuleRow
								name="Large Straight"
								score={scores.largeStraight}
								doScore={evt =>
									doScore('largeStraight', largeStraight.evalRoll)}
								description="40 points for a Large Straight"
								disableScore={disableScores.largeStraight}
							/>
							<RuleRow
								name="Yahtzee"
								score={scores.yahtzee}
								doScore={evt => doScore('yahtzee', yahtzee.evalRoll)}
								description="50 points for yahtzee"
								disableScore={disableScores.yahtzee}
							/>
							<RuleRow
								name="Chance"
								score={scores.chance}
								doScore={evt => doScore('chance', chance.evalRoll)}
								description="Sum of all dice"
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
