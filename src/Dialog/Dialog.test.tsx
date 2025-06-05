import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dialog } from './index';

describe('Dialog', () => {
  it('renders without crashing', () => {
    render(<Dialog id="test-dialog" />);
  });
});
