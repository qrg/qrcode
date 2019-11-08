import React, { FormEventHandler } from 'react';

export type InputNumberProps = {
  value: string;
  onChange?: FormEventHandler<HTMLInputElement>;
  placeholder?: string;
  max?: string;
  min?: string;
};

export const InputNumber: React.FC<InputNumberProps> = (
  props: InputNumberProps
) => {
  const { value, onChange, placeholder, max, min } = props;
  const p = { value, onChange, placeholder, max, min };
  return <input type="number" {...p} />;
};
