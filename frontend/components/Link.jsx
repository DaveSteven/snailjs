// @flow
import React, { type Node, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { css } from 'utils/constants';

const StyledLink = styled(Link)`
  color: ${css.blue};

  &:hover,
  &:active,
  &:focus {
    color: ${css.green};
  }
`;

const StyledAnchor = styled.a`
  color: ${css.blue};

  &:hover,
  &:active,
  &:focus {
    color: ${css.green};
  }
`;

type Props = {
  to?: string,
  href: string,
  children: Node,
  className?: string,
};

const LinkWrapper = ({ to, href, children, className }: Props) => (
  <Fragment>
    {to && (
      <StyledLink to={to} href={href} className={className}>
        {children}
      </StyledLink>
    )}
    {!to && (
      <StyledAnchor href={href} className={className}>
        {children}
      </StyledAnchor>
    )}
  </Fragment>
);

LinkWrapper.defaultProps = {
  className: '',
  to: '',
};

export default LinkWrapper;
