import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignupForm from '../../components/SignupForm';
import SignupImage from '../../components/SignupImage';
import { signupAction, errorSetting } from '../../../redux/actions';

const Signup = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.signup.error);
  const response = useSelector((state) => state.signup.response);
  const loading = useSelector((state) => state.signup.loading);

  const dispatchError = (error) => {
    dispatch(errorSetting(error));
  };

  const dispatchResponse = (response) => {
    dispatch(signupAction(response));
  };
  return (
    <React.Fragment>
      <div className='signup'>
        <SignupForm
          errorSetting={dispatchError}
          signupAction={dispatchResponse}
          error={error}
          response={response}
          loading={loading}
        />
        <SignupImage />
      </div>
    </React.Fragment>
  );
};

export default Signup;
