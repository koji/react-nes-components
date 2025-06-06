import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesAvatar as Avatar } from './index';

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(<Avatar imgSrc="test.png" iconSize="small" />);
  });
});
