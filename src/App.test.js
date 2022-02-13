import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

