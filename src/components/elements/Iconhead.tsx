interface IconheadProps {
  icon?: string;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | string;
}

const fontSizeMap = {
  'xs': '0.75rem',    // 12px
  'sm': '0.875rem',   // 14px
  'base': '1rem',     // 16px
  'lg': '1.125rem',   // 18px
  'xl': '1.25rem',    // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem'    // 60px
};

export default function Iconhead({ 
  icon = '', 
  text = 'Heading Text',
  className = '',
  style = {},
  fontSize = '2xl'
}: IconheadProps) {
  const fontSizeValue = typeof fontSize === 'string' && fontSizeMap[fontSize as keyof typeof fontSizeMap] 
    ? fontSizeMap[fontSize as keyof typeof fontSizeMap]
    : typeof fontSize === 'string' && /^\d+(px|rem|em|%)$/.test(fontSize)
      ? fontSize
      : '1.5rem'; // default to 2xl (24px)
  
  return (
    <p 
      className={`font-bold primary2 ${className}`}
      style={{
        fontSize: fontSizeValue,
        ...style
      }}
    >
      {icon && <i className={`${icon} mr-2`}></i>}
      <span>{text}</span>
    </p>
  )
}