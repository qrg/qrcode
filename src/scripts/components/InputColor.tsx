import React from 'react';

import { ChromePicker, ColorChangeHandler } from 'react-color';

export type InputColorProps = {
  value: string;
  onChange: ColorChangeHandler;
};

export const InputColor: React.FC<InputColorProps> = (
  props: InputColorProps
) => {
  const { value, onChange } = props;

  return <ChromePicker color={value} onChangeComplete={onChange} />;
};
