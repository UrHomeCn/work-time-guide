import React, { useState } from 'react';
import { Tabs, Tooltip, Select, Table, Divider } from 'antd';
import 'antd/dist/antd.css';
import Layout from '../components/layout';
import Seo from '../components/seo';
import WLB from '../components/995wlb';
import { useAllCollections } from '../hooks/useCollection';
import { columns } from '../static/indexTable';

const filterOption = { company: '', city: '', work: '' };

const IndexPage = () => {
  const { collections, companies, cities, works } = useAllCollections();
  const [filterData, setFilterData] = useState(collections);
  const selectPageData = [
    { type: 'company', name: '公司', options: companies },
    { type: 'city', name: '城市', options: cities },
    { type: 'work', name: '岗位', options: works },
  ];
  const handleFilter = (e, type) => {
    const value = e;
    filterOption[type] = value;
    const match = (key, value) =>
      ['', 'All', value].includes(filterOption[key]);
    const filteredData = collections.filter(
      (data) =>
        match('company', data.company) &&
        match('work', data.work) &&
        match('city', data.city)
    );
    setFilterData(filteredData);
  };
  const { TabPane } = Tabs;
  const { Option } = Select;
  return (
    <Layout>
      <Seo title="互联网防内卷Web版" />
      <div className="flex flex-col items-start md:items-center md:flex-row">
        <div className="md:mr-4 h-28 w-28 text-7xl flex md:justify-center items-center justify-start">
          📜
        </div>
        <h1 className="text-2xl font-extrabold text-black md:text-5xl dark:text-white">
          互联网防内卷Web版
        </h1>
      </div>
      <div className="mt-6 flex gap-4 items-center">
        <a href="https://github.com/wz930206/work-time-guide">
          <img
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/wz930206/work-time-guide?style=social"
          />
        </a>
        <a href="https://github.com/wz930206/work-time-guide">
          <img
            src="https://visitor-badge.glitch.me/badge?page_id=work-time-guide"
            alt="visitor badge"
          />
        </a>
      </div>
      <div className="mt-6 text-gray-900 dark:text-white">
        <p className="border-l-4 border-gray-200 py-2 my-3 px-3 text-gray-500 dark:text-white">
          2021-10-26 整合：
          <a
            className="text-blue-700 transition hover:text-blue-600 dark:text-blue-400  dark:hover:text-blue-300"
            href="https://github.com/xiaochaohit/955.Remote"
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip title="持续收录可支持远程办公的优秀企业名单">
              <span>955.Remote</span>
            </Tooltip>
          </a>{' '}
          数据
        </p>
        <p className="border-l-4 border-gray-200 py-2 my-3 px-3 text-gray-500 dark:text-white">
          2021-10-25 更新：
          <a
            className="text-blue-700 transition hover:text-blue-600 dark:text-blue-400  dark:hover:text-blue-300"
            href="https://github.com/WorkerLivesMatter/WorkingTime"
            target="_blank"
            rel="noreferrer"
          >
            WorkingTime
          </a>{' '}
          数据
        </p>
        <p className="border-l-4 border-gray-200 py-2 my-3 px-3 text-gray-500 dark:text-white">
          2021-10-19 更新：
          <a
            className="text-blue-700 transition hover:text-blue-600 dark:text-blue-400  dark:hover:text-blue-300"
            href="https://github.com/996icu/996.ICU"
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip title="996 工作制：即每天早 9 点到岗，一直工作到晚上 9 点。每周工作 6 天">
              <span>996icu</span>
            </Tooltip>
          </a>{' '}
          数据
        </p>
        <p className="border-l-4 border-gray-200 py-2 my-3 px-3 text-gray-500 dark:text-white">
          2021-10-19 更新：
          <a
            className="text-blue-700 transition hover:text-blue-600 dark:text-blue-400  dark:hover:text-blue-300"
            href="https://github.com/formulahendry/955.WLB"
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip title="955 工作制：即每天早 9 点到岗，一直工作到下午 5 点。每周工作 5 天。">
              <span>955.WLB</span>
            </Tooltip>
          </a>{' '}
          数据
        </p>
        <p className="border-l-4 border-gray-200 py-2 my-3 px-3 text-gray-500 dark:text-white">
          2021-10-19 更新：
          <a
            className="text-blue-700 transition hover:text-blue-600 dark:text-blue-400  dark:hover:text-blue-300"
            href="https://github.com/ShameCom/ShameCom"
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip title="校招污点公司记录">
              <span>ShameCom</span>
            </Tooltip>
          </a>{' '}
          数据
        </p>
      </div>
      <div className="flex w-full mt-4 flex-col items-center gap-4 sm:flex-row">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="WorkingTime" key="1">
            {/* <Button
              type="primary"
              href="https://docs.qq.com/form/page/DWmxJZ1ZxVHhBblJB#/fill"
              target="_blank"
            >
              新增作息调查问卷
            </Button> */}
            <Divider />
            <div className="flex w-full mt-4 flex-col items-center gap-4 sm:flex-row">
              {selectPageData.map((item, index) => (
                <Select
                  showSearch
                  style={{ width: 220 }}
                  key={index}
                  onChange={(value) => {
                    handleFilter(value, item.type);
                  }}
                  defaultValue="placeholder"
                  required
                >
                  <Option value="placeholder" disabled="disabled">
                    {item.name}
                  </Option>
                  <Option value="All">全部</Option>
                  {item.options.map((option, key) => (
                    <Option key={key} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              ))}
            </div>
            <Table
              className="mt-6"
              columns={columns}
              dataSource={filterData}
              scroll={{ x: 1600, y: 500 }}
            />
            {/* {filterData.map((item, index) => (
              <div key={item.id} className="card shadow mt-6 w-full">
                <div className="card-body">
                  <h2 className="card-title">
                    {item.company}-{item.department}-{item.work}
                  </h2>
                  <div className="mb-3">
                    <span className="badge mr-2">{item.company}</span>
                    <span className="badge mr-2">{item.work}</span>
                    <span className="badge mr-2">{item.city}</span>
                    {item.industry !== '' && (
                      <span className="badge mr-2">{item.industry}</span>
                    )}
                  </div>
                  <p className="mb-3">
                    上下班时间：{item.startWork}（上班），{item.endWork}（下班）
                  </p>
                  <p className="mb-3">
                    用餐时间：{item.lunchTime}（午餐），{item.dinnerTime}
                    （晚餐）
                  </p>
                  <p className="mb-3">
                    是否特殊工作日：{item.Wed}（周三），{item.Fri}（周五）
                  </p>
                  <p className="mb-3">
                    一周工作天数：{item.workDays}，日报/周报：{item.report}
                  </p>
                  <p className="mb-3">备注：{item.note || '无'}</p>
                </div>
              </div>
            ))} */}
          </TabPane>
          <TabPane tab="996icu" key="2">
            <a href="https://996.icu" target="_blank" rel="noreferrer">
              <img
                src="https://img.shields.io/badge/link-996.icu-red.svg"
                alt="996.icu"
              />
            </a>
          </TabPane>
          <TabPane tab="955.WLB" key="3">
            <WLB />
          </TabPane>
          <TabPane tab="ShameCom" key="4">
            待完善
          </TabPane>
          <TabPane tab="955.Remote" key="5">
            待完善
          </TabPane>
        </Tabs>
      </div>
    </Layout>
  );
};

export default IndexPage;
