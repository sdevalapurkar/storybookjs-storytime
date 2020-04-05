import React from 'react';
import InboxScreen from './InboxScreen';
import { storiesOf } from '@storybook/react';

export default { 
  title: 'InboxScreen',
  decorators: [ story => <div style={{ padding: '3rem' }}>{story()}</div> ]
}

storiesOf('InboxScreen', module)
  .add('basic', () => <InboxScreen />)
  .add('error', () => <InboxScreen error="Something" />);