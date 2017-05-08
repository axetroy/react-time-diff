import React, { Component, PropTypes } from 'react';
import diff from './diff-time';

class Now extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { from, to } = this.props;
    const render = this.props.children;
    return typeof render === 'function'
      ? render.call(this, diff(from)(to)) || <div />
      : '';
  }
}

Now.PropTypes = {
  from: PropTypes.date,
  to: PropTypes.date
};

export default Now;
