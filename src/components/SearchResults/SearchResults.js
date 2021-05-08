import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import styles from './SearchResults.scss';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array.isRequired,
    addCard: PropTypes.func,
  };
  render() {
    const { title, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        {cards.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}
export default SearchResults;
