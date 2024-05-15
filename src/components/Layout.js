import { MenuOutlined } from "@ant-design/icons"
import { Button, ConfigProvider, Drawer } from "antd"
import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import '../styles/global.css'
import '../styles/icons.css'
import Span from "./common/Span"
import Navigation from "./Navigation"

const Header = styled.div`
  padding: 24px;
  background-color: #1c5db7;
  color: white;
  text-align: center;
`

const HeaderContent = styled.div`
  margin: auto;
  max-width: 600px;
  text-align: center;
`

const BodyContainer = styled.div`
  margin: auto;
  max-width: 600px;
  min-height: calc(-152px + 100vh);;
  padding: 16px;
`

const Footer = styled.div`
  padding: 8px 0;
  text-align: center;
  background-color: #1c5db7;
`

const MenuButtonHolder = styled.div`
  float: left;
  padding: 0px 12px;
  position: absolute;
`

const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

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
            colorPrimary: '#1c5db7',
            fontFamily: "'Source Sans Pro', sans-serif",
            fontSize: 16,
          },
        }}
      >
        <div>
          <Link to="/" className="plain-link">
            <Header>
              <HeaderContent>
                <MenuButtonHolder>
                  <Button type="primary" icon={<MenuOutlined />} onClick={showMenu} />
                </MenuButtonHolder>
                <h2>Gatsby Template</h2>
              </HeaderContent>
            </Header>
          </Link>
        </div>

        <BodyContainer>
          {children}
        </BodyContainer>

        <Footer>
          <div className="white-text subtext">
            <Span style={{ fontSize: "14px" }}>
              Created by Jack Arnold
            </Span>
            <Span>
              <Button
                type="text"
                href="https://github.com/jackarnold84/gatsby-template"
                size="small"
                style={{ color: "white", fontSize: "14px" }}
              >
                <i className="bi-github" />
                <Span left={4}>Github</Span>
              </Button>
            </Span>
          </div>
        </Footer>
      </ConfigProvider>

      <Drawer title="Gatsby Template" onClose={closeMenu} open={openMenu} placement="top">
        <Navigation />
      </Drawer>
    </>
  )
}

export default Layout
