import { MapPin, Clock } from 'lucide-react';
import type { Match } from '../types';
import { TeamBadge } from './TeamBadge';

interface MatchCardProps {
  match: Match;
  compact?: boolean;
}

export function MatchCard({ match, compact = false }: MatchCardProps) {
  const isLive = match.status === 'live';
  const isCompleted = match.status === 'completed';

  const formatDate = (date: string | null) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  if (compact) {
    return (
      <div className={`p-3 rounded-lg border ${isLive ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'}`}>
        <div className="flex items-center justify-between gap-2">
          <TeamBadge team={match.home_team} size="sm" showName={true} />
          <div className="flex items-center gap-2">
            {isCompleted ? (
              <span className="font-bold text-lg">
                {match.home_score} - {match.away_score}
              </span>
            ) : isLive ? (
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded animate-pulse">LIVE</span>
            ) : (
              <span className="text-gray-500 text-sm">{match.match_time || ''}</span>
            )}
          </div>
          <TeamBadge team={match.away_team} size="sm" showName={true} />
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl ${
      isLive ? 'ring-2 ring-red-500 ring-offset-2' : ''
    }`}>
      <div className={`px-4 py-2 text-sm font-medium ${
        isLive ? 'bg-red-500 text-white' :
        isCompleted ? 'bg-gray-600 text-white' :
        'bg-emerald-600 text-white'
      }`}>
        {match.group_name && <span className="mr-2">Group {match.group_name}</span>}
        {match.round && <span className="opacity-75">Round {match.round}</span>}
        {isLive && <span className="ml-2 animate-pulse">LIVE</span>}
      </div>

      <div className="p-4 bg-white">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-right">
            <TeamBadge team={match.home_team} size="lg" />
          </div>

          <div className="flex flex-col items-center gap-1 min-w-[80px]">
            {isCompleted ? (
              <>
                <div className="text-3xl font-bold text-gray-900">
                  {match.home_score} - {match.away_score}
                </div>
                {match.has_penalties && (
                  <div className="text-xs text-gray-500">
                    Penalties: {match.home_penalties} - {match.away_penalties}
                  </div>
                )}
                {match.has_extra_time && !match.has_penalties && (
                  <div className="text-xs text-gray-500">After Extra Time</div>
                )}
              </>
            ) : (
              <div className="text-center">
                <div className="text-2xl font-light text-gray-400">vs</div>
              </div>
            )}
          </div>

          <div className="flex-1">
            <TeamBadge team={match.away_team} size="lg" />
          </div>
        </div>

        {(match.stadium || match.match_date) && (
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-sm text-gray-500">
            {match.match_date && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{match.day_of_week} {formatDate(match.match_date)}</span>
                <span className="font-medium">{match.match_time}</span>
              </div>
            )}
            {match.stadium && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{match.stadium}, {match.city}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
