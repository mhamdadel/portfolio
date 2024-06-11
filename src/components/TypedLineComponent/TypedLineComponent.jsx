import { useEffect, useState } from "react";
import "./TypedLineComponent.css";

// eslint-disable-next-line react/prop-types
export default function TypedLineComponent({
  textColor,
  typedText,
  animationDelay,
  animationDuration,
  infiniteCursor,
}) {
  const [animationTime, setAnimationTime] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const duration = (animationDuration || 0) + typedText.length * 0.03;
    setAnimationTime(duration);
  }, [animationDelay, animationDuration, typedText]);

  const handleAnimationEnd = () => {
    setCursorVisible(false);
  };

  return (
    <div className="typed-line-coponent">
      <p
        className="line"
        style={{
          animationDuration: `${animationTime}s`,
          animationDelay: `${animationDelay}s`,
          color: textColor,
        }}
      >
        {typedText}
        {cursorVisible && (
          <span
            className="cursor"
            onAnimationEnd={handleAnimationEnd}
            style={{
              animationIterationCount: infiniteCursor ? "infinite" : "1",
            }}
          >
            |
          </span>
        )}
      </p>
    </div>
  );
}
