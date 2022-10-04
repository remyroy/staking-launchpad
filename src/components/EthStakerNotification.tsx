import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Alert } from './Alert';
import { Link } from './Link';

const StyledAlert = styled(Alert)`
  text-align: center;
`;

export const EthStakerNotification = (): JSX.Element => {
  return (
    <StyledAlert variant="primary" round="none" pad="small">
      <FormattedMessage
        defaultMessage="Info: Your wallet needs to be {whitelisted} before you can use this launchpad. Join the #cheap-goerli-validator on {ethstakerdiscordlink} to get whitelisted."
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
  );
};
