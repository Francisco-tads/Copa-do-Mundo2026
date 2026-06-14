import { Tv } from 'lucide-react';
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

const SCHEDULE: BroadcastDay[] = [
  {
    dayLabel: 'QUINTA',
    date: '11 DE JUNHO',
    matches: [
      { time: '16h00', homeCode: 'MEX', homeName: 'México', awayCode: 'RSA', awayName: 'África do Sul', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '23h00', homeCode: 'KOR', homeName: 'Coreia do Sul', awayCode: 'CZE', awayName: 'Tchéquia', channels: ['Cazé TV'] },
    ],
  },
  {
    dayLabel: 'SEXTA',
    date: '12 DE JUNHO',
    matches: [
      { time: '16h00', homeCode: 'CAN', homeName: 'Canadá', awayCode: 'BIH', awayName: 'Bósnia e Herz.', channels: ['Cazé TV'] },
      { time: '22h00', homeCode: 'USA', homeName: 'Estados Unidos', awayCode: 'PAR', awayName: 'Paraguai', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
    ],
  },
  {
    dayLabel: 'SÁBADO',
    date: '13 DE JUNHO',
    matches: [
      { time: '16h00', homeCode: 'QAT', homeName: 'Catar', awayCode: 'SUI', awayName: 'Suíça', channels: ['Cazé TV'] },
      { time: '19h00', homeCode: 'BRA', homeName: 'Brasil', awayCode: 'MAR', awayName: 'Marrocos', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '22h00', homeCode: 'HAI', homeName: 'Haiti', awayCode: 'SCO', awayName: 'Escócia', channels: ['Cazé TV'] },
    ],
  },
  {
    dayLabel: 'DOMINGO',
    date: '14 DE JUNHO',
    matches: [
      { time: '01h00', homeCode: 'AUS', homeName: 'Austrália', awayCode: 'TUR', awayName: 'Turquia', channels: ['Cazé TV', 'Globo'] },
      { time: '14h00', homeCode: 'GER', homeName: 'Alemanha', awayCode: 'CUW', awayName: 'Curaçao', channels: ['Cazé TV'] },
      { time: '17h00', homeCode: 'NED', homeName: 'Holanda', awayCode: 'JPN', awayName: 'Japão', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '20h00', homeCode: 'CIV', homeName: 'Costa do Marfim', awayCode: 'ECU', awayName: 'Equador', channels: ['Cazé TV', 'Globo'] },
      { time: '23h00', homeCode: 'SWE', homeName: 'Suécia', awayCode: 'TUN', awayName: 'Tunísia', channels: ['Cazé TV', 'Globo'] },
    ],
  },
  {
    dayLabel: 'SEGUNDA',
    date: '15 DE JUNHO',
    matches: [
      { time: '16h00', homeCode: 'BEL', homeName: 'Bélgica', awayCode: 'IRN', awayName: 'Irã', channels: ['Cazé TV'] },
      { time: '17h00', homeCode: 'EGY', homeName: 'Egito', awayCode: 'NZL', awayName: 'Nova Zelândia', channels: ['Cazé TV'] },
      { time: '13h00', homeCode: 'KSA', homeName: 'Arábia Saudita', awayCode: 'ESP', awayName: 'Espanha', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '20h00', homeCode: 'NED', homeName: 'Holanda', awayCode: 'SWE', awayName: 'Suécia', channels: ['Cazé TV', 'Globo'] },
    ],
  },
  {
    dayLabel: 'TERÇA',
    date: '16 DE JUNHO',
    matches: [
      { time: '16h00', homeCode: 'ARG', homeName: 'Argentina', awayCode: 'AUT', awayName: 'Áustria', channels: ['Cazé TV', 'Globo', 'SBT', 'NSports'], featured: true },
      { time: '18h00', homeCode: 'FRA', homeName: 'França', awayCode: 'IRQ', awayName: 'Iraque', channels: ['Cazé TV', 'Globo'] },
      { time: '19h00', homeCode: 'ALG', homeName: 'Argélia', awayCode: 'JOR', awayName: 'Jordânia', channels: ['Cazé TV'] },
    ],
  },
];

const channelStyle: Record<string, { bg: string; text: string; label: string }> = {
  'Cazé TV':  { bg: '#1a1a1a', text: '#ffffff', label: 'Cazé\u00a0TV' },
  'Globo':    { bg: '#1a6eb5', text: '#ffffff', label: 'Globo' },
  'SBT':      { bg: '#e8bb00', text: '#000000', label: 'sbt' },
  'NSports':  { bg: '#c41e1e', text: '#ffffff', label: 'N\u00a0SPORTS' },
};

function ChannelBadge({ name }: { name: string }) {
  const style = channelStyle[name] || { bg: '#444', text: '#fff', label: name };
  return (
    <span
      className="inline-flex items-center px-2 py-1 rounded text-xs font-bold tracking-wide whitespace-nowrap"
      style={{ background: style.bg, color: style.text, border: '1px solid #444' }}
    >
      {style.label}
    </span>
  );
}

interface OndeAssistirProps {
  teams: Team[];
}

export function OndeAssistir({ teams }: OndeAssistirProps) {
  const flagOf = (code: string) => {
    const t = teams.find(t => t.code === code);
    return t?.flag_url || null;
  };

  return (
    <div className="space-y-6">
      {/* Hero banner */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #111111 0%, #1c1c1c 60%, #111111 100%)',
          border: '2px solid #f5c400',
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-6">
          <div>
            <div className="flex items-end gap-3">
              <span className="text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
                ONDE
              </span>
              <span className="text-5xl md:text-6xl font-black tracking-tight leading-none" style={{ color: '#f5c400' }}>
                ASSISTIR
              </span>
              <Tv className="w-10 h-10 mb-1" style={{ color: '#f5c400' }} />
            </div>
            <p className="text-gray-400 mt-2 text-sm tracking-widest uppercase">
              Transmissão da Copa do Mundo 2026 no Brasil
            </p>
          </div>
          <div
            className="rounded-xl px-5 py-3 text-center"
            style={{ background: '#f5c400' }}
          >
            <p className="text-black font-black text-xl leading-tight">COPA DO MUNDO</p>
            <p className="text-black font-bold text-sm tracking-wider">FIFA 2026</p>
          </div>
        </div>

        <div
          className="px-6 py-3 flex flex-wrap gap-3 items-center"
          style={{ borderTop: '1px solid #333' }}
        >
          <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Canais:</span>
          {Object.keys(channelStyle).map(ch => <ChannelBadge key={ch} name={ch} />)}
        </div>
      </div>

      {/* Schedule by day */}
      {SCHEDULE.map((day) => (
        <div key={day.date} className="rounded-xl overflow-hidden shadow-xl" style={{ border: '1px solid #2a2a2a' }}>
          <div
            className="px-5 py-3"
            style={{ background: '#1a1a1a', borderBottom: '2px solid #f5c400' }}
          >
            <h2 className="font-black text-lg tracking-widest" style={{ color: '#f5c400' }}>
              {day.dayLabel} – {day.date}
            </h2>
          </div>

          <div style={{ background: '#111111' }}>
            {day.matches.map((m, i) => {
              const homeFlag = flagOf(m.homeCode);
              const awayFlag = flagOf(m.awayCode);
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-4 px-4 py-3 transition-colors"
                  style={{
                    borderBottom: i < day.matches.length - 1 ? '1px solid #222' : 'none',
                    background: m.featured ? 'rgba(245,196,0,0.04)' : 'transparent',
                  }}
                >
                  {/* Hora */}
                  <div
                    className="font-black text-sm md:text-base whitespace-nowrap w-14 shrink-0"
                    style={{ color: '#f5c400' }}
                  >
                    {m.time}
                  </div>

                  {/* Home flag */}
                  {homeFlag ? (
                    <img src={homeFlag} alt={m.homeName} className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover shadow border-2 border-gray-700 shrink-0" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-700 shrink-0" />
                  )}

                  {/* Match name */}
                  <span className="font-bold text-white text-sm md:text-base flex-1 min-w-0">
                    {m.homeName} <span className="text-gray-400">x</span> {m.awayName}
                  </span>

                  {/* Away flag */}
                  {awayFlag ? (
                    <img src={awayFlag} alt={m.awayName} className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover shadow border-2 border-gray-700 shrink-0" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-700 shrink-0" />
                  )}

                  {/* Channels */}
                  <div className="flex flex-wrap gap-1.5 justify-end shrink-0 max-w-[180px] md:max-w-none">
                    {m.channels.map(ch => <ChannelBadge key={ch} name={ch} />)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <p className="text-center text-xs text-gray-600 pb-2">
        * Transmissões sujeitas a alteração. Verifique a programação dos canais.
      </p>
    </div>
  );
}
