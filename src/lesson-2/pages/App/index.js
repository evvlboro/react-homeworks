// Core

// Components
import { News, Accordion } from '../../components'

// Styles

// Tools
import accordionData from '../../components/Accordion/source.json'
import newsData from '../../components/News/source.json'

export const App = () => {
  return (
    <section>
      <News data = { newsData }/>
      <Accordion source = { accordionData }/>
    </section>
  );
}

