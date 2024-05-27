'use client';

import React from 'react';
import Link from "next/link";
import { AuthProvider, useAuth } from './components/AuthContext';
import PasswordInput from './components/PasswordInput';


const HomePage: React.FC = () => {
  return (
    <AuthProvider>
      <div>
        <h1>両家挨拶のしおり</h1>
        <p>以下のフォームから秘密のキーワードを入力してください</p>
        <AuthenticatedContent />
      </div>
    </AuthProvider>
  );
};


const AuthenticatedContent: React.FC = () => {
  const { authenticated } = useAuth();

  if (authenticated) {
    return (
      <div>
        <p>認証されました。</p>
        <Link href="/introduction">
          進む
        </Link>
      </div>
    );
  }

  if (!authenticated) {
    return <PasswordInput />;
  }
};

export default HomePage;
