import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesBadge as Badge } from './index';

describe('Badge', () => {
  it('renders without crashing', () => {
    render(<Badge badgeType={['primary']} contents={['Test']} />);
  });
});
