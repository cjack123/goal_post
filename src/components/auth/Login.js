import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = ({ setAuthUser }) => {
  const email = useRef();
  const existDialog = useRef();
  const navigate = useNavigate();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((res) => res.json())
      .then((user) => (user.length ? user[0] : false));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists) {
        setAuthUser(exists);
        navigate("/");
      } else {
        existDialog.current.showModal();
      }
    });
  };

  const linkStyle = {
    margin: "1rem",
    // textDecoration: "none",
    color: "#CF6A5E",
  };

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={existDialog}>
        <div>User does not exist</div>
        <button
          className="button--close"
          onClick={(e) => existDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Goal Post</h1>
          {/* <h2>Please sign in</h2> */}
          <fieldset>
            <label htmlFor="inputEmail"> Please sign in </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <button type="submit">Sign in</button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <Link to="/register" style={linkStyle}>
          Not a member yet?
        </Link>
      </section>
    </main>
  );
};
