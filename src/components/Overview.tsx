import { Trophy, Users, MapPin, Calendar } from 'lucide-react';
import type { Team, Match } from '../types';

interface OverviewProps {
  teams: Team[];
  matches: Match[];
}

const confederationColors: Record<string, string> = {
  'UEFA':      '#3b82f6',
  'CONMEBOL':  '#22c55e',
  'CAF':       '#f59e0b',
  'AFC':       '#ef4444',
  'CONCACAF':  '#10b981',
  'OFC':       '#06b6d4',
};

const confNames: Record<string, string> = {
  'UEFA':      'Europa',
  'CONMEBOL':  'América do Sul',
  'CAF':       'África',
  'AFC':       'Ásia',
  'CONCACAF':  'Am. Central/Norte',
  'OFC':       'Oceania',
};

const champions = [
  { name: 'Brasil',    code: 'BRA', wins: 5 },
  { name: 'Alemanha',  code: 'GER', wins: 4 },
  { name: 'Argentina', code: 'ARG', wins: 3 },
  { name: 'Uruguai',   code: 'URU', wins: 2 },
  { name: 'França',    code: 'FRA', wins: 2 },
  { name: 'Espanha',   code: 'ESP', wins: 1 },
  { name: 'Inglaterra',code: 'ENG', wins: 1 },
];

const CARD = { background: '#1a1a1a', border: '1px solid #2a2a2a' };
const HEADER_GOLD = { background: 'linear-gradient(90deg, #f5c400 0%, #e0af00 100%)' };

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="px-5 py-3 rounded-t-xl" style={HEADER_GOLD}>
      <h2 className="font-black text-black text-base tracking-wide uppercase">{label}</h2>
    </div>
  );
}

