import React from 'react';

import { StoreProvider } from './Store';
import { InputContainer } from './containers/InputContainer';
import { QrcodeContainer } from './containers/QrcodeContainer';

export const App: React.FC = () => {
  return (
    <>
      <StoreProvider>
        <InputContainer />
        <p>
          <QrcodeContainer />
        </p>
      </StoreProvider>
    </>
  );
};
