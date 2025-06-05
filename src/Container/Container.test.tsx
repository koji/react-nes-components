import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Container } from './index';

describe('Container', () => {
  it('renders without crashing', () => {
    render(<Container />);
  });
});