export function Overview({ teams, matches }: OverviewProps) {
  const hosts = teams.filter(t => t.is_host);
  const completedMatches = matches.filter(m => m.status === 'completed');
  const confederations = teams.reduce((acc, t) => {
    acc[t.confederation] = (acc[t.confederation] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const stats = [
    { label: 'Seleções',      value: teams.length,  sub: `${Object.keys(confederations).length} confederações`, Icon: Users },
    { label: 'Grupos',        value: 12,             sub: '4 times por grupo',         Icon: Trophy },
    { label: 'Partidas',      value: matches.length, sub: `${completedMatches.length} realizadas`, Icon: Calendar },
    { label: 'Países-Sede',   value: hosts.length,   sub: 'anfitriões',                Icon: MapPin },
  ];

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ label, value, sub, Icon }) => (
          <div key={label} className="rounded-xl p-5 shadow-xl" style={CARD}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(245,196,0,0.12)' }}>
                <Icon className="w-5 h-5" style={{ color: '#f5c400' }} />
              </div>
              <span className="text-sm text-gray-400">{label}</span>
            </div>
            <div className="text-3xl font-black text-white">{value}</div>
            <div className="text-xs text-gray-500 mt-1">{sub}</div>
          </div>
        ))}
      </div>

      {/* Resultados recentes */}
      {completedMatches.length > 0 && (
        <div className="rounded-xl overflow-hidden shadow-xl" style={CARD}>
          <SectionHeader label={`Resultados Recentes — ${completedMatches.length} jogo${completedMatches.length > 1 ? 's' : ''} realizado${completedMatches.length > 1 ? 's' : ''}`} />
          <div>
            {completedMatches.map((m, i) => (
              <div
                key={m.id}
                className="flex items-center gap-3 px-5 py-3 transition-colors"
                style={{ borderBottom: i < completedMatches.length - 1 ? '1px solid #222' : 'none' }}
              >
                <span
                  className="text-xs font-black w-16 shrink-0 text-center px-2 py-0.5 rounded"
                  style={{ background: 'rgba(245,196,0,0.15)', color: '#f5c400' }}
                >
                  GRP {m.group_name}
                </span>
                <div className="flex-1 flex items-center justify-center gap-3">
                  <div className="flex items-center gap-2">
                    {m.home_team && <img src={m.home_team.flag_url} alt="" className="w-7 h-7 rounded-full object-cover border-2 border-gray-600" />}
                    <span className="text-sm font-semibold text-gray-200">{m.home_team?.code}</span>
                  </div>
                  <span
                    className="px-3 py-1 rounded font-black text-sm min-w-[64px] text-center"
                    style={{ background: '#f5c400', color: '#000' }}
                  >
                    {m.home_score} – {m.away_score}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-200">{m.away_team?.code}</span>
                    {m.away_team && <img src={m.away_team.flag_url} alt="" className="w-7 h-7 rounded-full object-cover border-2 border-gray-600" />}
                  </div>
                </div>
                <span className="text-xs text-gray-600 w-28 text-right hidden sm:block truncate">{m.stadium}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Calendário */}
      <div className="rounded-xl overflow-hidden shadow-xl" style={CARD}>
        <SectionHeader label="Calendário do Torneio" />
        <div className="p-5 grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Fase de Grupos',
              color: '#f5c400',
              rows: [
                ['Número de jogos', '72 partidas'],
                ['Período', '11 Jun – 30 Jun 2026'],
                ['Grupos', '12 grupos, 3 rodadas cada'],
                ['Classificados', 'Os 2 primeiros de cada grupo'],
              ],
            },
            {
              title: 'Fase Eliminatória',
              color: '#60a5fa',
              rows: [
                ['Oitavas de Final', '28 Jun – 3 Jul 2026'],
                ['Quartas de Final', '4–7 Jul 2026'],
                ['Semifinais', '9–10 Jul 2026'],
                ['Final', '19 Jul 2026 – MetLife Stadium'],
              ],
            },
          ].map(({ title, color, rows }) => (
            <div key={title}>
              <h3 className="font-black text-sm uppercase tracking-wider mb-3" style={{ color }}>{title}</h3>
              <div className="space-y-0">
                {rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2" style={{ borderBottom: '1px solid #222' }}>
                    <span className="text-gray-500 text-sm">{k}</span>
                    <span className="font-semibold text-gray-200 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Países-sede */}
      <div className="rounded-xl overflow-hidden shadow-xl" style={CARD}>
        <SectionHeader label="Países-Sede" />
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {hosts.map(h => (
            <div key={h.id} className="flex items-center gap-4 rounded-xl p-4" style={{ background: '#222' }}>
              <img src={h.flag_url} alt={h.name} className="w-16 h-16 rounded-xl object-cover shadow-md" />
              <div>
                <h3 className="font-black text-white text-lg">{h.name}</h3>
                <p className="text-gray-500 text-sm">{h.confederation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confederações */}
      <div className="rounded-xl overflow-hidden shadow-xl" style={CARD}>
        <SectionHeader label="Times por Confederação" />
        <div className="p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(confederations).map(([conf, count]) => (
            <div key={conf} className="rounded-xl p-4 text-center" style={{ background: '#222' }}>
              <div
                className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center"
                style={{ background: confederationColors[conf] || '#666' }}
              >
                <span className="text-white font-black text-lg">{count}</span>
              </div>
              <span className="text-xs font-bold text-gray-300">{conf}</span>
              <p className="text-xs text-gray-600 mt-0.5 leading-tight">{confNames[conf]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Maiores campeões */}
      <div className="rounded-xl overflow-hidden shadow-xl" style={CARD}>
        <SectionHeader label="Maiores Campeões do Mundo" />
        <div className="p-5 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-4">
          {champions.map(ch => {
            const team = teams.find(t => t.code === ch.code);
            return (
              <div key={ch.code} className="rounded-xl p-4 text-center" style={{ background: '#222' }}>
                {team && (
                  <img src={team.flag_url} alt={team.name} className="w-12 h-12 rounded-full mx-auto mb-2 shadow object-cover border-2 border-gray-600" />
                )}
                <p className="font-bold text-gray-200 text-sm">{ch.name}</p>
                <div className="flex justify-center gap-0.5 mt-1 mb-0.5">
                  {Array.from({ length: ch.wins }).map((_, i) => (
                    <span key={i} className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: '#f5c400' }} />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{ch.wins}x campeão</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
