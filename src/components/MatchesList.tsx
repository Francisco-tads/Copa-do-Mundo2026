import { useState } from 'react';
import { Filter, MapPin } from 'lucide-react';
import type { Match } from '../types';

interface MatchesListProps {
  matches: Match[];
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

const DAY_PT: Record<string, string> = {
  MON: 'SEG', TUE: 'TER', WED: 'QUA', THU: 'QUI',
  FRI: 'SEX', SAT: 'SÁB', SUN: 'DOM',
  // já em português (segurança)
  SEG: 'SEG', TER: 'TER', QUA: 'QUA', QUI: 'QUI',
  SEX: 'SEX', SÁB: 'SÁB', DOM: 'DOM',
};

function toDayPt(day: string | null) {
  if (!day) return '';
  return DAY_PT[day.toUpperCase()] ?? day;
}

function buildSigla(name: string) {
  if (!name) return '???';
  const parts = name.split(' ');
  if (parts.length === 1) return name.substring(0, 3).toUpperCase();
  return parts.map(p => p[0]).join('').substring(0, 3).toUpperCase();
}

const CARD = { background: '#1a1a1a', border: '1px solid #2a2a2a' };

export function MatchesList({ matches }: MatchesListProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedRound, setSelectedRound] = useState<string>('all');

  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const rounds = [
    { value: '1', label: 'Rodada 1' },
    { value: '2', label: 'Rodada 2' },
    { value: '3', label: 'Rodada 3' },
  ];

  const filtered = matches
    .filter(m => {
      if (m.stage !== 'Group Stage') return false;
      if (selectedGroup !== 'all' && m.group_name !== selectedGroup) return false;
      if (selectedRound !== 'all' && m.round !== selectedRound) return false;
      return true;
    })
    .sort((a, b) => {
      const dateCmp = (a.match_date || '').localeCompare(b.match_date || '');
      if (dateCmp !== 0) return dateCmp;
      return (a.match_time || '').localeCompare(b.match_time || '');
    });

  return (
    <div className="space-y-5">
      {/* Filters */}
      <div className="rounded-xl p-4" style={CARD}>
        <div className="flex flex-wrap items-center gap-3">
          <Filter className="w-4 h-4 text-gray-500 shrink-0" />
          <div className="flex flex-wrap gap-1 items-center">
            <span className="text-xs font-bold text-gray-500 mr-1 uppercase tracking-wide">Grupo</span>
            {['all', ...groups].map(g => (
              <button
                key={g}
                onClick={() => setSelectedGroup(g)}
                className="px-2.5 py-1 rounded text-xs font-bold transition-colors"
                style={selectedGroup === g
                  ? { background: '#f5c400', color: '#000' }
                  : { background: '#2a2a2a', color: '#888' }
                }
              >
                {g === 'all' ? 'Todos' : g}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 items-center">
            <span className="text-xs font-bold text-gray-500 mr-1 uppercase tracking-wide">Rodada</span>
            <button
              onClick={() => setSelectedRound('all')}
              className="px-2.5 py-1 rounded text-xs font-bold transition-colors"
              style={selectedRound === 'all'
                ? { background: '#f5c400', color: '#000' }
                : { background: '#2a2a2a', color: '#888' }
              }
            >
              Todas
            </button>
            {rounds.map(r => (
              <button
                key={r.value}
                onClick={() => setSelectedRound(r.value)}
                className="px-2.5 py-1 rounded text-xs font-bold transition-colors"
                style={selectedRound === r.value
                  ? { background: '#f5c400', color: '#000' }
                  : { background: '#2a2a2a', color: '#888' }
                }
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl overflow-hidden shadow-xl" style={CARD}>
        <div className="px-5 py-3" style={{ background: 'linear-gradient(90deg, #f5c400, #e0af00)' }}>
          <h2 className="text-black font-black text-lg tracking-widest uppercase">Tabela da Copa 2026</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: '#222' }}>
                {[
                  { label: 'Dia', cls: 'text-left' },
                  { label: 'Data', cls: 'text-left' },
                  { label: 'Hora', cls: 'text-left' },
                  { label: 'Grupo', cls: 'text-center' },
                  { label: 'Jogo', cls: 'text-center min-w-[280px]' },
                  { label: 'Local', cls: 'text-left' },
                ].map(({ label, cls }) => (
                  <th key={label} className={`px-3 py-3 ${cls} text-xs uppercase tracking-wide font-bold text-gray-500`}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((match, idx) => {
                const isCompleted = match.status === 'completed';
                const isLive = match.status === 'live';
                const homeCode = match.home_team ? buildSigla(match.home_team.name) : '???';
                const awayCode = match.away_team ? buildSigla(match.away_team.name) : '???';
                const matchLabel = `${homeCode} x ${awayCode}`;
                const rowBg = isLive ? 'rgba(239,68,68,0.08)' : idx % 2 === 0 ? '#1a1a1a' : '#1e1e1e';

                return (
                  <tr
                    key={match.id}
                    style={{ borderTop: '1px solid #222', background: rowBg }}
                  >
                    <td className="px-3 py-3 font-bold text-gray-300 whitespace-nowrap text-sm">
                      {toDayPt(match.day_of_week)}
                    </td>
                    <td className="px-3 py-3 text-gray-400 whitespace-nowrap text-sm">
                      {formatDate(match.match_date)}
                    </td>
                    <td className="px-3 py-3 font-bold whitespace-nowrap text-sm" style={{ color: '#f5c400' }}>
                      {match.match_time}
                    </td>
                    <td className="px-3 py-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-black"
                        style={{ background: 'rgba(245,196,0,0.15)', color: '#f5c400' }}
                      >
                        {match.group_name}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center justify-center gap-2">
                        {match.home_team && (
                          <img
                            src={match.home_team.flag_url}
                            alt={match.home_team.name}
                            className="w-7 h-7 rounded-full object-cover shadow border border-gray-700"
                          />
                        )}
                        {isCompleted ? (
                          <span
                            className="inline-flex items-center justify-center w-7 h-7 rounded font-black text-black text-sm"
                            style={{ background: '#f5c400' }}
                          >
                            {match.home_score ?? '-'}
                          </span>
                        ) : null}
                        <span className="font-bold text-gray-300 text-xs tracking-wide whitespace-nowrap">
                          {matchLabel}
                        </span>
                        {isCompleted ? (
                          <span
                            className="inline-flex items-center justify-center w-7 h-7 rounded font-black text-black text-sm"
                            style={{ background: '#f5c400' }}
                          >
                            {match.away_score ?? '-'}
                          </span>
                        ) : null}
                        {match.away_team && (
                          <img
                            src={match.away_team.flag_url}
                            alt={match.away_team.name}
                            className="w-7 h-7 rounded-full object-cover shadow border border-gray-700"
                          />
                        )}
                        {isLive && (
                          <span className="ml-1 px-2 py-0.5 bg-red-500 text-white text-xs rounded font-black animate-pulse">
                            AO VIVO
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-gray-500 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3 text-gray-600 shrink-0" />
                        <span className="uppercase tracking-wide truncate max-w-[200px]">
                          {match.stadium ? `${match.stadium}${match.city ? `, ${match.city}` : ''}` : '—'}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-600 italic">
                    Nenhum jogo encontrado para os filtros selecionados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
