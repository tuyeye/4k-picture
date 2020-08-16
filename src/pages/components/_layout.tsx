import React, { FC } from 'react';
import { BackTop, Layout, Menu, Breadcrumb, Divider, Input, Card } from 'antd';
import { useLocation, Link, history, useParams } from 'umi';
import './_layout.less';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const NavData: string[] = [
  '4k动漫',
  '4k美女',
  '4k星空',
  '4k风景',
  '4k游戏',
  '4k汽车',
  '4k背景',
  '4k影视',
  '4k人物',
  '4k明星',
  '4k美食',
  '4k动物',
];

interface brandData {
  to: string;
  title: string;
}

const SmallSearch: FC = () => {
  const params: any = useParams();
  return (
    <div className="search">
      <Search
        defaultValue={params.search ? params.search : ''}
        onSearch={value => {
          if (value) history.push(`/search/${value}`);
        }}
        enterButton
        placeholder="李知恩，林允儿"
      />
    </div>
  );
};

const MidSearch: FC = () => {
  const params: any = useParams();
  return (
    <div className="midSearch">
      <p>10W+ 超高清壁纸，总有你喜欢的😍</p>
      <Search
        defaultValue={params.search ? params.search : ''}
        onSearch={value => {
          if (value) history.push(`/search/${value}`);
        }}
        enterButton
        style={{ width: '40%' }}
        size="large"
        placeholder="李知恩，林允儿"
      />
    </div>
  );
};

const brands: FC<any> = (brand: brandData[]) => (
  <Breadcrumb style={{ margin: '16px 0' }}>
    <Breadcrumb.Item>
      <Link to="/">首页</Link>
    </Breadcrumb.Item>
    {brand.map((e: brandData, index: number) => (
      <Breadcrumb.Item key={index}>
        <Link to={e.to}>{e.title}</Link>
      </Breadcrumb.Item>
    ))}
  </Breadcrumb>
);

const page: FC<any> = ({
  children,
  map,
  midSearch,
  brand,
  contentTopNumber,
  hiddenSmallSearch,
}) => {
  const location = useLocation();
  return (
    <>
      <Layout>
        <Header>
          <div className="logo">BiAnHuā</div>
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
            <Menu.Item key="/mobile">
              <Link to="/mobile">手机屏壁纸</Link>
            </Menu.Item>
          </Menu>
          {!hiddenSmallSearch && <SmallSearch />}
        </Header>

        {midSearch && <MidSearch />}

        <Content
          className="site-layout"
          style={{
            padding: '0 50px',
            marginTop: contentTopNumber ? contentTopNumber : 84,
          }}
        >
          {brand && brands(brand)}

          {map && (
            <Card type="inner" bordered style={{ marginBottom: '15px' }}>
              {NavData.map((e: string, index: number) => (
                <Card.Grid
                  style={{
                    width: `${100 / NavData.length}%`,
                    textAlign: 'center',
                  }}
                  key={index}
                >
                  <Link to={`/classify/${e}`}>{e}</Link>
                </Card.Grid>
              ))}
            </Card>
          )}

          <div>{children}</div>
        </Content>
        <Footer
          style={{ textAlign: 'center', lineHeight: '8px', marginTop: '50px' }}
        >
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

export { brands };
export default page;
