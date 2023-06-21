// import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <ul>
      {Object.entries(props).map(prop => {
        return <li key={prop[0]}>{`${prop[0]}: ${prop[1]}`}</li>;
      })}
    </ul>
  );
};

// Statistics.propTypes = {
//   props: PropTypes.exact({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     Total: PropTypes.number.isRequired,
//     PositivePercentage: PropTypes.string.isRequired,
//   }),
// };
