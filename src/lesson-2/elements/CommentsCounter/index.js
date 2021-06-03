// Core
import { number } from 'prop-types'

// Styles
import './styles.scss'

export const CommentsCounter = ({count = 0}) => {
  return (
    <span className="commentsCounter">{count}</span>
  );
};

CommentsCounter.propTypes = {
  count: number.isRequired
};
