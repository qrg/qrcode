import React, { FC, FormEventHandler } from 'react';

export type InputCheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  onChange: FormEventHandler<HTMLInputElement>;
};

export const InputCheckbox: FC<InputCheckboxProps> = (
  props: InputCheckboxProps
) => {
  const { id, label, checked, onChange } = props;
  const inputProps = { id, label, checked, onChange };
  return (
    <>
      <input type="checkbox" {...inputProps} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};
