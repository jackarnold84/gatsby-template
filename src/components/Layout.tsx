import { MenuOutlined } from "@ant-design/icons"
import { Button, ConfigProvider, Drawer } from "antd"
import { Link } from "gatsby"
import * as React from "react"
import { BiLogoGithub } from "react-icons/bi"
import styled from "styled-components"
import '../styles/global.css'
import { palette } from "../utils/palette"
import Navigation from "./Navigation"
import Span from "./common/Span"

const Header = styled.div`
  padding: 24px;
  background-color: ${palette.primary};
  color: white;
  text-align: center;
`

const HeaderContent = styled.div`
  margin: auto;
  max-width: 600px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const BodyContainer = styled.div`
  margin: auto;
  max-width: 600px;
  padding: 16px;
`

const Footer = styled.div`
  padding: 8px 0;
  text-align: center;
  background-color: ${palette.primary};
`

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MenuButtonHolder = styled.div`
  position: absolute;
  left: 0;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  flex: 1;
`

const Title = styled.h3`
  margin: 0;
  color: white;
`

const MenuButton = styled.button`
  background-color: ${palette.primary};
  border: none;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  &:hover {
    background-color: ${palette.primaryHover};
  }
`

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [stylesLoaded, setStylesLoaded] = React.useState(false);

  React.useEffect(() => {
    setStylesLoaded(true);
  }, []);

  const showMenu = () => {
    setOpenMenu(true);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: palette.primary,
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: 16,
          },
        }}
      >
        <PageContainer>
          <div>
            <Header>
              <HeaderContent>
                <MenuButtonHolder>
                  <MenuButton onClick={showMenu}>
                    <MenuOutlined />
                  </MenuButton>
                </MenuButtonHolder>
                <Title>
                  <Link to="/" style={{ "padding": "12px 24px" }}>
                    Gatsby
                  </Link>
                </Title>
              </HeaderContent>
            </Header>
          </div>

          <ContentWrapper>
            <BodyContainer>
              {stylesLoaded ? children : null}
            </BodyContainer>
          </ContentWrapper>

          <Footer>
            <FooterContent className="white-text subtext">
              <Span style={{ fontSize: "14px" }}>
                Created by Jack Arnold
              </Span>
              <Span>
                <Button
                  type="text"
                  size="small"
                  style={{ color: "white", fontSize: "14px", textDecoration: "none" }}
                  icon={<BiLogoGithub />}
                  href="https://github.com/jackarnold84/gatsby-template"
                >
                  Github
                </Button>
              </Span>
            </FooterContent>
          </Footer>
        </PageContainer>
      </ConfigProvider>

      <Drawer title="Gatsby Template" onClose={closeMenu} open={openMenu} placement="top">
        <Navigation closeMenu={closeMenu} />
      </Drawer>
    </>
  )
}

export default Layout
