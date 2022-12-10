import { Component } from 'react';
import PropTypes, { string } from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => {
          return (
            <button
              type="button"
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
