import React, { PropTypes, Component } from 'react'
import Links from './links';

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header className='mdl-layout__header'>
        <div className='mdl-layout-icon'></div>
        <div className='mdl-layout__header-row'>
          <span className='mdl-layout-title'>{title}</span>
          <div className='mdl-layout-spacer'></div>
          <Links fullscreenOnly={true} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
