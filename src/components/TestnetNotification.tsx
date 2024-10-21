import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Alert } from './Alert';

import { TESTNET_LAUNCHPAD_NAME } from '../utils/envVars';

const StyledAlert = styled(Alert)`
  text-align: center;
`;

export const TestnetNotification = (): JSX.Element => {
  return (
    <StyledAlert variant="error" round="none" pad="small">
      <FormattedMessage
        defaultMessage="Warning: This is a staking launchpad for the {testnet} testnet."
        values={{
          testnet: TESTNET_LAUNCHPAD_NAME,
        }}
      />
    </StyledAlert>
  );
};
