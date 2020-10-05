import React from 'react';

import AwButton from '../components/AwesomeButton';
import './AwesomeButton.css';

export default {
  title: 'Components/AwesomeButton',
  component: AwButton,
}

const Template = (args) => <AwButton {...args} />;

export const Primary = Template.bind({});
Primary.args = { stylish: "awesome-button", label: 'Awesome Button' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true, label: 'Ugly Button Disabled' };
