import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "../components/Login";
import { loginAction, errorSetting } from "../../redux/actions/loginAuthAction";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const response = useSelector((state) => state.auth.response);
  const loading = useSelector((state) => state.auth.loading);

  const dispatchError = (error) => {
    dispatch(errorSetting(error));
  };

  const dispatchResponse = (response) => {
    dispatch(loginAction(response));
  };

  return (
    <LoginPage
      errorSetting={dispatchError}
      loginAuthAction={dispatchResponse}
      error={error}
      response={response}
      loading={loading}
    />
  );
};

export default Login;
