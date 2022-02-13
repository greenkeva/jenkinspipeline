import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("navigates home when you click the logo", () => {

  // Render app
  render(
    <MemoryRouter initialEntries={['/music']}>
      <App />
    </MemoryRouter>,
    root
   });
