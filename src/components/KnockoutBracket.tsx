import { Trophy } from 'lucide-react';
import type { Match } from '../types';

interface KnockoutStageProps {
  matches: Match[];
}

const stageLabels: Record<string, string> = {
  'Round of 32':     'Oitavas',
  'Round of 16':     'Décimas de Final',
  'Quarter Finals':  'Quartas de Final',
  'Semi Finals':     'Semifinais',
  'Third Place':     'Disputa do 3° Lugar',
  'Final':           'Grande Final',
};

const stageOrder = ['Round of 32','Round of 16','Quarter Finals','Semi Finals','Third Place','Final'];

const DAY_PT: Record<string, string> = {
  MON: 'SEG', TUE: 'TER', WED: 'QUA', THU: 'QUI',
  FRI: 'SEX', SAT: 'SÁB', SUN: 'DOM',
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

function formatDate(dateStr: string | null) {
  if (!dateStr) return '';
  const [, month, day] = dateStr.split('-');
  return `${day}/${month}`;
}

interface KnockoutCardProps {
  match: Match;
  index: number;
  stageLabel: string;
}

function KnockoutCard({ match, index, stageLabel }: KnockoutCardProps) {
  const isCompleted = match.status === 'completed';
  const isLive = match.status === 'live';

  const homeCode = match.home_team ? buildSigla(match.home_team.name) : '???';
  const awayCode = match.away_team ? buildSigla(match.away_team.name) : '???';
  const matchLabel = `${homeCode} x ${awayCode}`;

  return (
    <div
      className="rounded-xl overflow-hidden shadow-xl"
      style={{
        background: '#1a1a1a',
        border: isLive ? '2px solid #ef4444' : '1px solid #2a2a2a',
      }}
    >
      {/* Title bar */}
      <div className="px-4 py-2 text-center" style={{ background: '#222', borderBottom: '1px solid #333' }}>
        <span className="font-black text-gray-200">{stageLabel} {index + 1}</span>
      </div>

      <div className="px-4 pt-3 pb-1">
        {/* Date/time badges */}
        <div className="flex items-center gap-1.5 mb-3 flex-wrap">
          {match.day_of_week && (
            <span className="px-2 py-0.5 rounded text-xs font-black text-white" style={{ background: '#8b0000' }}>
              {toDayPt(match.day_of_week)}
            </span>
          )}
          {match.match_date && (
            <span className="text-gray-400 font-medium text-xs">{formatDate(match.match_date)}</span>
          )}
          {match.match_time && (
            <span className="px-2 py-0.5 rounded text-xs font-black text-white" style={{ background: '#8b0000' }}>
              {match.match_time}
            </span>
          )}
          {isLive && (
            <span className="px-2 py-0.5 rounded text-xs font-black bg-red-500 text-white animate-pulse">AO VIVO</span>
          )}
        </div>

        {/* Match row: flag | score | label | score | flag */}
        <div className="flex items-center gap-2 mb-3">
          {match.home_team ? (
            <img src={match.home_team.flag_url} alt={match.home_team.name}
              className="w-8 h-8 rounded-full object-cover border-2 border-gray-700 shadow shrink-0" />
          ) : (
            <div className="w-8 h-8 rounded-full shrink-0" style={{ background: '#333', border: '2px dashed #555' }} />
          )}
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded font-black text-sm shrink-0"
            style={isCompleted
              ? { background: '#f5c400', color: '#000' }
              : { background: '#2a2a2a', color: '#555' }
            }
          >
            {isCompleted ? (match.home_score ?? '-') : '-'}
          </span>
          <span className="flex-1 text-center text-xs font-bold text-gray-400 tracking-wide">
            {match.home_team || match.away_team ? matchLabel : 'A DEFINIR'}
          </span>
          <span
            className="inline-flex items-center justify-center w-7 h-7 rounded font-black text-sm shrink-0"
            style={isCompleted
              ? { background: '#f5c400', color: '#000' }
              : { background: '#2a2a2a', color: '#555' }
            }
          >
            {isCompleted ? (match.away_score ?? '-') : '-'}
          </span>
          {match.away_team ? (
            <img src={match.away_team.flag_url} alt={match.away_team.name}
              className="w-8 h-8 rounded-full object-cover border-2 border-gray-700 shadow shrink-0" />
          ) : (
            <div className="w-8 h-8 rounded-full shrink-0" style={{ background: '#333', border: '2px dashed #555' }} />
          )}
        </div>

        {match.stadium && (
          <p className="text-center text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#888' }}>
            {match.stadium}
          </p>
        )}
      </div>

      {/* Details */}
      <div className="px-4 pb-3 text-xs space-y-0.5" style={{ borderTop: '1px solid #222', paddingTop: '8px' }}>
        <div className="flex justify-between">
          <span className="text-gray-600">Prorrogação:</span>
          <span style={{ color: match.has_extra_time ? '#4ade80' : '#888' }}>
            {match.has_extra_time ? 'Sim' : 'Não'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Pênaltis:</span>
          <span style={{ color: match.has_penalties ? '#4ade80' : '#888' }}>
            {match.has_penalties ? 'Sim' : 'Não'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Placar dos Pênaltis:</span>
          <span className="font-bold text-gray-300">
            {match.has_penalties ? `${match.home_penalties}-${match.away_penalties}` : '—'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Classificação:</span>
          <span className="font-bold" style={{ color: '#f5c400' }}>
            {match.winner?.name || (isCompleted ? '—' : '')}
          </span>
        </div>
      </div>
    </div>
  );
}

export function KnockoutStage({ matches }: KnockoutStageProps) {
  const grouped: Record<string, Match[]> = {};
  for (const s of stageOrder) grouped[s] = [];
  matches.forEach(m => { if (grouped[m.stage]) grouped[m.stage].push(m); });

  const champion = grouped['Final']?.[0]?.winner;

  return (
    <div className="space-y-10">
      {champion && (
        <div
          className="rounded-2xl p-6 shadow-2xl text-center"
          style={{ background: 'linear-gradient(135deg, #b7950b, #f5c400, #b7950b)' }}
        >
          <div className="flex items-center justify-center gap-6">
            <Trophy className="w-12 h-12 text-black drop-shadow-lg" />
            <div>
              <p className="text-black/70 text-base font-bold">Campeão da Copa do Mundo 2026</p>
              <div className="flex items-center justify-center gap-3 mt-1">
                <img src={champion.flag_url} alt={champion.name} className="w-10 h-10 rounded-full shadow-lg border-2 border-white object-cover" />
                <span className="text-black text-3xl font-black">{champion.name}</span>
              </div>
            </div>
            <Trophy className="w-12 h-12 text-black drop-shadow-lg" />
          </div>
        </div>
      )}

      {stageOrder.map(stage => {
        const stageMatches = grouped[stage];
        if (!stageMatches || stageMatches.length === 0) return null;
        const label = stageLabels[stage] || stage;
        const isFinal = stage === 'Final' || stage === 'Third Place';

        return (
          <section key={stage}>
            <div className="mb-6">
              <h2 className="text-2xl font-black text-center tracking-wide" style={{ color: '#f5c400' }}>
                {label}
              </h2>
              <div className="w-24 h-1 mx-auto mt-2 rounded" style={{ background: '#f5c400' }} />
            </div>
            <div className={`grid gap-4 ${
              isFinal
                ? 'grid-cols-1 max-w-sm mx-auto'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}>
              {stageMatches.map((match, i) => (
                <KnockoutCard key={match.id} match={match} index={i} stageLabel={label} />
              ))}
            </div>
          </section>
        );
      })}

      {matches.length === 0 && (
        <div className="text-center py-16 text-gray-600">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-gray-700" />
          <p className="text-lg font-bold text-gray-500">Fase eliminatória ainda não iniciou</p>
          <p className="text-sm mt-1 text-gray-600">Os confrontos serão definidos após a fase de grupos</p>
        </div>
      )}
    </div>
  );
}
