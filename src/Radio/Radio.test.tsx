import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Radio } from './index';

describe('Radio', () => {
  it('renders without crashing', () => {
    render(<Radio />);
  });
});
