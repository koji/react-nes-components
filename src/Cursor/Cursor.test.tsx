import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesCursor as Cursor } from './index';

describe('Cursor', () => {
  it('renders without crashing', () => {
    render(<Cursor isLeft={true} content="Test" />);
  });
});
