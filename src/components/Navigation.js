import { BarChartOutlined, HomeOutlined, NodeIndexOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Link } from "gatsby"
import * as React from "react"

const Navigation = () => {
  return (
    <>
      <Link to="/">
        <Button type="text" icon={<HomeOutlined />} size="large" block>
          Home
        </Button>
      </Link>
      <Link to="/plot">
        <Button type="text" icon={<BarChartOutlined />} size="large" block>
          Plotly
        </Button>
      </Link>
      <Link to="/fetcher">
        <Button type="text" icon={<NodeIndexOutlined />} size="large" block>
          API
        </Button>
      </Link>
    </>
  )
}

export default Navigation
