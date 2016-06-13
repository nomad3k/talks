import uuid from 'node-uuid';
import Immutable from 'immutable';
import * as Actions from './actions';
import * as Types from './types';

let initialState = Immutable.fromJS({
  title: 'By Your Command',
  employees: { }
})

function reducer(state = initialState, action) {

  var record = {
    on: new Date(),
    by: 'Chris Kemp',
    action: action,
  }

  switch (action.type) {

    case Types.RECRUIT:
      var e = {
        id: action.id,
        name: action.name,
        title: action.title,
        reportsTo: action.reportsTo,
        valid: {
          from: action.startsOn,
          to: new Date('9999-12-31'),
        },
        salary: action.salary,
        actions: [ record ],
      };
      return state.setIn(['employees', action.id], Immutable.fromJS(e));

    case Types.TERMINATE:
      return state
        .updateIn([ 'employees', action.id, 'valid', 'to' ], v => action.effectiveDate)
        .updateIn([ 'employees', action.id, 'actions' ], v => v.push(record));

    case Types.PROMOTE:
      return state
        .updateIn([ 'employees', action.id, 'salary' ], v => action.salary)
        .updateIn([ 'employees', action.id, 'actions' ], v => v.push(record));

    case Types.TRANSFER:
    return state
      .updateIn([ 'employees', action.id, 'reportsTo' ], v => action.reportsTo)
      .updateIn([ 'employees', action.id, 'actions' ], v => v.push(record));

    default:
      return state;
  }
};

const ids = {
  'ceo': uuid.v4(),
  'cio': uuid.v4(),
  'man': uuid.v4(),
  'dev': [ uuid.v4(), uuid.v4() ]
}
const actions = [
  Actions.recruit(ids.ceo, 'Eric Ericson', 'Chief Executive Officer', null, new Date('2015-11-31'), 1000, ''),
  Actions.promote(ids.ceo, new Date(), 2000, 'The CEO is always worth it.'),
  Actions.promote(ids.ceo, new Date(), 3000, 'Give me more!'),
  Actions.promote(ids.ceo, new Date(), 4000, 'Is that all you got?'),

  Actions.recruit(ids.cio, 'Irene Illing', 'Chief Information Officer', ids.ceo, new Date('2015-11-31'), 1000, ''),
  Actions.recruit(ids.man, 'Michael Morris', 'Manager', ids.cio, new Date('2015-11-31'), 1000, ''),
  Actions.recruit(ids.dev[0], 'David Davidson', 'Developer', ids.man, new Date('2015-11-31'), 1000, ''),
  Actions.recruit(ids.dev[1], 'Donald Donaldson', 'Developer', ids.man, new Date('2015-11-31'), 1000, ''),
  Actions.promote(ids.dev[1], new Date('2016-05-01'), 200, 'Threatened to quit'),
//  Actions.terminate(ids.dev[1], new Date(), 'Quit'),
];
for (var i=0;i<actions.length;i++) {
  initialState = reducer(initialState, actions[i]);
}

export default reducer;
