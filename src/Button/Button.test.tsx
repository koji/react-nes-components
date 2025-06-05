import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesButton as Button } from './index';

describe('Button', () => {
  it('renders the button with the correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /Click me/i })).toBeInTheDocument();
  });
});
