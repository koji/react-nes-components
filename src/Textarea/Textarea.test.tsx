import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesTextarea as Textarea } from './index';

describe('Textarea', () => {
  it('renders without crashing', () => {
    render(<Textarea />);
  });
});
