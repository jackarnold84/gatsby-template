import React from "react";
import Dynamic from "../features/dynamic/Dynamic";
import Layout from "../features/layout/Layout";

const DynamicPage: React.FC = () => {
  return (
    <Layout>
      <Dynamic />
    </Layout >
  )
}

export default DynamicPage

export const Head = () => <title>API Page</title>
