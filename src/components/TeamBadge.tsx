import type { Team } from '../types';

interface TeamBadgeProps {
  team: Team | null;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
}

export function TeamBadge({ team, size = 'md', showName = true }: TeamBadgeProps) {
  if (!team) {
    return (
      <div className={`flex items-center gap-2 ${size === 'lg' ? 'gap-3' : 'gap-2'}`}>
        <div className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-gray-200 border-2 border-dashed border-gray-300`} />
        {showName && <span className="text-gray-400 italic">TBD</span>}
      </div>
    );
  }

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className={`flex items-center gap-2 ${size === 'lg' ? 'gap-3' : 'gap-2'}`}>
      <img
        src={team.flag_url}
        alt={team.name}
        className={`${sizeClasses[size]} rounded-full object-cover shadow-md border-2 border-white`}
      />
      {showName && (
        <span className={`font-medium text-gray-800 ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'}`}>
          {team.code}
        </span>
      )}
    </div>
  );
}
