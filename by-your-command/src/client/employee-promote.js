import React, { PropTypes, Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';
import Card from './card';

class EmployeePromote extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      effectiveDate: this.props.effectiveDate || new Date().toISOString().substring(0, 10),
      salary: this.props.salary,
      reason: this.props.reason,
    };
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  onChangeEffectiveDate(e) {
    this.setState({ effectiveDate: e.target.value });
  }

  onChangeSalary(e) {
    this.setState({ salary: e.target.value });
  }

  onChangeReason(e) {
    this.setState({ reason: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log('submit',
      this.state.effectiveDate,
      this.state.salary,
      this.state.reason);
    this.props.actions.promote(
      this.props.params.id,
      new Date(this.state.effectiveDate),
      this.state.salary,
      this.state.reason
    );
    this.props.history.push(`/employee/${this.props.params.id}`);
  }

  render() {
    const { id } = this.props.params;
    const { employees } = this.props;
    const employee = employees.get(id);

    return (
      <div className='mdl-grid'>
        <h1 className='mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop'>{employee.get('name')}</h1>

        <Card title='Promote' className='mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop'>
          <form onSubmit={this.onFormSubmit.bind(this)}>

            <div>
              <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <input value={this.state.effectiveDate}
                       onChange={this.onChangeEffectiveDate.bind(this)}
                       id='effectiveDate'
                       ref='effectiveDate'
                       type='date'
                       className='mdl-textfield__input'
                       required={true} />
                <label htmlFor='effectiveDate'
                       className='mdl-textfield__label'>Effective Date</label>
              </div>
            </div>

            <div>
              <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <input value={this.state.salary}
                       onChange={this.onChangeSalary.bind(this)}
                       id='salary'
                       ref='salary'
                       type='number'
                       className='mdl-textfield__input'
                       required={true} />
                <label htmlFor='salary' className='mdl-textfield__label'>Salary</label>
              </div>
            </div>

            <div>
              <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <textarea value={this.state.reason}
                          onChange={this.onChangeReason.bind(this)}
                          id='reason'
                          ref='reason'
                          rows={4}
                          type='number'
                          className='mdl-textfield__input'></textarea>
                <label htmlFor='reason' className='mdl-textfield__label'>Reason</label>
              </div>
            </div>

            <div>
              <Link className='mdl-button mdl-js-button mdl-button--colored' to={`/employee/${id}`}>
                &laquo; Back
              </Link>
              <button type='submit' className='mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored'>
                Promote
              </button>
            </div>

          </form>
        </Card>
      </div>
    );
  }
}

EmployeePromote.propTypes = {
  employees: PropTypes.object.isRequired,
  effectiveDate: PropTypes.string,
  salary: PropTypes.number,
  reason: PropTypes.string,
};


function mapStateToProps(state) {
  return {
    employees: state.get('employees'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeePromote)
