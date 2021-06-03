// Core

// Components

// Elements
import { CommentsCounter, LikesCounter, Tag } from "../../elements";

// Styles
import './styles.scss'

export const Article = (text) => {
  return (
      <section className="article">
        <header>
          <div className="poster">
            <img src="https://miro.medium.com/max/1280/1*N6eYi8bOQ9tyZy8NGWDNKA.png" alt="" />
          </div>
          <div className="tags">
            <Tag value='Literature'/>
            <Tag value='Books'/>
          </div>
        </header>
        <article>
          <h1>American writer of bad cowboy stories arrived in</h1>
          <p>Volunteering to help people in need combined with travelling to faraway places is a new </p>
        </article>
        <footer>
          <span>15.07.2017</span>
          <div className="controls">
            <CommentsCounter count={10}/>
            <LikesCounter count={315}/>
          </div>
        </footer>
      </section>
  );
}

