import React, { useState } from 'react';
import { Trophy, Clock, MapPin, Star } from 'lucide-react';
import type { Match } from '../types';

interface KnockoutStageProps {
  matches: Match[];
}

const stageLabels: Record<string, string> = {
  'Round of 32':    'Fase de 32 Avos',
  'Round of 16':    'Fase de 16 Avos',
  'Quarter Finals': 'Quartas de Final',
  'Semi Finals':    'Semifinais',
  'Third Place':    'Disputa do 3º Lugar',
  'Final':          'Grande Final',
};

const stageOrder = [
  'Round of 32',
  'Round of 16',
  'Quarter Finals',
  'Semi Finals',
  'Third Place',
  'Final',
];

const DAY_FULL: Record<string, string> = {
  DOM: 'Domingo', SEG: 'Segunda', TER: 'Terça',
  QUA: 'Quarta',  QUI: 'Quinta', SEX: 'Sexta', 'SÁB': 'Sábado',
  SUN: 'Domingo', MON: 'Segunda', TUE: 'Terça',
  WED: 'Quarta',  THU: 'Quinta', FRI: 'Sexta', SAT: 'Sábado',
};

function formatDatePt(dateStr: string | null) {
  if (!dateStr) return '';
  const [, month, day] = dateStr.split('-');
  return `${day}/${month}`;
}

function formatTimePt(time: string | null) {
  if (!time) return '';
  return time.replace(':', 'h').replace(/^(\d+h)00$/, '$1');
}

function dayLabel(day: string | null) {
  if (!day) return '';
  return DAY_FULL[day.toUpperCase()] ?? day;
}

// Group matches by date
function groupByDate(matches: Match[]): { key: string; dayStr: string; dateStr: string; matches: Match[] }[] {
  const map = new Map<string, { dayStr: string; dateStr: string; matches: Match[] }>();
  for (const m of matches) {
    const key = m.match_date ?? 'TBD';
    if (!map.has(key)) {
      map.set(key, {
        dayStr: dayLabel(m.day_of_week),
        dateStr: formatDatePt(m.match_date),
        matches: [],
      });
    }
    map.get(key)!.matches.push(m);
  }
  return Array.from(map.entries()).map(([key, val]) => ({ key, ...val }));
}

