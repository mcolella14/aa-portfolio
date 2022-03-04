import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopLevelWrapper = styled("div")`
  max-width: 1440px;
  margin: auto;
`;
const Main = styled("div")`
  margin: 24px;
`;

const NavBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const SubNav = styled("div")`
  display: flex;
  a {
    margin: 0 20px;
    @media (max-width: 420px) {
      * {
        font-size: 1rem;
      }
      margin: 0 10px;
    }
  }
  flex-shrink: 2;
`;

const IconFlex = styled("div")`
  width: 20%;
  display: flex;
  justify-content: flex-end;
`;

const IconLink = styled("div")`
  cursor: pointer;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

const Name = styled("a")`
  width: 20%;
`;

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <AppBar position="sticky">
        <NavBar>
          <Link href="/">
            <Name>
              <h3>ALLY AMARAL</h3>
            </Name>
          </Link>
          <SubNav>
            <Link href="/">
              <a>
                <Typography variant="h5">Home</Typography>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <Typography variant="h5">About</Typography>
              </a>
            </Link>
          </SubNav>
          <IconFlex>
            <IconLink>
              <a
                href="https://www.instagram.com/ally_amarall/"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </IconLink>
            <IconLink>
              <a
                href="https://www.linkedin.com/in/alexandra-amaral/"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </IconLink>
          </IconFlex>
        </NavBar>
      </AppBar>
      <TopLevelWrapper>
        <Main>{children}</Main>
      </TopLevelWrapper>
    </>
  );
};

export default Layout;
