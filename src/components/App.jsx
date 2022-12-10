import React, { Component } from 'react';
import { GlobalStyle } from '../GlobalStyles';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './FeedbackStatistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './Section/Section.styled';

export class App extends Component {
  // static defaultProps = {
  //   step: 1,
  //   initialValueGood: 0,
  //   initialValueNeutral: 0,
  //   initialValueBad: 0,
  // };

  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  // countGood = () => {
  //   this.setState((state, props) => ({
  //     goodValue: state.Good + props.step,
  //   }));
  // };

  // countNeutral = () => {
  //   this.setState((state, props) => ({
  //     neutralValue: state.Neutral + props.step,
  //   }));
  // };

  // countBad = () => {
  //   this.setState((state, props) => ({
  //     badValue: state.Bad + props.step,
  //   }));
  // };

  countValue = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  // countTotalFeedback = () =>
  //   this.state.Good + this.state.Neutral + this.state.Bad;

  countTotalFeedback = () =>
    Object.values(this.state).reduce((previous, current) => previous + current);

  countPositiveFeedbackPercentage = () =>
    (
      (this.state.Good /
        Object.values(this.state).reduce(
          (previous, current) => previous + current
        )) *
      100
    ).toFixed(0);

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countValue}
            // countGood={this.countGood}
            // countNeutral={this.countNeutral}
            // countBad={this.countBad}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyle />
      </Container>
    );
  }
}
