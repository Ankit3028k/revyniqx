interface StatsCardProps {
  count: string;
  label: string;
  trend: string;
  hoverColor?: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
  iconColor?: string;
  trendColor?: string;
}

export const StatsCard = ({ 
  count, 
  label, 
  trend, 
  hoverColor = 'orange',
  icon,
  iconBgColor = 'bg-blue-50',
  iconColor = 'text-blue-500',
  trendColor = 'text-green-500'
}: StatsCardProps) => {
  // Default icon if none provided
  const defaultIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const defaultTrendIcon = (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="w-4 h-4 mr-1"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );

  return (
    <div className="stats-card-component">
      <div className="stats-card-content">
        <div className={`stats-card-icon-container ${iconBgColor}`}>
          <div className={iconColor}>
            {icon || defaultIcon}
          </div>
        </div>
        <div className={`stats-card-trend ${trendColor}`}>
          {defaultTrendIcon}
          <span>+{trend}%</span>
        </div>
      </div>
      <div className="stats-card-info">
        <p className="stats-card-count">
          {count}
        </p>
        <p className="stats-card-label">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;