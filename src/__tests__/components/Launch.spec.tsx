import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';

import Launch from '../../components/Launch';

const sampleLaunch = {
  name: 'Launch Name',
  date_utc: "2021-05-26T18:59:00.000Z",
  details: 'Launch Details',
  rocket: 'id_rocket'
}

describe('Launch component', () => {
  it('should be render correct launch label when send `latest` type', async () => {
    const { getByTestId } = render(
      <Launch data={sampleLaunch} type="latest" />
    );

    const launchLabel = getByTestId('label');
    expect(launchLabel.textContent).toBe('Latest Launch')
  });

  it('should be render correct launch label when send `next` type', async () => {
    const { getByTestId } = render(
      <Launch data={sampleLaunch} type="next" />
    );

    const launchLabel = getByTestId('label');
    expect(launchLabel.textContent).toBe('Next Launch')
  });

  it('should be render correct launch label when send `upcoming` type', async () => {
    const { getByTestId } = render(
      <Launch data={sampleLaunch} type="upcoming" />
    );

    const launchLabel = getByTestId('label');
    expect(launchLabel.textContent).toBe('Upcoming')
  });

  it('should not be render launch label when not send type', async () => {
    const { queryByTestId } = render(
      <Launch data={sampleLaunch} />
    );

    const launchLabel = queryByTestId('label');
    expect(launchLabel).toBeNull();
  });

  it('should not be render description when type is `upcoming`', () => {
    const { queryByTestId } = render(
      <Launch data={sampleLaunch} type="upcoming" />
    );

    const launchLabel = queryByTestId('details');
    expect(launchLabel).toBeNull();
  })
});
