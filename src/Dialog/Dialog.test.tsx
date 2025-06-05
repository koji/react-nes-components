import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dialog } from './index'; // Ensure this imports the actual Dialog component

describe('Dialog', () => {
  it('renders without crashing', () => {
    render(<Dialog />); // No props, as the component takes no props
  });
});
