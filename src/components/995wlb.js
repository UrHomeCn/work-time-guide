/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { data } from '../static/995wlb';
import { Table, Button, Divider } from 'antd';
import 'antd/dist/antd.css';
const columns = [
  {
    title: '公司名称',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: '公司地址',
    dataIndex: 'city',
    key: 'city',
  },
];
const WLB = () => (
  <>
    <Button
      type="primary"
      href="http://feathub.com/formulahendry/955.WLB"
      target="_blank"
    >
      新增公司
    </Button>
    <Divider />
    <Table columns={columns} dataSource={data} />
  </>
);

export default WLB;
