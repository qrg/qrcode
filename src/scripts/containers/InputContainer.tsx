import React, { FormEvent, useContext } from 'react';
import { ColorResult, ColorChangeHandler } from 'react-color';

import { Store } from '../Store';
import { InputText, InputTextProps } from '../components/InputText';
import { InputNumber, InputNumberProps } from '../components/InputNumber';
import { InputCheckbox, InputCheckboxProps } from '../components/InputCheckbox';
import { Select, SelectProps } from '../components/Select';
import { InputColor, InputColorProps } from '../components/InputColor';

export type TextState = {
  text: string;
};

const levelOptions = [
  {
    value: 'L',
    label: 'Low 7%'
  },
  {
    value: 'M',
    label: 'Medium 15%'
  },
  {
    value: 'Q',
    label: 'Quartile 25%'
  },
  {
    value: 'H',
    label: 'High 30%'
  }
];

export const InputContainer: React.FC<{}> = () => {
  const {
    state: { text, size, bgColor, fgColor, includeMargin, level },
    dispatch
  } = useContext(Store);

  const onTextChange = ({
    currentTarget: { value }
  }: FormEvent<HTMLInputElement>): void => {
    dispatch({
      type: 'change/text',
      payload: {
        text: value
      }
    });
  };

  const onSizeChange = ({
    currentTarget: { value }
  }: FormEvent<HTMLInputElement>): void => {
    const n = parseInt(value, 10);
    if (!n) {
      return;
    }
    dispatch({
      type: 'change/size',
      payload: {
        size: n
      }
    });
  };

  const onLevelChange = ({
    currentTarget: { value }
  }: FormEvent<HTMLSelectElement>): void => {
    dispatch({
      type: 'change/level',
      payload: {
        level: value
      }
    });
  };

  const onBgColorChange: ColorChangeHandler = ({ hex }: ColorResult) => {
    dispatch({
      type: 'change/bgColor',
      payload: {
        bgColor: hex
      }
    });
  };

  const onFgColorChange: ColorChangeHandler = ({ hex }: ColorResult) => {
    dispatch({
      type: 'change/fgColor',
      payload: {
        fgColor: hex
      }
    });
  };

  const onIncludeMarginChange = ({
    currentTarget: { checked }
  }: FormEvent<HTMLInputElement>): void => {
    dispatch({
      type: 'change/includeMargin',
      payload: {
        includeMargin: checked
      }
    });
  };

  const textProps: InputTextProps = {
    value: text,
    onChange: onTextChange,
    placeholder: 'Enter text to share'
  };

  const sizeProps: InputNumberProps = {
    value: size.toString(),
    onChange: onSizeChange,
    placeholder: 'Enter size',
    max: '7680',
    min: '32'
  };

  const levelProps: SelectProps = {
    value: level,
    options: levelOptions,
    onChange: onLevelChange
  };

  const bgColorProps: InputColorProps = {
    value: bgColor,
    onChange: onBgColorChange
  };

  const fgColorProps: InputColorProps = {
    value: fgColor,
    onChange: onFgColorChange
  };

  const includeMarginProps: InputCheckboxProps = {
    id: 'include-margin',
    label: 'Include margin',
    checked: includeMargin,
    onChange: onIncludeMarginChange
  };

  return (
    <>
      <InputText {...textProps} />
      <InputNumber {...sizeProps} />
      <Select {...levelProps} />
      <InputColor {...bgColorProps} />
      <InputColor {...fgColorProps} />
      <InputCheckbox {...includeMarginProps} />
    </>
  );
};
