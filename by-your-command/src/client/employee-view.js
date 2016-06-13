import React, { PropTypes, Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'

import Card from './card';

class EmployeeView extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }

  onMenuClick(link) {
    this.props.history.push(link);
  }

  render() {
    const { id } = this.props.params;
    const { employees } = this.props;
    const employee = employees.get(id);
    const reportsTo = employee.get('reportsTo');
    const managerLink = reportsTo
      ? <Link to={`/employee/${reportsTo}`}>
          {employees.getIn([reportsTo, 'name'])}
        </Link>
      : <span>(no one)</span>
    return (
      <div className='mdl-grid'>

        <h1 className='mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop'>{employee.get('name')}</h1>

        <div className='mdl-cell mdl-cell--5-col mdl-cell--2-offset-desktop'>

          <div className='mdl-card unc-transparent' style={{ width: '100%' }}>
            <div className='mdl-card__title'>
              <button id='details-menu' className='mdl-button mdl-js-button mdl-button--icon mdl-button--accent' style={{ position: 'absolute', right: 8 }}>
                <i className='material-icons'>more_vert</i>
              </button>
              <ul htmlFor='details-menu' className='mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect' style={{ zIndex: 999 }}>
                <li className="mdl-menu__item" onClick={this.onMenuClick.bind(this, `/employee/${id}/promote`)}>
                  Promote &raquo;
                </li>
                <li className="mdl-menu__item" onClick={this.onMenuClick.bind(this, `/employee/${id}/transfer`)}>
                  Transfer &raquo;
                </li>
                <li className="mdl-menu__item" onClick={this.onMenuClick.bind(this, `/employee/${id}/terminate`)}>
                  Terminate &raquo;
                </li>
              </ul>
              <h5 className='mdl-card__title-text'>Details</h5>
            </div>

            <div className='mdl-card__supporting-text'>
              <dl>
                <dt>Title</dt>
                <dd>{employee.get('title')}</dd>
                <dt>Report To</dt>
                <dd>{managerLink}</dd>
                <dt>Salary</dt>
                <dd>{employee.get('salary')}</dd>
                <dt>Valid From</dt>
                <dd>{employee.getIn(['valid', 'from']).toLocaleDateString()}</dd>
                <dt>Valid To</dt>
                <dd>{employee.getIn(['valid', 'to']).toLocaleDateString()}</dd>
              </dl>
            </div>
          </div>
        </div>

        <Card title='Reports' className='mdl-cell mdl-cell--3-col-tablet mdl-cell--3-col-desktop'>
          {employees.filter((r,id2) => id == r.get('reportsTo')).map((r,id3) =>
            <div>
              <Link to={`/employee/${id3}`}>
                {`${r.get('name')} - ${r.get('title')}`}
              </Link>
            </div>
          )}
        </Card>

        <Card title='Actions' className='mdl-cell mdl-cell--8-col-desktop mdl-cell--2-offset-desktop mdl-cell--8-col-tablet'>
          <ul>
            <pre>{
              employee.get('actions').map(a =>
                <li>{JSON.stringify(a, null, '  ')}</li>
              )
            }</pre>
          </ul>
        </Card>

      </div>
    );
  }
}

EmployeeView.propTypes = {
  employees: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    employees: state.get('employees'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeView)
