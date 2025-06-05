import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './index';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox />);
  });
});
