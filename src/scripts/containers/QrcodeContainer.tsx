import React, { useContext } from 'react';

import QRCode, { BaseQRCodeProps } from 'qrcode.react';
import { Store } from '../Store';

export type QrcodeState = {
  text: string;
  bgColor: string;
  fgColor: string;
  level: 'L' | 'M' | 'Q' | 'H';
  size: number;
  includeMargin: boolean;
};

export const QrcodeContainer: React.FC<{}> = () => {
  const {
    state: { text, bgColor, fgColor, level, size, includeMargin }
  } = useContext(Store);
  const props: BaseQRCodeProps = {
    value: text,
    bgColor,
    fgColor,
    level,
    size,
    includeMargin
  };
  return <QRCode {...props} renderAs="svg" />;
};
