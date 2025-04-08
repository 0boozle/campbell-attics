import React from 'react';

interface TouchFriendlyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function TouchFriendlyButton({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false
}: TouchFriendlyButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`min-h-[44px] min-w-[44px] touch-manipulation ${className}`}
      style={{ touchAction: 'manipulation' }}
    >
      {children}
    </button>
  );
}