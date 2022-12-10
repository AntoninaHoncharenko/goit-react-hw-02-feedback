import { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import { BtnWrap, Btn } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <BtnWrap>
        {options.map(option => {
          return (
            <Btn
              option={option}
              type="button"
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Btn>
          );
        })}
      </BtnWrap>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
