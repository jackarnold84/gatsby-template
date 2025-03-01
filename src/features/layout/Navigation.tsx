import { BarChartOutlined, HomeOutlined, NodeIndexOutlined } from "@ant-design/icons"
import { Button, List } from "antd"
import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./layout.module.css"

interface NavigationProps {
  closeMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  const links = [
    { to: "/", icon: <HomeOutlined />, text: "Home" },
    { to: "/plot", icon: <BarChartOutlined />, text: "Plot Demo" },
    { to: "/dynamic", icon: <NodeIndexOutlined />, text: "Dynamic Demo" },
  ]

  return (
    <>
      <List
        size="small"
        dataSource={links}
        renderItem={item => (
          <List.Item>
            <Link to={item.to} className={styles.navLink}>
              <Button type="text" icon={item.icon} size="large" block onClick={closeMenu} >
                {item.text}
              </Button>
            </Link>
          </List.Item>
        )}
      />
    </>
  )
}

export default Navigation
