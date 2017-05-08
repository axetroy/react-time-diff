import React, { Component } from 'react';
import { render } from 'react-dom';
import TimeDiff from '../../lib/react-time-diff';

class App extends Component {
  render() {
    return (
      <div>
        <TimeDiff from={new Date('2016-11-09 14:22:33')} to={new Date()}>
          {diff => {
            return (
              <span>
                {`2016-11-09 14:22:33 from now is
                >>>>
                  ${diff.days}d
                  ${diff.hours}h
                  ${diff.minutes}m
                  ${diff.seconds}s
                  `}
              </span>
            );
          }}
        </TimeDiff>
      </div>
    );
  }
}

const element = document.createElement('div');
document.body.appendChild(element);
render(<App />, element);
