import API from "../const/api";
import axios from "axios";

const SELF_PROFILE_DATA = "instcool/modules/SELF_PROFILE_DATA";
const SELF_PROFILE_DATA_SUCCESS = "instcool/modules/SELF_PROFILE_DATA_SUCCESS";
const SELF_PROFILE_DATA_ERROR = "instcool/modules/SELF_PROFILE_DATA_ERROR";
const SELF_PROFILE_RECENT_MEDIA_DATA = "instcool/modules/SELF_PROFILE_RECENT_MEDIA_DATA";
const SELF_PROFILE_RECENT_MEDIA_DATA_ERROR = "instcool/modules/SELF_PROFILE_RECENT_MEDIA_DATA_ERROR";
const SELF_PROFILE_RECENT_MEDIA_DATA_SUCCESS = "instcool/modules/SELF_PROFILE_RECENT_MEDIA_DATA_SUCCESS";
const SAVE_ACCESS_TOKEN = "instcool/modules/SAVE_ACCESS_TOKEN";

const initialState = {
  userAccessToken: "",
  isFetching: false,
  error: false,
  currentUserData: {},
  userMediaData: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SELF_PROFILE_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case SELF_PROFILE_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        currentUserData: action.userData
      });
    case SELF_PROFILE_DATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      });
    case SAVE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        userAccessToken: action.userAccessToken
      });
    case SELF_PROFILE_RECENT_MEDIA_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case SELF_PROFILE_RECENT_MEDIA_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        userMediaData: action.userSelfRecentMedia
      });
    case SELF_PROFILE_RECENT_MEDIA_DATA_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      });
    default:
      return state;
  }
}

export function selfProfileData() {
  return {
    type: SELF_PROFILE_DATA
  };
}

export function selfProfileDataSuccess(data) {
  return {
    type: SELF_PROFILE_DATA_SUCCESS,
    userData: data
  };
}

export function selfProfileDataError() {
  return {
    type: SELF_PROFILE_DATA_ERROR
  };
}

export function selfProfileRecentMediaData() {
  return {
    type: SELF_PROFILE_RECENT_MEDIA_DATA
  };
}

export function selfProfileRecentMediaDataSuccess(data) {
  return {
    type: SELF_PROFILE_RECENT_MEDIA_DATA_SUCCESS,
    userSelfRecentMedia: data
  };
}

export function selfProfileRecentMediaDataError() {
  return {
    type: SELF_PROFILE_RECENT_MEDIA_DATA_ERROR
  };
}

export function saveUserAccessToken(accessToken) {
  return {
    type: SAVE_ACCESS_TOKEN,
    userAccessToken: accessToken
  };
}

export function saveUserAccessTokenAndGetProfileData(accessToken) {
  return function (dispatch) {
    dispatch(saveUserAccessToken(accessToken));
    dispatch(getSelfProfileData(accessToken));
    dispatch(getSelfMediaData(accessToken));
  }
}

export function getSelfProfileData(userAccessToken) {
  let url = API.API_URL;
  let method = API.GET_SELF_PROFILE_DATA;
  return function (dispatch) {
    dispatch(selfProfileData);
    return axios.get(url + method, {
      params: {
        access_token: userAccessToken
      }
    })
      .then(function (response) {
        dispatch(selfProfileDataSuccess(response.data.data));
      })
      .catch(function (error) {
        dispatch(selfProfileDataError());
      });
  };
}

export function getSelfMediaData(userAccessToken) {
  let url = API.API_URL;
  let method = API.GET_SELF_RECENT_MEDIA_DATA;
  return function (dispatch) {
    dispatch(selfProfileRecentMediaData);
    return axios.get(url + method, {
      params: {
        access_token: userAccessToken
      }
    })
      .then(function (response) {
        dispatch(selfProfileRecentMediaDataSuccess(response.data.data));
      })
      .catch(function (error) {
        dispatch(selfProfileRecentMediaDataError());
      });
  };
}
