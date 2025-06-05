import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesDropdown as Dropdown } from './index';

describe('Dropdown', () => {
  it('renders without crashing', () => {
    render(<Dropdown />);
  });
});
