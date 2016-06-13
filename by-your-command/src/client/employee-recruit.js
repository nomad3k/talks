import uuid from 'node-uuid';
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';
import Card from './card';

class EmployeeRecruit extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: null,
      title: null,
      salary: null,
      reportsTo: null,
      reportsToName: '(no one)',
      effectiveDate: new Date().toISOString().substring(0, 10),
    };
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  onChange(field, e) {
    var val = { };
    val[field] = e.target.value;
    this.setState(val);
  }

  onFormSubmit(e) {
    e.preventDefault();
    var id = uuid.v4();
    this.props.actions.recruit(id,
      this.state.name,
      this.state.title,
      this.state.reportsTo,
      new Date(this.state.effectiveDate),
      this.state.salary,
      ''
    );
    this.props.history.push(`/employee/${id}`);
  }

  onMenuClick(id, name, e) {
    this.setState({
      reportsTo: id,
      reportsToName: name,
    });
  }

  render() {
    const { id } = this.props.params;
    const { employees } = this.props;
    const employee = employees.get(id);

    return (
      <div className='mdl-grid'>

        <Card title='Recruit' className='mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop'>

          <form onSubmit={this.onFormSubmit.bind(this)}>

            <div>
              <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <input value={this.state.reportsToName}
                       id='reportsTo'
                       ref='reportsTo'
                       type='text'
                       className='mdl-textfield__input' />
                <label htmlFor='effectiveDate'
                       className='mdl-textfield__label'>Reports To</label>
              </div>
              <button type='button' id='details-menu' className='mdl-button mdl-js-button mdl-button--icon'>
                <i className='material-icons'>more_vert</i>
              </button>
              <ul htmlFor='details-menu' className='mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect' style={{ zIndex: 999 }}>
                <li className='mdl-menu__item' onClick={this.onMenuClick.bind(this, null, null)}>(no one)</li>
                {employees.map((e,id) =>
                  <li className='mdl-menu__item' onClick={this.onMenuClick.bind(this, id, e.get('name'))}>
                    {`${e.get('name')} ( ${e.get('title')} )`}
                  </li>
                )}
              </ul>
            </div>

            <div>
              <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <input value={this.state.effectiveDate}
                       onChange={this.onChange.bind(this, 'effectiveDate')}
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
                <input value={this.state.name}
                       onChange={this.onChange.bind(this, 'name')}
                       id='name'
                       ref='name'
                       type='text'
                       required={true}
                       className='mdl-textfield__input' />
                <label htmlFor='effectiveDate'
                       className='mdl-textfield__label'>Name</label>
              </div>
            </div>

            <div>
              <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <input value={this.state.title}
                       onChange={this.onChange.bind(this, 'title')}
                       id='title'
                       ref='title'
                       type='text'
                       required={true}
                       className='mdl-textfield__input' />
                <label htmlFor='effectiveDate'
                       className='mdl-textfield__label'>Title</label>
              </div>
            </div>

            <div>
              <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                <input value={this.state.salary}
                       onChange={this.onChange.bind(this, 'salary')}
                       id='salary'
                       ref='salary'
                       type='number'
                       required={true}
                       className='mdl-textfield__input' />
                <label htmlFor='effectiveDate'
                       className='mdl-textfield__label'>Salary</label>
              </div>
            </div>

            <div>
              <Link to='/employee' className='mdl-button mdl-js-button mdl-button--colored'>
                &laquo; Back
              </Link>
              <button type='submit' className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'>
                Recruit
              </button>
            </div>

          </form>

        </Card>

      </div>
    );
  }
}

EmployeeRecruit.propTypes = {
  employees: PropTypes.object.isRequired,
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
)(EmployeeRecruit)
