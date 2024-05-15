import { BarChartOutlined, HomeOutlined, NodeIndexOutlined } from "@ant-design/icons"
import { Button } from "antd"
import * as React from "react"
import styled from "styled-components"

const Navigation = () => {
  return (
    <>
      <Button type="text" icon={<HomeOutlined />} size="large" block>
        Home
      </Button>
      <Button type="text" icon={<BarChartOutlined />} size="large" block>
        Plotly
      </Button>
      <Button type="text" icon={<NodeIndexOutlined />} size="large" block>
        API
      </Button>
    </>
  )
}

export default Navigation
