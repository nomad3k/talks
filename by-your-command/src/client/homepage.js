import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'

class Homepage extends Component {
  render() {
    const { position } = this.props;
    return (
      <div className='mdl-grid'>
        <div className='mdl-card mdl-shadow--2px mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset'>
          <div className='mdl-card__title'>
            <h1 className='mdl-card__title-text'>Employee Management</h1>
          </div>
          <div className='mdl-card__supporting-text'>
            <p>Welcome to the HR software.</p>
            <ul>
              <li>
                <Link to='/employee'>Employeees</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
};


function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
