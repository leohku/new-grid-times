import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';

import { QUERIES, FAMILIES } from '../../constants';

const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: 3rem;

  @media ${QUERIES.tabletAndUp} {
    font-size: 4rem;
  }
`;

const TodaysDate = styled.p`
  font-family: ${FAMILIES.text};
  font-size: 1.125rem;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  margin-top: -1rem;
  line-height: 1.125rem;
`;

export default Logo;
