import PropTypes from 'prop-types';
import { StyledList } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <StyledList>
      <li>
        <p>Good:</p>
        <span>{good}</span>
      </li>
      <li>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </li>
      <li>
        <p>Bad:</p>
        <span>{bad}</span>
      </li>
      <li>
        <p>Total:</p>
        <span>{total}</span>
      </li>
      <li>
        <p>Positive feedback:</p>
        <span>{percentage}%</span>
      </li>
      {/* {Object.entries(props).map(prop => {
        return <li key={prop[0]}>{`${prop[0]}: ${prop[1]}`}</li>;
      })} */}
    </StyledList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
