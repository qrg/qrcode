import React, { FormEventHandler } from 'react';

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  value: string;
  onChange: FormEventHandler<HTMLSelectElement>;
  options: Option[];
};

export const Select: React.FC<SelectProps> = (props: SelectProps) => {
  const options = props.options.map(o => (
    <option key={o.value} value={o.value}>
      {o.label}
    </option>
  ));

  const selectProps = {
    value: props.value,
    onChange: props.onChange
  };

  return <select {...selectProps}>{options}</select>;
};
