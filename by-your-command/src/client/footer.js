import React, { PropTypes, Component } from 'react'

class Footer extends Component {
  render() {
    const { title } = this.props;
    return (
      <footer className='mdl-mini-footer'>

        <div className='mdl-mini-footer__bottom-section'>
          <div className='mdl-logo'>{title}</div>
          <ul className='mdl-mini-footer__link-list'>
            <li><a href='#'>Help</a></li>
            <li><a href='#'>Privacy & Terms</a></li>
          </ul>
        </div>

      </footer>
    );
  }
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
