import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from './index';

describe('Badge', () => {
  it('renders without crashing', () => {
    render(<Badge />);
  });
});
