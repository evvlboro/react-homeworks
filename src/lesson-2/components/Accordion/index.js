// Core
import { string, array } from 'prop-types';

// Components
import { AccordionItem } from './AccordionItem';

// Elements

// Styles
import './styles.scss'

export const Accordion = ({title, source}) => {
  return (
    <section className='accordion'>
      <h1>{title}</h1>
      {source.map((item, index) => {
        return (
          <AccordionItem key = { index } {...item}/>
        );
      })}
    </section>
  );
};

Accordion.defaultProps = {
  title:  "Accordion"
};

Accordion.propTypes = {
  title: string.isRequired,
  source: array.isRequired
};
