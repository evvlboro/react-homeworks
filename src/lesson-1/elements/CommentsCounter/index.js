// Core

// Styles
import './styles.scss'

export const CommentsCounter = ({count = 0}) => {
  return (
    <span className="commentsCounter">{count}</span>
  );
}

