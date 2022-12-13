import { nanoid } from 'nanoid';
import PropTypes, { string } from 'prop-types';
import { BtnWrap, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
