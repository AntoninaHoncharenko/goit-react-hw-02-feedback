import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes, { string } from 'prop-types';
import { BtnWrap, Btn } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <BtnWrap>
        {options.map(option => {
          return (
            <Btn
              option={option}
              type="button"
              key={nanoid()}
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
