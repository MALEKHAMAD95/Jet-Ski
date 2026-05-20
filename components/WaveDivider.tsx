'use client';

interface WaveDividerProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
  className?: string;
}

export function WaveDivider({
  fromColor = '#FFFFFF',
  toColor = '#E0F7FA',
  flip = false,
  className = '',
}: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-[0] ${className}`}
      style={{ background: fromColor }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-full h-[60px] sm:h-[100px] block ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <path
          d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
          fill={toColor}
          opacity="0.4"
        />
        <path
          d="M0,60 C240,120 480,20 720,60 C960,100 1200,40 1440,80 L1440,120 L0,120 Z"
          fill={toColor}
          opacity="0.7"
        />
        <path
          d="M0,80 C240,120 480,40 720,80 C960,120 1200,60 1440,100 L1440,120 L0,120 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
