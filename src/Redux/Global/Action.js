import * as actionType from './ActionType';
import Cookies from 'js-cookie';
import API from '../../Helpers/endpoints';
import { authHeaders } from '../../Util/GlobalFuntion';

export const getUserAction = () => async (dispatch, getState, api) => {
  dispatch(actionType.userInit());
  const token = Cookies.get('token');
  const response = await api.get(API.UserApi, authHeaders(token));
  if (response.status === 200) {
    dispatch(actionType.userSuccess(response.data));
  } else {
    dispatch(actionType.userFailed(response));
  }
};
