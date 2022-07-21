import classNames from 'classnames';
import React, { ReactElement } from 'react';

type Size = 'small' | 'medium' | 'large' | 'xlarge';

const sizeMap: Record<Size, string> = {
  small: 'w-32 h-32',
  medium: 'w-60 h-60',
  large: 'w-80 h-80',
  xlarge: 'w-[26rem] h-[26rem]',
};

interface DailyCircleProps {
  size?: Size;
  className?: string;
}

function DailyCircle({
  size = 'medium',
  className,
}: DailyCircleProps): ReactElement {
  return (
    <div
      className={classNames('rounded-full', sizeMap[size], className)}
      style={{
        background: 'linear-gradient(135deg, #E436FE, #1B3C67)',
        filter: 'drop-shadow(-32px -12px 12px rgba(198, 55, 231, 0.32))',
      }}
    />
  );
}

export default DailyCircle;