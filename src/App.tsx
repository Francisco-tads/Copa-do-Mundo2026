import { useState } from 'react';
import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { GroupStandingsGrid } from './components/GroupStandings';
import { MatchesList } from './components/MatchesList';
import { KnockoutStage } from './components/KnockoutBracket';
import { OndeAssistir } from './components/OndeAssistir';
import { useTeams, useMatches, useSyncMatches } from './hooks/useWorldCup';
import { Loader2, AlertTriangle, Settings, RefreshCw } from 'lucide-react';

const CONFIG_ERROR = 'SUPABASE_NOT_CONFIGURED';

function SetupScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: '#0e0e0e' }}>
      <div
        className="max-w-lg w-full rounded-2xl p-8"
        style={{ background: '#1a1a1a', border: '2px solid #f5c400' }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#f5c400' }}>
            <Settings className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="text-xl font-black text-white">Configuração necessária</h1>
            <p className="text-sm text-gray-500">Variáveis de ambiente não encontradas</p>
          </div>
        </div>

        <p className="text-gray-400 mb-6">
          Para funcionar no Vercel, adicione as variáveis de ambiente do Supabase nas configurações do projeto.
        </p>

        <div className="rounded-xl p-5 mb-6" style={{ background: '#111', border: '1px solid #2a2a2a' }}>
          <p className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: '#f5c400' }}>
            Passos no Vercel
          </p>
          <ol className="space-y-2 text-sm text-gray-300 list-decimal list-inside">
            <li>Abra o projeto no <span className="text-white font-semibold">Dashboard do Vercel</span></li>
            <li>Vá em <span className="text-white font-semibold">Settings → Environment Variables</span></li>
            <li>Adicione as variáveis abaixo com seus valores</li>
            <li>Clique em <span className="text-white font-semibold">Save</span> e depois <span className="text-white font-semibold">Redeploy</span></li>
          </ol>
        </div>

        <div className="rounded-xl p-4 space-y-3 font-mono text-sm" style={{ background: '#0a0a0a', border: '1px solid #222' }}>
          <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Variáveis necessárias:</p>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">VITE_SUPABASE_URL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">VITE_SUPABASE_ANON_KEY</span>
          </div>
          <p className="text-xs text-gray-600 mt-2 font-sans">
            Os valores estão no arquivo <code className="text-yellow-400">.env</code> do projeto ou no painel do Supabase em <code className="text-yellow-400">Settings → API</code>.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const { teams, loading: teamsLoading, error: teamsError } = useTeams();
  const { matches, loading: matchesLoading, error: matchesError } = useMatches();
  const { sync, syncing } = useSyncMatches();

  const handleSync = async () => {
    await sync();
    window.location.reload();
  };

  if (teamsError === CONFIG_ERROR || matchesError === CONFIG_ERROR) {
    return <SetupScreen />;
  }

  const loading = teamsLoading || matchesLoading;
  const error = teamsError || matchesError;

  const groupStageMatches = matches.filter(m => m.stage === 'Group Stage');
  const roundOf32Matches = matches.filter(m => m.stage === 'Round of 32');
  const knockoutMatches = matches.filter(m => m.stage !== 'Group Stage' && m.stage !== 'Round of 32');

  return (
    <div className="min-h-screen" style={{ background: '#0e0e0e' }}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="w-12 h-12 animate-spin mb-4" style={{ color: '#f5c400' }} />
            <p className="text-gray-400 font-medium">Carregando dados da Copa do Mundo...</p>
          </div>
        ) : error ? (
          <div className="rounded-xl p-8 text-center" style={{ background: '#1a1a1a', border: '1px solid #7f1d1d' }}>
            <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-3" />
            <p className="text-red-400 font-semibold">Erro ao carregar os dados</p>
            <p className="text-gray-500 text-sm mt-1">{error}</p>
          </div>
        ) : activeTab === 'overview' ? (
          <Overview teams={teams} matches={matches} />
        ) : activeTab === 'groups' ? (
          <GroupStandingsGrid teams={teams} />
        ) : activeTab === 'matches' ? (
          <MatchesList matches={groupStageMatches} />
        ) : activeTab === 'knockout' ? (
          <KnockoutStage matches={knockoutMatches} roundOf32Matches={roundOf32Matches} onSync={handleSync} syncing={syncing} />
        ) : activeTab === 'broadcast' ? (
          <OndeAssistir teams={teams} />
        ) : null}
      </main>

      <footer className="mt-12 py-8" style={{ background: '#0a0a0a', borderTop: '2px solid #1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-black text-lg" style={{ color: '#f5c400' }}>Copa do Mundo FIFA 2026</h3>
            <p className="text-gray-500 text-sm mt-0.5">Estados Unidos &bull; Canadá &bull; México</p>
            <p className="text-gray-600 text-xs mt-0.5">11 de Junho – 19 de Julho de 2026</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              Dados via{' '}
              <a href="https://francisco-tads.github.io/tabela-copa-do-mundo/" target="_blank" rel="noopener noreferrer"
                className="underline" style={{ color: '#f5c400' }}>
                API francisco-tads
              </a>
              {' '}e FIFA.com
            </p>
            <p className="text-gray-600 text-xs mt-1">48 Seleções &bull; 12 Grupos &bull; 104 Partidas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
