import React from "react";
import { useGoogleLogin } from "react-google-login";
import { loginUser } from "../actions";
import { useDispatch } from "react-redux";

// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

// const clientId=process.env.GOOGLE_CLIENT_ID;
const clientId =
  "493592528135-ubno518j2dt3ce7j5ol87ko2s1g3cb2e.apps.googleusercontent.com";

function GoogleLoginBtn({ history }) {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    const user = res.profileObj;

    // dispatch(loginUser(user, history));

    console.log("Login Success: currentUser:", res);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button
      onClick={signIn}
      className="rounded-30 block text-white py-2 px-4 mb-8 transition duration-200 bg-google-100 hover:bg-darkBlue-100 text-center w-full"
    >
      <svg
        className="h-6 w-6 inline"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="30px"
        height="30px"
      >
        <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
      </svg>

      {/* <img src="icons/google.svg" alt="google login" className="icon"></img> */}

      <span className="inline-block pl-2">Login With Google</span>
    </button>
  );
}

export default GoogleLoginBtn;
