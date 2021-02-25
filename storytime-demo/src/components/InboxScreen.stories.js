import React from 'react';
import InboxScreen from './InboxScreen';
import { storiesOf } from '@storybook/react';

import { task, actions } from './Task.stories';

export const defaultTasks = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' },
];

export default { 
  title: 'InboxScreen',
  decorators: [ story => <div style={{ padding: '3rem' }}>{story()}</div> ]
}

storiesOf('InboxScreen', module)
  .add('basic', () => <InboxScreen tasks={defaultTasks} {...actions} />)
  .add('error', () => <InboxScreen error="Something" tasks={defaultTasks} {...actions} />);