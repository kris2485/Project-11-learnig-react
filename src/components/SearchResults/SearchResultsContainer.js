import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCards, createActionAddCard } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCards(state, props.id),
});
const mapDispatchToProps = (dispatch, props) => ({
  addCard: (title) =>
    dispatch(
      createActionAddCard({
        columnId: props.id,
        title,
      })
    ),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
