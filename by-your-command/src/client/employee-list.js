import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'

import Card from './card';

class EmployeeList extends Component {
  componentDidMount() {
    componentHandler.upgradeDom();
  }

  render() {
    const { employees } = this.props;
    var text = {
      className: 'mdl-data-table__cell--non-numeric'
    };
    return (
      <div className='mdl-grid'>

        <Card title='Employees' className='mdl-cell mdl-cell--8-col mdl-cell--2-offset-desktop'>
          <table className='mdl-data-table' style={{ width: '100%' }}>
            <thead>
              <tr>
                <th {...text}>Name</th>
                <th {...text}>Title</th>
                <th>Salary</th>
                <th {...text}>Report To</th>
                <th {...text}>From</th>
                <th {...text}>To</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((e,id) => {
                var reportsTo = e.get('reportsTo');
                var managerLink = reportsTo
                  ? <Link to={`/employee/${reportsTo}`}>{employees.getIn([reportsTo, 'name'])}</Link>
                  : <div>(no-one)</div>
                return(
                  <tr>
                    <td {...text}>
                      <Link to={`/employee/${id}`}>
                        {e.get('name')}
                      </Link>
                    </td>
                    <td {...text}>{e.get('title')}</td>
                    <td>{e.get('salary')}</td>
                    <td {...text}>{managerLink}</td>
                    <td {...text}>{e.get('valid').get('from').toLocaleDateString() }</td>
                    <td {...text}>{e.get('valid').get('to').toLocaleDateString()}</td>
                  </tr>
                )
                }
              )}
            </tbody>
          </table>
        </Card>

      </div>
    );
  }
}

EmployeeList.propTypes = {
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
)(EmployeeList)
