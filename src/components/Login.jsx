import { GoogleLogin } from 'react-google-login';

const clientId = 'YOUR_CLIENT_ID';


function Login() {

const onSuccess = (res) => {
  console.log("Success login!");
}
const onFailure = (res) => {
  console.log("Login failure!");
}

  return(
    <div id="sigInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        coockiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}