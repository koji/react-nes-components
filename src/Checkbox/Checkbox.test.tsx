import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesCheckbox as Checkbox } from './index';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox items={['Test']} />);
  });
});
