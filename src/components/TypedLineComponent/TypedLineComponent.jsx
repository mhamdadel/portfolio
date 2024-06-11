import { useEffect, useState } from 'react';
import './TypedLineComponent.css';

// eslint-disable-next-line react/prop-types
export default function TypedLineComponent({ textColor, typedText, animationDelay, animationDuration, inifiniteCursor = true }) {
  const [animationTime, setAnimationTime] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const duration = (animationDuration || 0) + typedText.length * 0.1;
    setAnimationTime(duration);
  }, [animationDelay, animationDuration, typedText]);

  const handleAnimationEnd = () => {
    setCursorVisible(false);
  };

  return (
    <p className="line" style={{
      animationDuration: `${animationTime}s`,
      animationDelay: `${animationDelay}s`,
      color: textColor
    }}>
      {typedText}
      {cursorVisible && (
        <span
          className="cursor"
          onAnimationEnd={handleAnimationEnd}
          style={{
            animationIterationCount: inifiniteCursor ? 'infinite' : '1', 
          }}
        >|</span>
      )}
    </p>
  );
}
