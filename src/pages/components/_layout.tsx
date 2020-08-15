import React, { FC } from 'react';
import { BackTop, Layout, Menu, Breadcrumb, Divider, Input } from 'antd';
import { useLocation, Link } from 'umi';
import './_layout.less';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const page: FC<any> = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key="/">
              <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="/4k">
              <Link to="/4k">4K 壁纸</Link>
            </Menu.Item>
            <Menu.Item key="/5k">
              <Link to="/5k">5K 壁纸</Link>
            </Menu.Item>
            <Menu.Item key="daiyu">曲面屏壁纸</Menu.Item>
          </Menu>
        </Header>
        <div
          style={{
            width: '100%',
            background: 'rgba(0, 21, 41,1)',
            height: '400px',
            textAlign: 'center',
            color: 'rgba(255,255,255,.9)',
            marginTop: 64,
          }}
        >
          <p style={{ fontSize: '50px', marginTop: '60px' }}>
            10W+ 超高清壁纸，总有你喜欢的😍
          </p>
          <Search
            onSearch={value => console.log(value)}
            enterButton
            style={{ width: '40%' }}
            size="large"
          />
        </div>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center', lineHeight: '8px' }}>
          <p>
            <a href="http://beian.miit.gov.cn/" target="_blank">
              浙ICP备18036473号-2
            </a>
          </p>
          <p>
            ©{new Date().getFullYear()} 彼岸花网 All rights reserved.
            <Divider type="vertical" />
            <a href="http://jx.sanqii.cn" target="_blank">
              涂叶解析
            </a>
            <Divider type="vertical" />
            <a href="http://blog.sanqii.cn" target="_blank">
              博客
            </a>
          </p>
        </Footer>
      </Layout>
      <BackTop />
    </>
  );
};

export default page;
