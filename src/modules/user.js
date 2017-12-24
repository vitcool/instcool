import API from "../const/api";
import axios from "axios";

const LOGIN = "instcool/modules/LOGIN";
const LOGIN_SUCCESS = "instcool/modules/LOGIN_SUCCESS";
const LOGIN_ERROR = "instcool/modules/LOGIN_ERROR";

const initialState = {
  userCode: "",
  isFetching: false,
  error: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: true
      });
    default:
      return state;
  }
}

export function login() {
  return {
    type: LOGIN
  };
}

export function loginSuccess() {
    return {
      type: LOGIN_SUCCESS
    };
  }

  export function loginError() {
    return {
      type: LOGIN_ERROR
    };
  }

export function loginUser() {
  let url = API.API_URL;
  let method = API.AUTHARIZATION_METHOD;
  return function(dispatch) {
    dispatch(login);
    return axios
      .get(url + method, {
        params: {
          client_id: API.CLIENT_ID,
          redirect_uri: "http://localhost:3000/",
          response_type: "token"
        }
      })
      .then(json => dispatch(loginSuccess()));
  };
}
