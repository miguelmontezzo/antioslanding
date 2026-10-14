import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EDIT_KEY = '644835M!guel';
const SESSION_KEY = 'computize-edit-auth';

export function useEditAuth(): boolean {
  return typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY) === '1';
}

export function setEditAuth(success: boolean): void {
  if (success) sessionStorage.setItem(SESSION_KEY, '1');
  else sessionStorage.removeItem(SESSION_KEY);
}

export function EditKeyGate({ children }: { children: React.ReactNode }) {
  const [key, setKey] = useState('');
  const [error, setError] = useState(false);
  const [authenticated, setAuthenticated] = useState(() =>
    typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY) === '1'
  );
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (key === EDIT_KEY) {
      setEditAuth(true);
      setError(false);
      setAuthenticated(true);
    } else {
      setError(true);
    }
  };

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
          Acesso ao editor
        </h1>
        <p className="text-sm text-white/50 mb-6">
          Digite a chave de segurança para editar a landing.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={key}
            onChange={(e) => {
              setKey(e.target.value);
              setError(false);
            }}
            placeholder="Chave"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 focus:border-accent focus:outline-none"
            autoFocus
          />
          {error && (
            <p className="text-sm text-red-400">Chave incorreta.</p>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 rounded-lg border border-white/20 py-3 text-sm font-medium text-white/80 hover:bg-white/10"
            >
              Voltar
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-accent py-3 text-sm font-bold text-white hover:bg-accent/90"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
