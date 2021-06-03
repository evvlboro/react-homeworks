// Core
import { useState } from 'react';
import { number } from 'prop-types'

// Styles
import './styles.scss'

export const LikesCounter = ({ count = 0 }) => {
  const [value, setValue] = useState({ likeOn: false, count});
  const _like = () => {
    if (value.likeOn) {
      setValue({likeOn: false, count: value.count - 1});
    } else {
      setValue({ likeOn: true, count: value.count + 1 });
    }
  }
  return (
    <button onClick = { _like } className="likesCounter">{value.count}</button>
  );
};

LikesCounter.propTypes = {
  count: number.isRequired
};
