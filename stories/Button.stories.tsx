import React from 'react';
import { ComponentMeta } from '@storybook/react';
import {
  Description,
  DocsStory,
  ArgsTable,
  Title,
} from '@storybook/addon-docs/blocks';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Button</Title>
          <Description />
          <DocsStory id="example-button--primary"></DocsStory>
          <h3>Props</h3>
          <ArgsTable />
        </>
      )
    }
  }
} as ComponentMeta<typeof Button>;

export const primary = () => <Button primary label="Click me" />
