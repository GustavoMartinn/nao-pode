import React, { useState, useEffect, useRef } from 'react';

interface TimerProps {
  duration: number; // em segundos
  isActive: boolean;
  onTimeUp?: () => void;
  onToggle: () => void;
}

export const Timer: React.FC<TimerProps> = ({ 
  duration, 
  isActive, 
  onTimeUp,
  onToggle 
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isFlashing, setIsFlashing] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Tempo acabou
            setIsFlashing(true);
            if (navigator.vibrate) {
              navigator.vibrate(100);
            }
            onTimeUp?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isActive || timeLeft === 0) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, timeLeft, onTimeUp]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const percentage = (timeLeft / duration) * 100;
  const isLowTime = timeLeft <= 10 && timeLeft > 0;

  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className={`relative w-28 h-28 transition-all duration-300 ${
          isFlashing ? 'animate-pulse' : ''
        }`}
      >
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r="50"
            fill="none"
            stroke="#374151"
            strokeWidth="8"
          />
          <circle
            cx="56"
            cy="56"
            r="50"
            fill="none"
            stroke={timeLeft === 0 ? '#EF4444' : isLowTime ? '#EAB308' : '#3B82F6'}
            strokeWidth="8"
            strokeDasharray={`${2 * Math.PI * 50}`}
            strokeDashoffset={`${2 * Math.PI * 50 * (1 - percentage / 100)}`}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className={`text-3xl font-bold ${
              timeLeft === 0 ? 'text-red-400' : isLowTime ? 'text-yellow-400' : 'text-blue-400'
            }`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
      
      <button
        onClick={onToggle}
        className="px-6 py-2 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg text-sm border border-blue-400"
      >
        {isActive ? '⏸ Pausar' : '▶ Iniciar'}
      </button>
    </div>
  );
};
