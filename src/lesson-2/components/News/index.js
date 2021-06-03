// Core
import { array } from 'prop-types'

// Components
import { Article } from '../../components'

// Styles
import * as S from './styled'

// Tools

export const News = ({data}) => {
  return (
    <S.Container>
      {
        data.map((item, index) => {
          return (
            <Article
              key = {index}
              {...item}
            />
          );
        })
      }
    </S.Container>
  );
};

News.propTypes = {
  data: array.isRequired
};
