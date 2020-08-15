export interface picListKey {
  serachStr?: string; //模糊检索字段，含 title 和 desc
  resolving?: string; //分辨率,3K\4K\5K
  classify?: string; //分类
  pageSize: number; //分页数量
  pageNum: number; //页码
}

export interface picItem {
  id: number; //图片id
  url: string; //图片url
  title: string; //图片描述
}
