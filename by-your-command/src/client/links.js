import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';
import classNames from 'classNames';

class Links extends Component {
  close(e) {
    //var d = document.querySelector('.mdl-layout');
    //d.MaterialLayout.toggleDrawer();
  }

  render() {
    const c = {
      'mdl-navigation': true,
      'mdl-layout--large-screen-only': this.props.fullscreenOnly,
    };
    const linkProps = {
      className: classNames({
        'mdl-color-text--white': this.props.fullscreenOnly,
        'mdl-navigation__link': true,
      })
    };
    return (
      <nav className={classNames(c)}>
        <Link onClick={this.close.bind(this)} {...linkProps} to='/employee/recruit'>
          Recruit New Employee
        </Link>
        <Link onClick={this.close.bind(this)} {...linkProps} to='/'>
          <span>Home</span>
        </Link>
        <Link onClick={this.close.bind(this)} {...linkProps} to='/employee'>
          <span>Employees</span>
        </Link>
      </nav>
    );
  }
}

Links.propTypes = {
  fullscreenOnly: PropTypes.bool.isRequired
};

export default Links;
