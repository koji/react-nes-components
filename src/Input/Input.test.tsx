import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesInput as Input } from './index';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input isInline={false} fieldType="success" label="Test" />);
  });
});
