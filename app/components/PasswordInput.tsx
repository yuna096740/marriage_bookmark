'use client';

import React, { useState, FormEvent } from 'react';
import { useAuth } from './AuthContext';

const PasswordInput: React.FC = () => {
  const [inputPassword, setInputPassword] = useState('');
  const { login, errorMessage } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(inputPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default PasswordInput;
