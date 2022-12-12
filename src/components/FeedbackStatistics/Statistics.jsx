import { Component } from 'react';
import PropTypes from 'prop-types';
import { StatsWrap, ValueWrap, Value, TotalValue } from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <StatsWrap>
        <ValueWrap>
          <Value value="good">Good: {good}</Value>
          <Value value="neutral">Neutral: {neutral}</Value>
          <Value value="bad">Bad: {bad}</Value>
        </ValueWrap>

        <TotalValue>Total: {total}</TotalValue>
        <TotalValue>Positive Feedback: {positivePercentage} %</TotalValue>
      </StatsWrap>
    );
  }
}
