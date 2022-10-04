import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Alert } from './Alert';

import { NETWORK_NAME } from '../utils/envVars';

const StyledAlert = styled(Alert)`
  text-align: center;
`;

export const TestnetNotification = (): JSX.Element => {
  return (
    <StyledAlert variant="error" round="none" pad="small">
      <FormattedMessage
        defaultMessage="Warning: This is a staking launchpad for the {network} testnet."
        values={{
          network: NETWORK_NAME,
        }}
      />
    </StyledAlert>
  );
};
