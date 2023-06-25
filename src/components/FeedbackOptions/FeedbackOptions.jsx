import PropTypes from 'prop-types';
import { StyledOptions } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledOptions>
      {options.map(option => (
        <button
          key={option}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </StyledOptions>
  );
};

FeedbackOptions.poptypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
