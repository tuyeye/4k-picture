import { getDetail } from '../services';

export default {
  namespace: 'detail',
  state: {
    more: [],
    info: {},
    notfound: false,
  },
  effects: {
    *fetch({ payload }: any, { call, put }: any) {
      const res = yield call(getDetail, payload);

      let result = res.code === 0 ? res : { notfound: true };

      yield put({
        type: 'save',
        payload: result,
      });
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
