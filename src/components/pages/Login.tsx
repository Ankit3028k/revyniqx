import Loginbg from '../elements/Loginbg';
import Lightcard from '../elements/Lightcard';
import Logo from '../elements/Logo';
import Iconhead from '../elements/Iconhead';
import Input from '../elements/Input';
import LinkText from '../elements/LinkText';
import Button from '../elements/Button';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async () => {
    if (!userInput.email || !userInput.password) {
      setFormError(true);
      setErrorMessage("Please enter email & password.");
      return;
    }

    try {
      const login = await axios.post(`/auth/login`, userInput);

      if (login.status === 200) {
        localStorage.setItem('token', login.data.token);
        window.location.href = '/';
      } else {
        setFormError(true);
        setErrorMessage(login.data.message || "Login failed.");
      }
    } catch (error: { response?: { data?: { message?: string } }; message: string }) {
      setFormError(true);
      setErrorMessage(error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <Loginbg />

      <div className="column justify-center items-center col-12">
        <Logo className="mt-5" />

        <Lightcard className="col-3 mt-5 p-4 column gap-1 justify-start items-start">
          
          <Iconhead
            icon="fa-regular fa-user"
            text="Company Login"
            fontSize="3xl"
            className="mb-6 text-center"
          />

          {/* Error Message */}
          {formError && (
            <p className="text-danger mb-2 w-full">{errorMessage}</p>
          )}

          <div className="my-2 col-12">
            <Input
              id="email"
              label="Email"
              placeholder="Enter your email"
              icon="fa-regular fa-envelope"
              value={userInput.email}
              onChange={handleChange}
              className="mb-2 row justify-start items-center col-12"
            />

            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              icon="fa fa-lock"
              value={userInput.password}
              onChange={handleChange}
              className="mb-1 row justify-start items-center col-12"
            />
          </div>

          <div className="row justify-space-between items-center col-12">
            <LinkText
              to="/forgot-password"
              text="Forgot Password?"
              className="primary-blue"
            />

            <Button
              text="Login"
              className="btn btn-primary"
              onClick={handleLogin}
            />
          </div>

        </Lightcard>
      </div>
    </>
  );
};

export default Login;
