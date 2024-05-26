import { useState } from "react";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(email, password);
        }}
      >
        <label className="text-sm text-gray-500">E-mail</label>
        <input
          type="text"
          placeholder="Ex.: foo@bar.com"
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          value={email}
          onInput={(e) => setEmail(e.currentTarget.value)}
        />
        <label htmlFor="password" className="text-sm text-gray-500">
          Password
        </label>
        <input
          type="password"
          placeholder="Ex.: foobar123"
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
          value={password}
          onInput={(e) => setPassword(e.currentTarget.value)}
        />
        <div className="flex justify-between items-center">
          <a href="#" className="text-fuchsia-700 text-sm">
            Create an account
          </a>
          <button className="bg-fuchsia-700 text-white px-4 py-2 rounded-lg">
            Log in
          </button>
        </div>
      </form>
    </>
  );
}
