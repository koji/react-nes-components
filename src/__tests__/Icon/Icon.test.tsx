import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { NesIcon, NesSNSIcon, NesReactionIcon, NesArt } from '../../Icon';
// import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);
describe('<NesIcon>', () => {
  it('renders without crashing closeIcon', () => {
    const closeMediumIcon = renderer
      .create(<NesIcon iconType={'close'} iconSize={'medium'} />)
      .toJSON();
    expect(closeMediumIcon).toMatchSnapshot();
    const closeLargeIcon = renderer
      .create(<NesIcon iconType={'close'} iconSize={'large'} />)
      .toJSON();
    expect(closeLargeIcon).toMatchSnapshot();
    const closeSmallIcon = renderer
      .create(<NesIcon iconType={'close'} iconSize={'small'} />)
      .toJSON();
    expect(closeSmallIcon).toMatchSnapshot();
  });

  it('renders without crashing trophyIcon', () => {
    const closeMediumIcon = renderer
      .create(<NesIcon iconType={'trophy'} iconSize={'medium'} />)
      .toJSON();
    expect(closeMediumIcon).toMatchSnapshot();
    const closeLargeIcon = renderer
      .create(<NesIcon iconType={'trophy'} iconSize={'large'} />)
      .toJSON();
    expect(closeLargeIcon).toMatchSnapshot();
    const closeSmallIcon = renderer
      .create(<NesIcon iconType={'trophy'} iconSize={'small'} />)
      .toJSON();
    expect(closeSmallIcon).toMatchSnapshot();
  });

  it('renders without crashing coinIcon', () => {
    const closeMediumIcon = renderer
      .create(<NesIcon iconType={'coin'} iconSize={'medium'} />)
      .toJSON();
    expect(closeMediumIcon).toMatchSnapshot();
    const closeLargeIcon = renderer
      .create(<NesIcon iconType={'coin'} iconSize={'large'} />)
      .toJSON();
    expect(closeLargeIcon).toMatchSnapshot();
    const closeSmallIcon = renderer
      .create(<NesIcon iconType={'coin'} iconSize={'small'} />)
      .toJSON();
    expect(closeSmallIcon).toMatchSnapshot();
  });
});

describe('<NesArt>', () => {
  const nesLogo = renderer.create(<NesArt iconType={'nes-logo'} />).toJSON();
  expect(nesLogo).toMatchSnapshot();

  const snesLogo = renderer.create(<NesArt iconType={'snes-logo'} />).toJSON();
  expect(snesLogo).toMatchSnapshot();

  const nesOctcat = renderer
    .create(<NesArt iconType={'nes-octocat'} isAnimated={true} />)
    .toJSON();
  expect(nesOctcat).toMatchSnapshot();

  const nesSmartphone = renderer
    .create(<NesArt iconType={'nes-smartphone'} />)
    .toJSON();
  expect(nesSmartphone).toMatchSnapshot();
});

describe('<NesReactionIcon>', () => {
  const heartIcon = renderer
    .create(<NesReactionIcon iconType={'heart'} iconSize={'medium'} />)
    .toJSON();
  expect(heartIcon).toMatchSnapshot();

  const starIcon = renderer
    .create(
      <NesReactionIcon
        iconType={'star'}
        iconSize={'large'}
        iconReactionType={'half'}
      />
    )
    .toJSON();
  expect(starIcon).toMatchSnapshot();

  const likeIcon = renderer
    .create(
      <NesReactionIcon
        iconType={'like'}
        iconSize={'small'}
        iconReactionType={'transparent'}
      />
    )
    .toJSON();
  expect(likeIcon).toMatchSnapshot();
});

describe('<NesSNSIcon>', () => {
  const twitterIcon = renderer
    .create(<NesSNSIcon iconType={'twitter'} iconSize={'small'} />)
    .toJSON();
  expect(twitterIcon).toMatchSnapshot();

  const googleIcon = renderer
    .create(<NesSNSIcon iconType={'google'} iconSize={'large'} />)
    .toJSON();
  expect(googleIcon).toMatchSnapshot();

  const facebookIcon = renderer
    .create(<NesSNSIcon iconType={'facebook'} iconSize={'medium'} />)
    .toJSON();
  expect(facebookIcon).toMatchSnapshot();
});
