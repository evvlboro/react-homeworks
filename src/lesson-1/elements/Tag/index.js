// Core

// Styles
import './styles.scss'

export const Tag = ({ value = 'Tag is missing'}) => {
  return (
    <div>
      <span className="tag">{value}</span>
    </div>
  );
}
