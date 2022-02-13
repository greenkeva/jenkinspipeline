import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

test('renders daily quotes', () => {
  const { getByText } = render(<App />);
  const text = screen.getByText("quotes");
  expect(text).toBeInTheDocument();
});

