import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './index';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input />);
  });
});