// ─── Stage Banner ──────────────────────────────────────────────
function StageBanner({ label }: { label: string }) {
  return (
    <div className="knockout-banner relative overflow-hidden rounded-2xl mb-6 select-none">
      {/* Stadium background */}
      <div className="knockout-banner-bg" />
      {/* Blue light overlay */}
      <div className="knockout-banner-light" />

      <div className="relative z-10 px-6 py-8 text-center">
        {/* Stars */}
        <div className="flex justify-center gap-2 mb-3">
          {[0,1,2,3,4].map(i => (
            <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#F4C430', filter: 'drop-shadow(0 0 4px #F4C430)' }} />
          ))}
        </div>

        {/* Sub-title pill */}
        <div
          className="inline-block rounded-lg px-5 py-1.5 mb-3"
          style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(244,196,48,0.4)' }}
        >
          <span className="text-white/80 text-sm font-bold tracking-[0.25em] uppercase">
            Copa do Mundo · {label}
          </span>
        </div>

        {/* Main title */}
        <div
          className="text-4xl md:text-5xl font-black tracking-wider uppercase leading-none"
          style={{
            color: '#F4C430',
            textShadow: '0 0 30px rgba(244,196,48,0.6), 0 2px 4px rgba(0,0,0,0.8)',
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

// ─── Match Card ────────────────────────────────────────────────
interface MatchCardProps {
  match: Match;
  index: number;
}

function MatchCard({ match, index }: MatchCardProps) {
  const isCompleted = match.status === 'completed';
  const isLive = match.status === 'live';

  const homeTeam = match.home_team;
  const awayTeam = match.away_team;
  const homeName = homeTeam?.name ?? 'A Definir';
  const awayName = awayTeam?.name ?? 'A Definir';
  const homeFlag = homeTeam?.flag_url;
  const awayFlag = awayTeam?.flag_url;

  return (
    <div
      className="knockout-card group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Time badge */}
      {match.match_time && (
        <div className="flex items-center mb-3">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black"
            style={{
              background: 'linear-gradient(135deg, #F4C430, #c9920a)',
              color: '#000',
              boxShadow: '0 2px 8px rgba(244,196,48,0.4)',
            }}
          >
            <Clock className="w-3 h-3" />
            <span>{formatTimePt(match.match_time)}</span>
          </div>
          {isLive && (
            <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-black bg-red-500 text-white animate-pulse">
              AO VIVO
            </span>
          )}
        </div>
      )}

      {/* Teams row */}
      <div className="flex items-center gap-3">
        {/* Home team */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="knockout-flag-ring shrink-0">
            {homeFlag ? (
              <img src={homeFlag} alt={homeName} className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold"
                style={{ background: '#2a2a2a', border: '2px dashed #444' }}>
                ?
              </div>
            )}
          </div>
          <span className="font-black text-white text-sm leading-tight truncate uppercase tracking-wide">
            {homeName}
          </span>
        </div>

        {/* Center: score or X */}
        <div className="shrink-0 flex items-center gap-1.5">
          {isCompleted ? (
            <>
              <span className="knockout-score-box">{match.home_score ?? '-'}</span>
              <span className="text-gray-400 font-black text-xs">-</span>
              <span className="knockout-score-box">{match.away_score ?? '-'}</span>
            </>
          ) : (
            <span
              className="font-black text-lg"
              style={{ color: '#F4C430', textShadow: '0 0 12px rgba(244,196,48,0.5)', minWidth: '28px', textAlign: 'center' }}
            >
              ×
            </span>
          )}
        </div>

        {/* Away team */}
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <span className="font-black text-white text-sm leading-tight truncate uppercase tracking-wide text-right">
            {awayName}
          </span>
          <div className="knockout-flag-ring shrink-0">
            {awayFlag ? (
              <img src={awayFlag} alt={awayName} className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold"
                style={{ background: '#2a2a2a', border: '2px dashed #444' }}>
                ?
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Penalties */}
      {isCompleted && match.has_penalties && (
        <div className="mt-2 text-center text-xs font-bold text-amber-400">
          Pên: {match.home_penalties} – {match.away_penalties}
        </div>
      )}

      {/* Venue */}
      {(match.stadium || match.city) && (
        <div className="mt-2.5 flex items-center justify-center gap-1 text-gray-500 text-xs">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="truncate">
            {[match.stadium, match.city].filter(Boolean).join(' · ')}
          </span>
        </div>
      )}

      {/* Winner */}
      {isCompleted && match.winner && (
        <div className="mt-2 text-center text-xs font-black uppercase tracking-wider" style={{ color: '#F4C430' }}>
          Classificado: {match.winner.name}
        </div>
      )}
    </div>
  );
}

// ─── Date Group Header ────────────────────────────────────────
function DateHeader({ dayStr, dateStr }: { dayStr: string; dateStr: string }) {
  return (
    <div className="flex items-center gap-4 my-5">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(244,196,48,0.3))' }} />
      <div
        className="px-5 py-2 rounded-full text-sm font-black tracking-wider"
        style={{
          background: 'rgba(244,196,48,0.12)',
          border: '1px solid rgba(244,196,48,0.35)',
          color: '#F4C430',
        }}
      >
        {dayStr}{dateStr ? `, ${dateStr}` : ''}
      </div>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(244,196,48,0.3), transparent)' }} />
    </div>
  );
}

// ─── Stage Section ────────────────────────────────────────────
interface StageSectionProps {
  stage: string;
  stageMatches: Match[];
}

function StageSection({ stage, stageMatches }: StageSectionProps) {
  const label = stageLabels[stage] || stage;
  const byDate = groupByDate(stageMatches);
  let globalIndex = 0;

  return (
    <section className="knockout-section">
      <StageBanner label={label} />

      <div className="space-y-1">
        {byDate.map(({ key, dayStr, dateStr, matches: dayMatches }) => (
          <div key={key}>
            <DateHeader dayStr={dayStr} dateStr={dateStr} />
            <div className="space-y-2">
              {dayMatches.map((match) => {
                const idx = globalIndex++;
                return <MatchCard key={match.id} match={match} index={idx} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Champion Banner ──────────────────────────────────────────
function ChampionBanner({ champion }: { champion: NonNullable<Match['winner']> }) {
  return (
    <div
      className="rounded-2xl p-8 text-center shadow-2xl mb-10"
      style={{
        background: 'linear-gradient(135deg, #b7950b 0%, #F4C430 50%, #b7950b 100%)',
        boxShadow: '0 0 60px rgba(244,196,48,0.4)',
      }}
    >
      <div className="flex items-center justify-center gap-6">
        <Trophy className="w-14 h-14 text-black drop-shadow-lg" />
        <div>
          <p className="text-black/70 text-sm font-bold uppercase tracking-widest mb-1">
            Campeão do Mundo 2026
          </p>
          <div className="flex items-center justify-center gap-3">
            <img
              src={champion.flag_url}
              alt={champion.name}
              className="w-12 h-12 rounded-full shadow-lg border-2 border-white/40 object-cover"
            />
            <span className="text-black text-4xl font-black uppercase">{champion.name}</span>
          </div>
        </div>
        <Trophy className="w-14 h-14 text-black drop-shadow-lg" />
      </div>
    </div>
  );
}

// ─── Stage Navigation ─────────────────────────────────────────
interface StageNavProps {
  stages: string[];
  active: string;
  onChange: (s: string) => void;
}

function StageNav({ stages, active, onChange }: StageNavProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
      {stages.map(s => {
        const isActive = s === active;
        return (
          <button
            key={s}
            onClick={() => onChange(s)}
            className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-black tracking-wide transition-all duration-200"
            style={
              isActive
                ? {
                    background: 'linear-gradient(135deg, #F4C430, #c9920a)',
                    color: '#000',
                    boxShadow: '0 4px 16px rgba(244,196,48,0.35)',
                    transform: 'scale(1.04)',
                  }
                : {
                    background: 'rgba(255,255,255,0.05)',
                    color: '#aaa',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }
            }
          >
            {stageLabels[s] ?? s}
          </button>
        );
      })}
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="text-center py-20">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
        style={{ background: 'rgba(244,196,48,0.08)', border: '2px solid rgba(244,196,48,0.2)' }}
      >
        <Trophy className="w-10 h-10" style={{ color: '#F4C430' }} />
      </div>
      <p className="text-xl font-black text-white/60">Fase Eliminatória</p>
      <p className="text-sm text-gray-600 mt-2">
        Os confrontos serão definidos ao final da fase de grupos
      </p>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────
export function KnockoutStage({ matches }: KnockoutStageProps) {
  const grouped: Record<string, Match[]> = {};
  for (const s of stageOrder) grouped[s] = [];
  matches.forEach(m => { if (grouped[m.stage]) grouped[m.stage].push(m); });

  const availableStages = stageOrder.filter(s => grouped[s]?.length > 0);
  const champion = grouped['Final']?.[0]?.winner;

  // Default to first available stage, or Round of 32
  const [activeStage, setActiveStage] = useState(() => availableStages[0] ?? 'Round of 32');

  if (matches.length === 0) return <EmptyState />;

  const stageMatches = grouped[activeStage] ?? [];

  return (
    <div>
      {champion && <ChampionBanner champion={champion} />}

      {availableStages.length > 1 && (
        <StageNav stages={availableStages} active={activeStage} onChange={setActiveStage} />
      )}

      {stageMatches.length > 0 ? (
        <StageSection stage={activeStage} stageMatches={stageMatches} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}


