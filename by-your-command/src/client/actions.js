import * as Types from './types';

export function recruit(id, name, title, reportsTo, startsOn, salary, comments) {
  console.log('recruit', id, name, title, reportsTo, startsOn, salary, comments);
  return {
    type: Types.RECRUIT,
    id: id,
    name: name,
    title: title,
    salary: salary,
    reportsTo: reportsTo,
    startsOn: startsOn,
    comments: comments,
  };
}

export function terminate(id, effectiveDate, reason, comments) {
  return {
    type: Types.TERMINATE,
    id: id,
    effectiveDate: effectiveDate,
    reason: reason,
    comments: comments,
  };
}

export function promote(id, effectiveDate, salary, comments) {
  return {
    type: Types.PROMOTE,
    id: id,
    effectiveDate: effectiveDate,
    salary: salary,
    comments: comments,
  };
}

export function transfer(id, effectiveDate, reportsTo, comments) {
  return {
    type: Types.TRANSFER,
    id: id,
    effectiveDate: effectiveDate,
    reportsTo: reportsTo,
    comments: comments,
  }
}
