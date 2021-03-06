import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';
import '../../css/Game.css';

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice: Array.from({ length: NUM_DICE }),
			locked: Array(NUM_DICE).fill(false),
			rollsLeft: NUM_ROLLS,
			scores: {
				ones: undefined,
				twos: undefined,
				threes: undefined,
				fours: undefined,
				fives: undefined,
				sixes: undefined,
				threeOfKind: undefined,
				fourOfKind: undefined,
				fullHouse: undefined,
				smallStraight: undefined,
				largeStraight: undefined,
				yahtzee: undefined,
				chance: undefined
			},
			isRolling: false
		};

		this.roll = this.roll.bind(this);
		this.doScore = this.doScore.bind(this);
		this.toggleLocked = this.toggleLocked.bind(this);
		this.buttonValue = this.buttonValue.bind(this);
		this.calcTotalScore = this.calcTotalScore.bind(this);
	}

	componentDidMount() {
		this.animateRoll();
	}

	animateRoll = () => {
		this.setState(
			st => ({
				isRolling: true
			}),
			() => {
				setTimeout(this.roll, 1000);
			}
		);
	};

	roll(evt) {
		// delay to setState after 1 sec till animation finished
		this.setState(st => ({
			dice: st.dice.map(
				(d, i) => (st.locked[i] ? d : Math.ceil(Math.random() * 6))
			),
			locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
			rollsLeft: st.rollsLeft - 1,
			isRolling: false
		}));
	}

	toggleLocked(idx) {
		// toggle whether idx is in locked or not
		if (this.state.rollsLeft > 0 && !this.state.isRolling)
			this.setState(st => ({
				locked: [
					...st.locked.slice(0, idx),
					!st.locked[idx],
					...st.locked.slice(idx + 1)
				]
			}));
	}

	doScore(rulename, ruleFn) {
		// evaluate this ruleFn with the dice and score this rulename
		if (
			this.state.scores[rulename] === undefined &&
			!this.state.isRolling
		) {
			this.setState(st => ({
				scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
				rollsLeft: NUM_ROLLS,
				locked: Array(NUM_DICE).fill(false),
				disableScores: { ...st.disableScores, [rulename]: true }
			}));
			this.animateRoll();
		}
	}

	buttonValue() {
		if (this.state.isRolling) return 'Rolling...';
		let button = `${this.state.rollsLeft}`;
		if (this.state.rollsLeft > 1) return `${button} rolls left`;
		if (this.state.rollsLeft > 0) return `${button} roll left`;
		return '0 rolls left';
	}

	calcTotalScore() {
		const scores = Object.values(this.state.scores);
		let total = 0;
		scores.forEach(score => {
			if (score !== undefined) {
				total += score;
			}
		});
		return total;
	}

	render() {
		return (
			<div className="Game">
				<header className="Game-header">
					<h1 className="App-title">Yahtzee!</h1>

					<section className="Game-dice-section">
						<Dice
							dice={this.state.dice}
							locked={this.state.locked}
							handleClick={this.toggleLocked}
							isRolling={this.state.isRolling}
							disable={this.state.rollsLeft === 0}
						/>
						<div className="Game-button-wrapper">
							<button
								className="Game-reroll"
								disabled={
									this.state.locked.every(x => x) || this.state.isRolling
								}
								onClick={this.animateRoll}
							>
								{this.buttonValue()}
							</button>
						</div>
					</section>
				</header>
				<ScoreTable
					doScore={this.doScore}
					scores={this.state.scores}
					isRolling={this.state.isRolling}
				/>
				<h2 className="Game-score">
					Total Score: {this.calcTotalScore()}
				</h2>
			</div>
		);
	}
}

export default Game;
