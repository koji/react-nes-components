import React from 'react';
// import { render, cleanup } from '@testing-library/react';
import { NesBadge } from '../../Badge';
// import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('<NesBadge>', () => {
  // it('renders without crashing', () => {
  //   const { getAllByDisplayValue } = render(
  //     <NesBadge badgeType={['primary']} contents={['nes-components']} />
  //   );
  //   expect(getAllByDisplayValue).toBe('nes-components');
  // });

  it('renders without crashing', () => {
    const tree = renderer
      .create(
        <NesBadge badgeType={['primary']} contents={['nes-components']} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
