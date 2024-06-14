import { motion } from "framer-motion";
import styled from "styled-components";

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.3 },
    },
  };
  
  export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  export const StyledCardContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  `;
  
  export const StyledCard = styled(motion.a)`
    width: 45%;
    background-color: var(--surface-color);
    border-radius: 8px;
    box-shadow: 0px 2px 8px var(--primary-color);
    margin-bottom: 1rem;
  
    &:nth-child(even) {
      justify-self: end;
    }
    @media (max-width: 640px) {
      width: 90%;
      justify-self: center;
      &:nth-child(even) {
        justify-self: center;
      }
    }
  
    &.sticky {
      top: 0;
      width: 40%;
      display: flex;
      align-items: center;
      height: 95px;
      padding: 0.5rem;
      background-color: var(--surface-color);
      box-shadow: 0px 2px 8px var(--primary-color);
      border-radius: 8px;
      transition: all 0.3s ease-in-out;
      z-index: 10;
  
      div {
        height: 100%;
        width: auto;
      }
  
      img {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        margin-right: 1rem;
      }
  
      h2 {
        font-size: 2rem;
        margin-bottom: 0;
      }
  
      p {
        display: none;
      }
    }
  
    &:hover {
      cursor: none;
    }
  `;
  
  export const CustomCursor = styled.div`
    width: 50px;
    height: 50px;
    font-size: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 2px solid var(--primary-variant-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    pointer-events: none;
    z-index: 1000;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
    opacity: 0;
  `;
  
  export const ImageCardContainer = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
  `;
  
  export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    &:hover {
      transform: scale(1.5);
    }
  `;
  
  export const CardContent = styled.div`
    padding: 1rem;
  `;
  
  export const Title = styled.h2`
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  `;
  
  export const Description = styled.p`
    color: var(--on-surface-color);
  `;
  
  export const Line = styled.div`
    width: 2px;
    height: 100%;
    background-color: var(--on-surface-color);
    top: 0;
    position: absolute;
  `;
  
  export const Point = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--primary-color);
    position: absolute;
    top: ${(props) => props.position}px;
    left: 50%;
    transform: translateX(-50%);
  `;