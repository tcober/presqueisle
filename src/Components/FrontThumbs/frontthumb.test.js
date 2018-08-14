import React from 'react';
import ReactDOM from 'react-dom';
import FrontThumb from './frontthumb.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FrontThumb />, div);
  ReactDOM.unmountComponentAtNode(div);
});