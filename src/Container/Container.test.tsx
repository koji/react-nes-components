import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesContainer as Container } from './index';

describe('Container', () => {
  it('renders without crashing', () => {
    render(<Container content="Test" />);
  });
});
