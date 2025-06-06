import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesTag as Tag } from './index';

describe('Tag', () => {
  it('renders without crashing', () => {
    render(<Tag textType="primary" item="Test" />);
  });
});
