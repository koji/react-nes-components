import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesList as List } from './index';

describe('List', () => {
  it('renders without crashing', () => {
    render(<List items={[]} isDisc={true} />);
  });
});
