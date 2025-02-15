import { MenuOutlined } from "@ant-design/icons"
import { Button, ConfigProvider, Drawer } from "antd"
import { Link } from "gatsby"
import * as React from "react"
import { BiLogoGithub } from "react-icons/bi"
import '../styles/global.css'
import { palette } from "../utils/palette"
import Navigation from "./Navigation"
import * as styles from "./layout.module.css"

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
        <div className={styles.pageContainer}>
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.menuButtonHolder}>
                <button type="button" className={styles.menuButton} onClick={showMenu} title="Open Nav Menu">
                  <MenuOutlined />
                </button>
              </div>
              <h3 className={styles.title}>
                <Link to="/" className={styles.link}>
                  Gatsby
                </Link>
              </h3>
            </div>
          </header>

          <div className={styles.contentWrapper}>
            <div className={styles.bodyContainer}>
              {stylesLoaded ? children : null}
            </div>
          </div>

          <footer className={styles.footer}>
            <div className={styles.footerContent}>
              <span className={styles.footerText}>
                Created by Jack Arnold
              </span>
              <span>
                <Button
                  type="primary"
                  size="small"
                  className={styles.githubButton}
                  icon={<BiLogoGithub />}
                  href="https://github.com/jackarnold84/gatsby-template"
                >
                  Github
                </Button>
              </span>
            </div>
          </footer>
        </div>
      </ConfigProvider>

      <Drawer title="Gatsby Template" onClose={closeMenu} open={openMenu} placement="top">
        <Navigation closeMenu={closeMenu} />
      </Drawer>
    </>
  )
}

export default Layout
