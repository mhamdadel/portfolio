import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";
import SEOHelmet from "../utils/SEOHelmet";
import githubImage from "../assets/social-media/github.png";
import {
  CardContent,
  Description,
  CardImage,
  CustomCursor,
  ImageCardContainer,
  Line,
  Point,
  StyledCard,
  StyledCardContainer,
  Title,
  containerVariants,
  itemVariants,
  CustomSecretCursor,
  Keyword,
  Keywords,
  DetailItem,
  Details,
} from "../components/StyledComponentsForPortfolioView";
import styled from "styled-components";
import projectsData from "../data/projectsData";
// import Adkar from "../utils/adkar";



const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const StyledLink = styled.a`
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 640px) {
    width: 8rem;
    height: 8rem;
  }
`;
const LogoName = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 0.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${StyledLink}:hover & {
    transform: translateY(0);
  }
`;


export default function PortfolioView() {
  const cardContainerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const customCursorRef = useRef(null);
  const customSecretCursorRef = useRef(null);

  useEffect(() => {
    if (cardContainerRef.current) {
      const children = [...cardContainerRef.current.children];
      const newPoints = children.map((child, index) => {
        const cardHeight = child.offsetHeight;
        const cardTop = child.offsetTop;
        const pointPosition = cardTop + cardHeight / 2;
        return { id: index, position: pointPosition };
      });
      setPoints(newPoints);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target]);
          } else {
            setVisibleItems((prev) =>
              prev.filter((item) => item !== entry.target)
            );
          }
        });
      },
      { threshold: 0.8 }
    );

    if (cardContainerRef.current) {
      const children = [...cardContainerRef.current.children];
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      if (cardContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const children = [...cardContainerRef.current.children];
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const cursor = customCursorRef.current;
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    const secretCursor = customSecretCursorRef.current;
    secretCursor.style.left = `${e.clientX}px`;
    secretCursor.style.top = `${e.clientY}px`;
  };

  const handleMouseEnter = (isSecret = false) => {
    if (!isSecret) {
      customCursorRef.current.style.opacity = 1;
    } else {
      customSecretCursorRef.current.style.opacity = 1;
    }
  };

  const handleMouseLeave = () => {
    customCursorRef.current.style.opacity = 0;
    customSecretCursorRef.current.style.opacity = 0;
  };

  return (
    <motion.main
      className="mx-auto p-5 bg-surface text-on-surface flex flex-col"
      style={{ minHeight: "100vh", width: "80vw" }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      onMouseMove={handleMouseMove}
    >
      {/* <Adkar /> */}
      <SEOHelmet
        title="Muhammed Adel | Portfolio"
        description="Welcome to the portfolio of Muhammed Adel. Discover my projects and skills in Full-Stack development and DevOps."
        keywords="Muhammed Adel, Home, Portfolio, DevOps, Full-Stack"
      />
      <CustomCursor ref={customCursorRef}>View Project</CustomCursor>
      <CustomSecretCursor ref={customSecretCursorRef}>
        Secret
      </CustomSecretCursor>
      <motion.div variants={itemVariants}>
        <ViewTitleComponent title="Portfolio" />
        <StyledLink className="bg-white" href="https://github.com/mhamdadel">
          <StyledLogo src={githubImage} alt="GitHub" />
          <LogoName>GitHub</LogoName>
        </StyledLink>
      </motion.div>
      <article className="flex flex-col lg:flex-row my-10 justify-center relative">
        <Line>
          {points.map((point) => (
            <Point key={point.id} position={point.position} />
          ))}
        </Line>
        <StyledCardContainer
          ref={cardContainerRef}
          variants={itemVariants}
          className="w-full"
        >
          {projectsData.map((project, index) => (
            <StyledCard
              key={index}
              target="_blank"
              href={project.link}
              rel="noreferrer"
              variants={itemVariants}
              initial="hidden"
              animate={
                visibleItems.includes(cardContainerRef.current?.children[index])
                  ? "visible"
                  : "hidden"
              }
              onMouseEnter={() => handleMouseEnter(project.secret)}
              onMouseLeave={handleMouseLeave}
            >
              <ImageCardContainer>
                <CardImage src={project.imageUrl} alt={project.title} />
              </ImageCardContainer>
              <CardContent>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Details>
                  {project.details.map((detail, i) => (
                    <DetailItem key={i}>{detail}</DetailItem>
                  ))}
                </Details>
                <Keywords>
                  {project.keywords.map((keyword, i) => (
                    <Keyword key={i}>{keyword}</Keyword>
                  ))}
                </Keywords>
              </CardContent>
            </StyledCard>
          ))}
        </StyledCardContainer>
      </article>
    </motion.main>
  );
}
