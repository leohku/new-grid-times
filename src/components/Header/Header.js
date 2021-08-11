import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES, WEIGHTS, FAMILIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const LeftActionGroup = () => {
  return (
    <ActionGroup>
    <button>
      <Search size={24} />
    </button>
    <button>
      <Menu size={24} />
    </button>
  </ActionGroup>
  )
}

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <LeftActionGroup />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopAndUpOnly>
          <LeftActionGroup />
        </LaptopAndUpOnly>
        <Wiggle>
          <Logo />
        </Wiggle>
        <LaptopAndUpOnly>
          <SubscribeGroup>
            <Button>Subscribe</Button>
            <Link href="">Already a subscriber?</Link>
          </SubscribeGroup>
        </LaptopAndUpOnly>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LaptopAndUpOnly = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const SubscribeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  top: 14px;
`;

const Wiggle = styled.div`
  @media ${QUERIES.laptopAndUp} {
    position: relative;
    left: 36px;
    bottom: 4px;
  }
`;

const Link = styled.a`
  color: var(--gray-900);
  font-family: ${FAMILIES.serif};
  font-style: italic;
  font-weight: ${WEIGHTS.normal};
  font-size: 0.875rem;
  text-decoration: underline;
  font-family: ${FAMILIES.text};
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 2rem;
    margin-bottom: 4.5rem;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 5.1875rem;
  }
`;

export default Header;
