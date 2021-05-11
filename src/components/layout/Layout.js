import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";

const Grid = styled.div`
  display: grid;
  grid:
    "nav header" min-content
    "nav main" 1fr / min-content 1fr;
  min-height: 100vh;

  #sidebar-wrapper {
    margin-left: 0rem;
  }
`;

const GridNav = styled.div`
  grid-area: nav;
`;

const GridHeader = styled.header`
  grid-area: header;
`;

const GridMain = styled.main`
  grid-area: main;
`;

function Layout({ children }) {
  const [showNav, setShowNav] = useState(0);
  const toggle = () => setShowNav(Number(!showNav));

  return (
    <Grid>
      {(
        <>
          <GridNav>
            <Navbar visible={showNav} close={toggle} />
          </GridNav>
          <GridHeader>
            <Header toggle={toggle} />
          </GridHeader>
        </>
      )}
      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;
