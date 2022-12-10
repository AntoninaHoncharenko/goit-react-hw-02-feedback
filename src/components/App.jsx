import React, { Component } from 'react';
import { GlobalStyle } from '../GlobalStyles';
import { FeedbackBtns } from './FeedbackBtns/FeedbackBtns';
import { Statistics } from './FeedbackStatistics/Statistics';

export class App extends Component {
  static defaultProps = {
    step: 1,
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  state = {
    goodValue: this.props.initialValueGood,
    neutralValue: this.props.initialValueNeutral,
    badValue: this.props.initialValueBad,
  };

  countGood = () => {
    this.setState((state, props) => ({
      goodValue: state.goodValue + props.step,
    }));
  };

  countNeutral = () => {
    this.setState((state, props) => ({
      neutralValue: state.neutralValue + props.step,
    }));
  };

  countBad = () => {
    this.setState((state, props) => ({
      badValue: state.badValue + props.step,
    }));
  };

  countTotalFeedback = () =>
    this.state.goodValue + this.state.neutralValue + this.state.badValue;

  countPositiveFeedbackPercentage = () =>
    (
      (this.state.goodValue /
        (this.state.goodValue +
          this.state.neutralValue +
          this.state.badValue)) *
      100
    ).toFixed(0);

  render() {
    return (
      <div>
        <FeedbackBtns
          countGood={this.countGood}
          countNeutral={this.countNeutral}
          countBad={this.countBad}
        />
        <Statistics
          goodValue={this.state.goodValue}
          neutralValue={this.state.neutralValue}
          badValue={this.state.badValue}
          totalValue={this.countTotalFeedback()}
          positiveValue={this.countPositiveFeedbackPercentage()}
        />
        <GlobalStyle />
      </div>
    );
  }
}
