import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the foundation homepage and its main sections', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /building a sustainable future for india/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /five pillars of impact/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /progress, made possible together/i })).toBeInTheDocument();
  expect(
    screen.getAllByRole('link', { name: /donate now/i }).some((link) => link.getAttribute('href') === '#donate')
  ).toBe(true);
});
