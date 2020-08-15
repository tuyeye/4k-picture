import { getList } from '../services';

export default {
  namespace: 'picList',
  state: {
    data: [],
    pageSize: 10,
    pageNum: 0,
    total: 0,
  },
  effects: {
    *fetch({ payload }: any, { call, put }: any) {
      const res = yield call(getList, payload);
      if (res.code === 0) {
        yield put({
          type: 'save',
          payload: {
            data: res.data,
            total: res.total,
            pageNum: payload.pageNum,
          },
        });
      }
    },
  },
  reducers: {
    save: (state: any, { payload }: any) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
