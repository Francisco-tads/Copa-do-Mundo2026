import { Trophy, Calendar, BarChart3, TableProperties, Tv } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs = [
    { id: 'overview',   label: 'Visão Geral',       icon: TableProperties },
    { id: 'groups',     label: 'Grupos',             icon: BarChart3 },
    { id: 'matches',    label: 'Tabela de Jogos',    icon: Calendar },
    { id: 'knockout',   label: 'Fase Eliminatória',  icon: Trophy },
    { id: 'broadcast',  label: 'Onde Assistir',      icon: Tv },
  ];

  return (
    <header className="sticky top-0 z-50" style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)', borderBottom: '3px solid #f5c400' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: '#f5c400' }}>
              <Trophy className="w-7 h-7 text-black" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight" style={{ color: '#f5c400' }}>
                Copa do Mundo FIFA 2026
              </h1>
              <p className="text-gray-400 text-sm">
                EUA &bull; Canadá &bull; México &bull; 11 Jun – 19 Jul 2026
              </p>
            </div>
          </div>
        </div>

        <nav className="flex gap-1 pb-3 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                }`}
                style={isActive ? { background: '#f5c400' } : { background: 'transparent' }}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
