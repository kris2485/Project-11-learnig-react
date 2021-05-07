import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import styles from './Header.scss';

class Header extends React.Component {
  render() {
    const { iconHeader } = settings.header;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={iconHeader} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>
                Home
              </NavLink>
              <NavLink exact to='/info' activeClassName='active'>
                Info
              </NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>
                FAQ
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}
export default Header;
