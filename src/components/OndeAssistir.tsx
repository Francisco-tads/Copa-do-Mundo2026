import React, { useState } from 'react';
import { Tv, Clock, MapPin, ExternalLink } from 'lucide-react';
import type { Team } from '../types';

interface BroadcastMatch {
  time: string;
  homeCode: string;
  homeName: string;
  awayCode: string;
  awayName: string;
  channels: string[];
  featured?: boolean;
}

interface BroadcastDay {
  dayLabel: string;
  date: string;
  matches: BroadcastMatch[];
}

const GROUP_SCHEDULE: BroadcastDay[] = [
  {
    dayLabel: 'QUINTA', date: '11 DE JUNHO',
    matches: [
      { time: '16h', homeCode: 'MEX', homeName: 'México', awayCode: 'RSA', awayName: 'África do Sul', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '23h', homeCode: 'KOR', homeName: 'Coreia do Sul', awayCode: 'CZE', awayName: 'Tchéquia', channels: ['Cazé TV'] },
    ],
  },
  {
    dayLabel: 'SEXTA', date: '12 DE JUNHO',
    matches: [
      { time: '16h', homeCode: 'CAN', homeName: 'Canadá', awayCode: 'BIH', awayName: 'Bósnia e Herz.', channels: ['Cazé TV'] },
      { time: '22h', homeCode: 'USA', homeName: 'Estados Unidos', awayCode: 'PAR', awayName: 'Paraguai', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
    ],
  },
  {
    dayLabel: 'SÁBADO', date: '13 DE JUNHO',
    matches: [
      { time: '16h', homeCode: 'QAT', homeName: 'Catar', awayCode: 'SUI', awayName: 'Suíça', channels: ['Cazé TV'] },
      { time: '19h', homeCode: 'BRA', homeName: 'Brasil', awayCode: 'MAR', awayName: 'Marrocos', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '22h', homeCode: 'HAI', homeName: 'Haiti', awayCode: 'SCO', awayName: 'Escócia', channels: ['Cazé TV'] },
    ],
  },
  {
    dayLabel: 'DOMINGO', date: '14 DE JUNHO',
    matches: [
      { time: '01h', homeCode: 'AUS', homeName: 'Austrália', awayCode: 'TUR', awayName: 'Turquia', channels: ['Cazé TV', 'Globo'] },
      { time: '14h', homeCode: 'GER', homeName: 'Alemanha', awayCode: 'CUW', awayName: 'Curaçao', channels: ['Cazé TV'] },
      { time: '17h', homeCode: 'NED', homeName: 'Holanda', awayCode: 'JPN', awayName: 'Japão', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '20h', homeCode: 'CIV', homeName: 'Costa do Marfim', awayCode: 'ECU', awayName: 'Equador', channels: ['Cazé TV', 'Globo'] },
    ],
  },
  {
    dayLabel: 'SEGUNDA', date: '15 DE JUNHO',
    matches: [
      { time: '13h', homeCode: 'KSA', homeName: 'Arábia Saudita', awayCode: 'ESP', awayName: 'Espanha', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '16h', homeCode: 'BEL', homeName: 'Bélgica', awayCode: 'IRN', awayName: 'Irã', channels: ['Cazé TV'] },
      { time: '17h', homeCode: 'EGY', homeName: 'Egito', awayCode: 'NZL', awayName: 'Nova Zelândia', channels: ['Cazé TV'] },
      { time: '20h', homeCode: 'NED', homeName: 'Holanda', awayCode: 'SWE', awayName: 'Suécia', channels: ['Cazé TV', 'Globo'] },
    ],
  },
  {
    dayLabel: 'TERÇA', date: '16 DE JUNHO',
    matches: [
      { time: '16h', homeCode: 'ARG', homeName: 'Argentina', awayCode: 'AUT', awayName: 'Áustria', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '18h', homeCode: 'FRA', homeName: 'França', awayCode: 'IRQ', awayName: 'Iraque', channels: ['Cazé TV', 'Globo'] },
      { time: '19h', homeCode: 'ALG', homeName: 'Argélia', awayCode: 'JOR', awayName: 'Jordânia', channels: ['Cazé TV'] },
    ],
  },
];

const KNOCKOUT_SCHEDULE: BroadcastDay[] = [
  {
    dayLabel: 'DOMINGO', date: '28 DE JUNHO',
    matches: [
      { time: '16h', homeCode: 'RSA', homeName: 'África do Sul', awayCode: 'CAN', awayName: 'Canadá', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'] },
    ],
  },
  {
    dayLabel: 'SEGUNDA', date: '29 DE JUNHO',
    matches: [
      { time: '14h', homeCode: 'BRA', homeName: 'Brasil', awayCode: '?F2', awayName: '2º Grupo F', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '17h30', homeCode: 'GER', homeName: 'Alemanha', awayCode: '?3rd', awayName: '3º lugar (A/B/C/D/F)', channels: ['Cazé TV', 'Globo'] },
      { time: '22h', homeCode: '?F1', homeName: '1º Grupo F', awayCode: 'MAR', awayName: 'Marrocos', channels: ['Cazé TV', 'Globo'] },
    ],
  },
  {
    dayLabel: 'TERÇA', date: '30 DE JUNHO',
    matches: [
      { time: '14h', homeCode: '?E2', homeName: '2º Grupo E', awayCode: '?I2', awayName: '2º Grupo I', channels: ['Cazé TV'] },
      { time: '17h30', homeCode: '?I1', homeName: '1º Grupo I', awayCode: '?3rd2', awayName: '3º lugar (C/D/F/G/H)', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'] },
      { time: '22h', homeCode: 'MEX', homeName: 'México', awayCode: '?3rd3', awayName: '3º lugar (C/E/F/H/I)', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
    ],
  },
  {
    dayLabel: 'QUARTA', date: '1 DE JULHO',
    matches: [
      { time: '14h', homeCode: '?L1', homeName: '1º Grupo L', awayCode: '?3th4', awayName: '3º lugar (E/H/I/J/K)', channels: ['Cazé TV', 'Globo'] },
      { time: '17h30', homeCode: '?G1', homeName: '1º Grupo G', awayCode: '?3th5', awayName: '3º lugar (A/E/H/I/J)', channels: ['Cazé TV'] },
      { time: '22h', homeCode: 'USA', homeName: 'Estados Unidos', awayCode: '?3th6', awayName: '3º lugar (B/D/G/K/L)', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
    ],
  },
  {
    dayLabel: 'QUINTA', date: '2 DE JULHO',
    matches: [
      { time: '14h', homeCode: 'ARG', homeName: 'Argentina', awayCode: '?3th7', awayName: '3º lugar (B/C/G/J/L)', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '17h30', homeCode: '?H1', homeName: '1º Grupo H', awayCode: '?3th8', awayName: '3º lugar (A/B/C/D/F)', channels: ['Cazé TV', 'Globo'] },
      { time: '22h', homeCode: '?K1', homeName: '1º Grupo K', awayCode: '?J2', awayName: '2º Grupo J', channels: ['Cazé TV'] },
    ],
  },
  {
    dayLabel: 'SEXTA', date: '3 DE JULHO',
    matches: [
      { time: '14h', homeCode: '?A1', homeName: '1º Grupo A', awayCode: '?D2', awayName: '2º Grupo D', channels: ['Cazé TV', 'Globo'] },
      { time: '17h30', homeCode: '?B1', homeName: '1º Grupo B', awayCode: '?C2', awayName: '2º Grupo C', channels: ['Cazé TV'] },
    ],
  },
  {
    dayLabel: 'SÁBADO', date: '4 DE JULHO',
    matches: [
      { time: '14h', homeCode: 'FRA', homeName: 'França', awayCode: '?J2', awayName: '2º Grupo J ou 3º lugar', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '17h30', homeCode: '?D1', homeName: '1º Grupo D', awayCode: '?A2', awayName: '2º Grupo A ou K', channels: ['Cazé TV', 'Globo'] },
    ],
  },
];

const SEMIFINAL_SCHEDULE: BroadcastDay[] = [
  {
    dayLabel: 'SEXTA', date: '18 DE JULHO',
    matches: [
      { time: '19h', homeCode: '?SF1', homeName: 'Semi 1', awayCode: '?SF2', awayName: 'Semi 2', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
    ],
  },
  {
    dayLabel: 'SÁBADO', date: '19 DE JULHO',
    matches: [
      { time: '15h', homeCode: '?F1', homeName: 'Finalista 1', awayCode: '?F2', awayName: 'Finalista 2', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
    ],
  },
];

const channelStyle: Record<string, { bg: string; text: string; label: string; youtube: string }> = {
  'Cazé TV':  { bg: '#1a1a1a', text: '#ffffff', label: 'Cazé\u00a0TV',   youtube: 'https://www.youtube.com/@CazeTV' },
  'Globo':    { bg: '#1a6eb5', text: '#ffffff', label: 'ge\u00a0tv',      youtube: 'https://www.youtube.com/@getv' },
  'SBT':      { bg: '#e8bb00', text: '#000000', label: 'sbt',            youtube: 'https://www.youtube.com/SBT' },
  'NSports':  { bg: '#c41e1e', text: '#ffffff', label: 'N\u00a0SPORTS',  youtube: 'https://www.youtube.com/@NSports' },
};

function ChannelBadge({ name, showLink = false }: { name: string; showLink?: boolean }) {
  const style = channelStyle[name] || { bg: '#444', text: '#fff', label: name, youtube: '#' };
  return (
    <a
      href={style.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-150 hover:brightness-125 hover:scale-105"
      style={{ background: style.bg, color: style.text, border: '1px solid #333', textDecoration: 'none' }}
      title={`Assistir ${name} no YouTube`}
    >
      {style.label}
      {showLink && <ExternalLink className="w-2.5 h-2.5 opacity-70" />}
    </a>
  );
}

interface OndeAssistirProps {
  teams: Team[];
}

type TabId = 'grupo' | 'r32' | 'semis';

function flagOf(teams: Team[], code: string) {
  return teams.find(t => t.code === code)?.flag_url ?? null;
}

function DayBlock({ day, teams }: { day: BroadcastDay; teams: Team[] }) {
  return (
    <div className="broadcast-card mb-4">
      <div
        className="px-5 py-3 flex items-center gap-3"
        style={{ background: '#141414', borderBottom: '1px solid rgba(244,196,48,0.2)' }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: '#F4C430', boxShadow: '0 0 6px rgba(244,196,48,0.8)' }}
        />
        <span className="font-black text-sm tracking-widest uppercase" style={{ color: '#F4C430' }}>
          {day.dayLabel}
        </span>
        <span className="text-gray-400 text-sm font-semibold">— {day.date}</span>
      </div>

      <div style={{ background: '#0f0f0f' }}>
        {day.matches.map((m, i) => {
          const hf = flagOf(teams, m.homeCode);
          const af = flagOf(teams, m.awayCode);
          return (
            <div
              key={i}
              className="broadcast-match-row flex items-center gap-3 px-4 py-3"
              style={{
                borderBottom: i < day.matches.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                background: m.featured ? 'rgba(244,196,48,0.03)' : 'transparent',
              }}
            >
              {/* Hora */}
              <div
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #F4C430, #c9920a)',
                  color: '#000',
                  minWidth: '46px',
                  justifyContent: 'center',
                }}
              >
                <Clock className="w-3 h-3" />
                {m.time}
              </div>

              {/* Flag home */}
              {hf ? (
                <img src={hf} alt={m.homeName} className="w-8 h-8 rounded-full object-cover border border-gray-700 shrink-0" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-800 shrink-0 border border-dashed border-gray-600" />
              )}

              {/* Names */}
              <span className="flex-1 font-bold text-white text-sm min-w-0 truncate">
                {m.homeName}
                <span className="mx-2 text-gray-500 font-black">×</span>
                {m.awayName}
              </span>

              {/* Flag away */}
              {af ? (
                <img src={af} alt={m.awayName} className="w-8 h-8 rounded-full object-cover border border-gray-700 shrink-0" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-800 shrink-0 border border-dashed border-gray-600" />
              )}

              {/* Channels */}
              <div className="hidden sm:flex flex-wrap gap-1 justify-end shrink-0 max-w-[160px]">
                {m.channels.map(ch => <ChannelBadge key={ch} name={ch} />)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const TABS: { id: TabId; label: string; short: string }[] = [
  { id: 'grupo', label: 'Fase de Grupos', short: 'Grupos' },
  { id: 'r32',   label: 'Fase Eliminatória (32 Avos)', short: '32 Avos' },
  { id: 'semis', label: 'Semifinais & Final', short: 'Final' },
];

export function OndeAssistir({ teams }: OndeAssistirProps) {
  const [activeTab, setActiveTab] = useState<TabId>('r32');

  const scheduleMap: Record<TabId, BroadcastDay[]> = {
    grupo: GROUP_SCHEDULE,
    r32:   KNOCKOUT_SCHEDULE,
    semis: SEMIFINAL_SCHEDULE,
  };

  const currentSchedule = scheduleMap[activeTab];

  return (
    <div className="space-y-5">
      {/* Hero */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl"
        style={{ border: '2px solid rgba(244,196,48,0.5)' }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #050d1a 0%, #0a1830 40%, #050d1a 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,100,255,0.18) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 px-6 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Tv className="w-8 h-8" style={{ color: '#F4C430' }} />
                <div>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">Copa do Mundo FIFA 2026</p>
                  <h2
                    className="text-3xl font-black uppercase tracking-wide"
                    style={{ color: '#F4C430', textShadow: '0 0 20px rgba(244,196,48,0.4)' }}
                  >
                    Onde Assistir
                  </h2>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Transmissão oficial no Brasil · Horário de Brasília
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              {Object.keys(channelStyle).map(ch => <ChannelBadge key={ch} name={ch} showLink />)}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-5 overflow-x-auto scrollbar-hide">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-black tracking-wide transition-all duration-200"
                style={
                  activeTab === t.id
                    ? {
                        background: 'linear-gradient(135deg, #F4C430, #c9920a)',
                        color: '#000',
                        boxShadow: '0 4px 14px rgba(244,196,48,0.35)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.06)',
                        color: '#aaa',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }
                }
              >
                <span className="hidden sm:inline">{t.label}</span>
                <span className="sm:hidden">{t.short}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div>
        {currentSchedule.map(day => (
          <DayBlock key={day.date} day={day} teams={teams} />
        ))}
      </div>

      <p className="text-center text-xs text-gray-600 pb-2 flex items-center justify-center gap-1">
        <MapPin className="w-3 h-3" />
        Horários de Brasília. Transmissões sujeitas a alteração.
      </p>
    </div>
  );
}

