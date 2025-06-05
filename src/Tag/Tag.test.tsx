import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tag } from './index';

describe('Tag', () => {
  it('renders without crashing', () => {
    render(<Tag>Test</Tag>);
  });
});
