import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "../redux/authAction";
function RegistrationForm() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  console.log(
    "loading, userInfo, error, success ===>>>",
    loading,
    userInfo,
    error,
    success
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    const userSignupPayload = {
      email: username,
      password: password,
    };
    dispatch(signupUser(userSignupPayload));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
