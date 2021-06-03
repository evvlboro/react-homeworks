// Core

// Styles
import './styles.scss'

export const LikesCounter = ({ count = 0 }) => {
  return (
    <span className="likesCounter">{count}</span>
  );
}

