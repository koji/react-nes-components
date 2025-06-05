import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Avatar } from './index';

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(<Avatar />);
  });
});
