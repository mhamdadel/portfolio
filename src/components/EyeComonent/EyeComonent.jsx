import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const EyeContainer = styled.div`
  width: 150px;
  height: 150px;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
  background-color: white;
  box-shadow: inset 0 0 60px 0 rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  position: absolute;
  perspective: 500px;
  overflow: hidden;
`;

const irisAnim = keyframes`
  0%, 100% {
    transform: rotateX(-10deg) rotateY(15deg) translateZ(68px) scale(0.6);
  }
  10% {
    transform: rotateX(-50deg) rotateY(15deg) translateZ(68px) scale(0.6);
  }
  30% {
    transform: rotateX(-30deg) rotateY(-5deg) translateZ(68px) scale(0.6);
  }
  45% {
    transform: rotateX(-20deg) rotateY(-15deg) translateZ(68px) scale(0.6);
  }
  55%, 60% {
    transform: rotateX(0deg) rotateY(0deg) translateZ(68px) scale(0.6);
  }
  90% {
    transform: rotateX(30deg) rotateY(5deg) translateZ(68px) scale(0.6);
  }
`;

const Iris = styled.div`
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  position: absolute;
  transform: rotateX(-50deg) rotateY(15deg) translateZ(68px) scale(0.6);
  background: radial-gradient(ellipse at center, #5a4d2e 13%, #d4b886 15%, #d4b886 15%, #c19a6b 25%, #bf8a47 44%, #a9753b 51%, #fffcf9 53%, rgba(255,252,249,0.4) 56%, transparent 71%);
  border-radius: 100%;
  &.anim {
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-name: ${irisAnim};
  }
`;

const EyeComponent = () => {
  const irisRef = useRef(null);
  const eyeRef = useRef(null);
  const [eyeCenter, setEyeCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateEyeCenter = () => {
      const eye = eyeRef.current;
      const size = eye.clientWidth;
      setEyeCenter({
        x: eye.offsetLeft + size / 2,
        y: eye.offsetTop + size / 2
      });
    };

    window.addEventListener('resize', updateEyeCenter);
    updateEyeCenter();

    return () => {
      window.removeEventListener('resize', updateEyeCenter);
    };
  }, []);

  useEffect(() => {
    const handleMouseOut = () => {
      irisRef.current.classList.add('anim');
    };

    const handleMouseMove = (e) => {
      const iris = irisRef.current;
      iris.classList.remove('anim');

      const m = {
        x: e.clientX - eyeCenter.x,
        y: e.clientY - eyeCenter.y
      };

      const dist = Math.min(60, Math.max(-60, Math.sqrt(m.x ** 2 + m.y ** 2) / 6));
      const dir = Math.atan2(m.x, m.y);
      const rx = dist * -Math.cos(dir);
      const ry = dist * Math.sin(dir);

      iris.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(68px) scale(0.6)`;
    };

    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [eyeCenter]);

  return (
    <EyeContainer ref={eyeRef}>
      <Iris ref={irisRef} className="anim" />
    </EyeContainer>
  );
};

export default EyeComponent;
