import { useGroupStandings } from '../hooks/useWorldCup';
import type { Team } from '../types';

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const CARD = { background: '#1a1a1a', border: '1px solid #2a2a2a' };

function GroupTable({ groupName }: { groupName: string }) {
  const { standings, loading } = useGroupStandings(groupName);

  const sorted = [...standings].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goal_difference !== a.goal_difference) return b.goal_difference - a.goal_difference;
    return b.goals_for - a.goals_for;
  });

  return (
    <div className="rounded-xl overflow-hidden shadow-xl" style={CARD}>
      <div className="px-4 py-3" style={{ background: 'linear-gradient(90deg, #f5c400, #e0af00)' }}>
        <h3 className="text-base font-black text-black tracking-wider uppercase">Grupo {groupName}</h3>
      </div>

      {loading ? (
        <div className="py-6 text-center text-gray-500 text-sm">Carregando...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: '#222' }}>
                {['#','Seleção','PG','J','V','E','D','GP','GC','SG'].map((h, i) => (
                  <th
                    key={h}
                    className={`px-3 py-2 text-xs uppercase tracking-wide font-bold text-gray-500 ${i <= 1 ? 'text-left' : 'text-center'}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((s, idx) => {
                const pos = idx + 1;
                const qualified = pos <= 2;
                return (
                  <tr
                    key={s.id}
                    className="transition-colors"
                    style={{
                      borderTop: '1px solid #222',
                      background: qualified ? 'rgba(245,196,0,0.05)' : 'transparent',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#222')}
                    onMouseLeave={e => (e.currentTarget.style.background = qualified ? 'rgba(245,196,0,0.05)' : 'transparent')}
                  >
                    <td className="px-3 py-2.5">
                      <span
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black"
                        style={qualified
                          ? { background: '#f5c400', color: '#000' }
                          : { background: '#333', color: '#888' }
                        }
                      >
                        {pos}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">
                      <div className="flex items-center gap-2">
                        <img
                          src={s.team.flag_url}
                          alt={s.team.name}
                          className="w-7 h-7 rounded-full object-cover shadow border border-gray-700"
                        />
                        <span className="font-semibold text-gray-200 text-sm">
                          {s.team.name}
                          {s.team.is_host && <span className="ml-1 text-xs" style={{ color: '#f5c400' }}>(sede)</span>}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      <span
                        className="inline-block px-2 py-0.5 rounded font-black text-sm"
                        style={s.played > 0
                          ? { background: 'rgba(245,196,0,0.2)', color: '#f5c400' }
                          : { color: '#555' }
                        }
                      >
                        {s.points}
                      </span>
                    </td>
                    {[s.played, s.won, s.drawn, s.lost, s.goals_for, s.goals_against].map((val, i) => (
                      <td key={i} className="px-3 py-2.5 text-center text-gray-400 text-sm">{val}</td>
                    ))}
                    <td className={`px-3 py-2.5 text-center font-bold text-sm ${
                      s.goal_difference > 0 ? 'text-green-400' :
                      s.goal_difference < 0 ? 'text-red-400' : 'text-gray-500'
                    }`}>
                      {s.goal_difference > 0 ? '+' : ''}{s.goal_difference}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="px-3 py-2 text-xs text-gray-600" style={{ background: '#151515', borderTop: '1px solid #222' }}>
        PG: pontos &bull; J: jogos &bull; V: vitórias &bull; E: empates &bull; D: derrotas &bull; GP: gols pró &bull; GC: gols contra &bull; SG: saldo
      </div>
    </div>
  );
}

interface GroupStandingsGridProps {
  teams: Team[];
}

export function GroupStandingsGrid({ teams: _ }: GroupStandingsGridProps) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl p-4 flex items-center gap-3" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <div className="w-3 h-3 rounded-full" style={{ background: '#f5c400' }} />
        <span className="text-sm text-gray-400">
          As 2 primeiras seleções de cada grupo avançam para a fase eliminatória
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {GROUPS.map(group => (
          <GroupTable key={group} groupName={group} />
        ))}
      </div>
    </div>
  );
}
