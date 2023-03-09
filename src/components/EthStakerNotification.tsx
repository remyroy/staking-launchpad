import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Alert } from './Alert';
import { Link } from './Link';

const StyledAlert = styled(Alert)`
  text-align: center;
`;

const StyledPre = styled.pre`
  display: inline;
  font-weight: bold;
`;

export const EthStakerNotification = (): JSX.Element => {
  return (
    <>
      <StyledAlert variant="primary" round="none" pad="small">
        <FormattedMessage
          defaultMessage="Info: Your wallet needs to be {whitelisted} before you 
                          can use this launchpad. Join the #cheap-goerli-validator 
                          channel on {ethstakerdiscordlink} to get whitelisted."
          values={{
            ethstakerdiscordlink: (
              <Link to="https://discord.io/ethstaker" inline>
                <FormattedMessage defaultMessage="EthStaker Discord Server" />
              </Link>
            ),
            whitelisted: (
              <strong>
                <FormattedMessage defaultMessage="whitelisted" />
              </strong>
            ),
          }}
        />
      </StyledAlert>
      <StyledAlert variant="error" round="none" pad="small">
        <FormattedMessage
          defaultMessage="Warning: When creating your validator keys and your deposit file
                          for this launchpad, you need to use {faucetaddress} as your withdrawal
                          address. This is only required for this launchpad. When on Mainnet, you
                          should use a withdrawal address you control if you want to use one."
          values={{
            faucetaddress: (
              <StyledPre>
                <FormattedMessage defaultMessage="0x4D496CcC28058B1D74B7a19541663E21154f9c84" />
              </StyledPre>
            ),
          }}
        />
      </StyledAlert>
    </>
  );
};
