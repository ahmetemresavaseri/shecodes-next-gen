interface PixelDecorationProps {
  variant?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
  animation?: 'float' | 'drift' | 'pulse' | 'pop';
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export const PixelDecoration = ({ 
  variant = 'small', 
  color = 'primary',
  animation = 'drift',
  position = {}
}: PixelDecorationProps) => {
  const sizes = {
    small: 'w-2 h-2',
    medium: 'w-3 h-3',
    large: 'w-4 h-4'
  };

  const colors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent'
  };

  const animations = {
    float: 'animate-float',
    drift: 'animate-pixel-drift',
    pulse: 'animate-pulse',
    pop: 'animate-pixel-pop'
  };

  return (
    <div 
      className={`absolute ${sizes[variant]} ${colors[color]} ${animations[animation]} opacity-30 pointer-events-none`}
      style={{
        ...position,
        boxShadow: '0 0 10px currentColor',
        imageRendering: 'pixelated'
      }}
    />
  );
};
