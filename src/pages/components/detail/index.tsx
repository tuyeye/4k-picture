import React, { FC, useEffect } from 'react';
import { connect } from 'dva';
import { Card, Row, Col, Button, Result } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import moment from 'moment';
import { RenderPics } from '@/pages/components/picList/index';
import { brands } from '@/pages/components/_layout';

const namespace = 'detail';

const page: FC<any> = ({
  dispatch,
  detail: { info, more, notfound },
  id,
  loading,
}) => {
  useEffect(() => {
    dispatch({
      type: `${namespace}/fetch`,
      payload: { id },
    });
  }, []);

  return (
    <>
      {notfound && (
        <Card type="inner">
          <Result
            status="404"
            title="哎呀！这张图片貌似被外星人偷走了，找来找去都找不到"
            subTitle="抱歉，还有很多壁纸呢，去看看其他壁纸吧～"
          />
        </Card>
      )}
      {!notfound && (
        <>
          {!loading &&
            brands([
              { to: info.resolving, title: `${info.resolving} 壁纸` },
              { to: '#', title: info.title },
            ])}
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>
              <Card
                loading={loading}
                title={<div style={{ textAlign: 'center' }}>{info.title}</div>}
                type="inner"
                actions={[<div>{info.desc}</div>]}
              >
                <img src={info.url} style={{ width: '100%' }} />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              {!loading && (
                <Button
                  type="primary"
                  block
                  size="large"
                  icon={<DownloadOutlined />}
                  style={{ marginBottom: '10px' }}
                  href={`http://api.sanqii.cn/pic/download?id=${id}`}
                  download
                >
                  下载原图（全站限时免费）
                </Button>
              )}
              <Card type="inner" loading={loading}>
                <p>分辨率：{info.resolving}</p>
                <p>分类：{info.classify}</p>
                <p>原图大小：{info.size} MB</p>
                <p>下载次数：{info.downloads ? info.downloads : '暂无下载'}</p>
                <p>
                  上传时间：{moment(info.uptime).format('YYYY年MM月DD日 HH:mm')}
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <p>类似推荐</p>
              <Card type="inner" loading={loading}>
                {RenderPics(more)}
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default connect(({ detail, loading }: any) => ({
  detail,
  loading: loading.effects[`${namespace}/fetch`],
}))(page);
