import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cursor } from './index';

describe('Cursor', () => {
  it('renders without crashing', () => {
    render(<Cursor />);
  });
});
