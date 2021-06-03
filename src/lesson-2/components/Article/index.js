// Core
import moment from 'moment'
import { string, number, array } from 'prop-types';

// Components

// Elements
import { CommentsCounter, LikesCounter, Tag } from "../../elements";

// Styles
import './styles.scss'

export const Article = ({
  title,
  description,
  published,
  likes,
  comments,
  image,
  tags
}) => {
  const parsedDate = moment(published).format('DD.MM.YYYY');
  return (
      <section className="article">
        <header>
          <div className="poster">
            <img src= { image } alt="Z" />
          </div>
          <div className="tags">
            {
              tags.map((tag, index) => (
                <Tag key = { index } value = { tag }/>
              ))
            }
          </div>
        </header>
        <article>
          <h1>{ title }</h1>
          <p>{ description }</p>
        </article>
        <footer>
          <span>{ parsedDate }</span>
          <div className="controls">
            <CommentsCounter count={comments}/>
            <LikesCounter count={likes}/>
          </div>
        </footer>
      </section>
  );
};

Article.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  published: string.isRequired,
  likes: number.isRequired,
  comments: number.isRequired,
  image: string.isRequired,
  tags: array.isRequired
};
