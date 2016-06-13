import React, { PropTypes, Component } from 'react'

import Links from './links'

class Card extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={this.props.className}>
        <div className='mdl-card mdl-shadow--2px' style={{ width: '100%' }}>
          <div className='mdl-card__title'>
            <h5 className='mdl-card__title-text'>{title}</h5>
          </div>
          <div className='mdl-card__supporting-text'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
