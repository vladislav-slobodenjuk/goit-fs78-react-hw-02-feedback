import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(opt => {
        return (
          <button key={opt} type="button" onClick={onLeaveFeedback}>
            {opt}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.poptypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
