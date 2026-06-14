import { useState } from 'react';
import { Header } from './components/Header';
import { Overview } from './components/Overview';
import { GroupStandingsGrid } from './components/GroupStandings';
import { MatchesList } from './components/MatchesList';
import { KnockoutStage } from './components/KnockoutBracket';
import { OndeAssistir } from './components/OndeAssistir';
import { useTeams, useMatches } from './hooks/useWorldCup';
import { Loader2, AlertTriangle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const { teams, loading: teamsLoading, error: teamsError } = useTeams();
  const { matches, loading: matchesLoading, error: matchesError } = useMatches();

  const loading = teamsLoading || matchesLoading;
  const error = teamsError || matchesError;

  const groupStageMatches = matches.filter(m => m.stage === 'Group Stage');
  const knockoutMatches = matches.filter(m => m.stage !== 'Group Stage');

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
          <KnockoutStage matches={knockoutMatches} />
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
