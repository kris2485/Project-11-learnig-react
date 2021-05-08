import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCards } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCards(state, props.match.params.searchString),
});
const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) => dispatch(newSearchString),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
