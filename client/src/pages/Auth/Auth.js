import "./Auth.css";

import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { loginForm, signupForm } from "../../utils/formConfig";

import { AuthContext } from "../../context/auth";
import ErrorModal from "../../components/Modal/ErrorModal";
// import GHLogin from "../../components/Auth/GHLogin";
// import GLogin from "../../components/Auth/GLogin";
// import FBLogin from '../../components/Auth/FBLogin';
import TwitterLogin from "../../components/Auth/TwitterLogin";
import Welcome from "../../components/Auth/Welcome";
import { appendData } from "../../utils";
import useForm from "../../hooks/useForm";
import { useHttpClient } from "../../hooks/useHttpClient";

const Auth = ({ newUser }) => {
  const { renderFormInputs, renderFormValues, isFormValid, setForm } =
    useForm(signupForm);

  useEffect(() => {
    if (!newUser) {
      setForm(loginForm);
    } else {
      setForm(signupForm);
    }
  }, [newUser, setForm]);

  const formValues = renderFormValues();
  const formInputs = renderFormInputs();

  const { login } = useContext(AuthContext);
  const history = useHistory();

  const { sendReq, error, clearError } = useHttpClient();

  //handle google auth
  // const handleGoogleAuth = async (googleData) => {
  //   //getting tokenID from GLogin
  //   const responseData = await sendReq(
  //     `${process.env.REACT_APP_BASE_URL}/users/auth/google`,
  //     "POST",
  //     JSON.stringify({
  //       tokenId: googleData.tokenId,
  //     }),
  //     {
  //       "Content-Type": "application/json", //inform backend the type of data being sent
  //     }
  //   );
  //   let { user } = responseData;
  //   user = { ...user, token: googleData.tokenId };
  //   login(user); //log the user in
  //   history.push("/");
  // };

  // const handleGithubAuth = async (githubData) => {
  //   const { code } = githubData;
  //   const responseData = await sendReq(
  //     `${process.env.REACT_APP_BASE_URL}/users/auth/github`,
  //     "POST",
  //     JSON.stringify({ code }),
  //     {
  //       "Content-Type": "application/json", //inform backend the type of data being sent
  //     }
  //   );
  //   let { user } = responseData;
  //   user = { ...user, token: githubData.code };
  //   login(user); //log the user in
  //   history.push("/");
  // };

  // const handleFBAuth = async (fbData) => {
  //   const responseData = await sendReq(
  //     `${process.env.REACT_APP_BASE_URL}/users/auth/facebook`,
  //     "POST",
  //     JSON.stringify({
  //       accessToken: fbData.accessToken,
  //       userId: fbData.userID,
  //     }),
  //     {
  //       "Content-Type": "application/json", //inform backend the type of data being sent
  //     }
  //   );
  //   let { user } = responseData;
  //   user = { ...user, token: fbData.accessToken };
  //   login(user); //log the user in
  //   history.push("/");
  // };

  const handleAuthSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let responseData;
      if (newUser) {
        const formData = appendData(formValues);

        console.log("formData ", formData);
        responseData = await sendReq(
          `${process.env.REACT_APP_BASE_URL}/users/signup`,
          "POST",
          formData
        );
      } else {
        responseData = await sendReq(
          `${process.env.REACT_APP_BASE_URL}/users/login`,
          "POST",
          JSON.stringify(formValues),
          {
            "Content-Type": "application/json",
          }
        );
      }
      login(responseData.user);
      history.push("/");
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      <div className="container container-auth">
        <Welcome />
        <div className="auth__social">
          {/* <GLogin onLogin={handleGoogleAuth} /> */}
          {/* <GHLogin onLogin={handleGithubAuth} /> */}
          {/* <FBLogin onLogin={handleFBAuth} /> */}
          <TwitterLogin />
        </div>

        <form className="form__auth">
          <div className="form__options">
            <p>Or</p>
            <h2>
              {newUser
                ? "Create a New Account"
                : "Log in using an Existing Account"}
            </h2>
            {formInputs}

            <button
              onClick={handleAuthSubmit}
              className="btn btn__auth btn__auth--mode"
              disabled={!isFormValid()}
            >
              {newUser ? "Create account" : "Login"}
            </button>
            <Link
              className="btn btn__auth btn__auth--switch"
              to={newUser ? "/auth" : "/auth/new-user"}
            >
              {newUser ? "Login" : "Create account"}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
