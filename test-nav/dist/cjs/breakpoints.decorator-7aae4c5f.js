'use strict';

const breakpoints_subject = require('./breakpoints.subject-05458ed4.js');

function ListenToBreakpoints() {
  return function (target, _propertyKey, _descriptor) {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      breakpoints_subject.balBreakpointSubject.attach(this);
      return connectedCallback && connectedCallback.call(this);
    };
    target.disconnectedCallback = function () {
      breakpoints_subject.balBreakpointSubject.detach(this);
      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}

exports.ListenToBreakpoints = ListenToBreakpoints;
