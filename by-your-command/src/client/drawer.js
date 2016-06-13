import React, { PropTypes, Component } from 'react'

import Links from './links'

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className='mdl-layout__drawer'>
        <span className='mdl-layout-title'>{title}</span>
        <Links fullscreenOnly={false} />
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
