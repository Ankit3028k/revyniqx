// src/components/elements/Avatar.tsx
interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  src?: string;
  showStatus?: boolean;
  status?: 'online' | 'offline' | 'busy';
}

export const Avatar = ({ 
  name, 
  size = 'md', 
  className = '', 
  src, 
  showStatus = false,
  status = 'online'
}: AvatarProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-[10px]',
    md: 'w-10 h-10 text-xs',
    lg: 'w-12 h-12 text-sm',
  };

  const statusClasses = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    busy: 'bg-red-500',
  };

  // Get initials
  const getInitials = (name: string) => {
    if (!name) return '??';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Generate a consistent color based on name
  const colors = [
    'bg-blue-50 text-blue-700',
    'bg-green-50 text-green-700',
    'bg-purple-50 text-purple-700',
    'bg-pink-50 text-pink-700',
    'bg-orange-50 text-orange-700',
    'bg-indigo-50 text-indigo-700',
    'bg-yellow-50 text-yellow-700',
    'bg-teal-50 text-teal-700',
  ];
  
  const colorIndex = name ? name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length : 0;
  const colorClass = colors[colorIndex];

  if (src) {
    return (
      <div className="relative inline-block">
        <img
          className={`${sizeClasses[size]} rounded-full object-cover border-2 border-white ${className}`}
          src={src}
          alt={name || 'User'}
        />
        {showStatus && (
          <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${statusClasses[status]}`}></span>
        )}
      </div>
    );
  }

  return (
    <div className="relative inline-block">
      <div 
        className={`
          ${sizeClasses[size]}
          ${colorClass}
          rounded-full flex items-center justify-center font-semibold
          border-2 border-white
          ${className}
        `}
      >
        {getInitials(name)}
      </div>
      {showStatus && (
        <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${statusClasses[status]}`}></span>
      )}
    </div>
  );
};