import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NesBalloon as Balloon } from './index';

describe('Balloon', () => {
  it('renders without crashing', () => {
    render(<Balloon isLeft={true} content="Test" />);
  });
});
