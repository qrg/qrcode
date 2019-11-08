import React, { FormEventHandler } from 'react';

export type InputTextProps = {
  value: string;
  onChange?: FormEventHandler<HTMLInputElement>;
  placeholder?: string;
};

export const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
  const { value, onChange, placeholder } = props;
  const p = { value, onChange, placeholder };
  return <input type="text" {...p} />;
};
