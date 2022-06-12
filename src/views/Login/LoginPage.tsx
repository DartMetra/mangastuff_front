import { useNavigate } from 'react-router-dom';

import { useContext, useState } from 'react';
import { Context } from '../..';
import { AuthButton, AuthContainer, AuthGoogle, AuthInput } from './style';

export function LoginPage() {
  const { store } = useContext(Context);
  const [displayPass, setDisplayPass] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  function login(e) {
    e.preventDefault();
    store.loginEmail(email, pass);
  }

  function register() {
    store.registerEmail(email, pass);
  }

  return (
    <AuthContainer>
      <form onSubmit={login}>
        <AuthInput placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required type="email"></AuthInput>
        <AuthInput
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          required
          type={displayPass ? 'text' : 'password'}
        ></AuthInput>
        <div>
          <input onChange={() => setDisplayPass(!displayPass)} type="checkbox"></input> <span>Dispaly pass</span>
        </div>
        <div>
          <AuthButton onClick={login}>Login</AuthButton> <AuthButton onClick={register}>Register</AuthButton>
        </div>
      </form>
      <AuthGoogle
        onClick={async () => {
          await store.loginGoogle();
          navigate('/');
        }}
      >
        GOOGLE
      </AuthGoogle>
    </AuthContainer>
  );
}
