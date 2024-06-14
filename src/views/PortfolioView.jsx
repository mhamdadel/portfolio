import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";
import SEOHelmet from "../utils/SEOHelmet";
import contentechViewImage from "../assets/portfolio/contentech.png";
import torjomanhViewImage from "../assets/portfolio/torjoman.png";
import adminPanalViewImage from "../assets/portfolio/admin-panal.jpg";
import { CardContent, Description, CardImage, CustomCursor, ImageCardContainer, Line, Point, StyledCard, StyledCardContainer, Title, containerVariants, itemVariants } from "../components/StyledComponentsForPortfolioView";
import {  } from "@headlessui/react";

const projectsData = [
  {
    imageUrl: contentechViewImage,
    title: "Contentech",
    description:
      "This is one of the company's websites that works and contributed to it.",
    link: "https://contentech.com/",
  },
  {
    imageUrl: torjomanhViewImage,
    title: "Torjoman",
    description:
      "This is one of the company's websites that works and contributed to it",
    link: "https://torjoman.com/",
  },
  {
    imageUrl: adminPanalViewImage,
    title: "Admin Panal",
    description: "Sorry I can't share it, it's secret =)",
    link: "#",
  },
];

export default function PortfolioView() {
  const cardContainerRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const customCursorRef = useRef(null);

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
      { threshold: .8 }
    );

    if (cardContainerRef.current) {
      const children = [...cardContainerRef.current.children];
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      if (cardContainerRef.current) {
        const children = [...cardContainerRef.current.children];
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const cursor = customCursorRef.current;
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };

  const handleMouseEnter = () => {
    customCursorRef.current.style.opacity = 1;
  };

  const handleMouseLeave = () => {
    customCursorRef.current.style.opacity = 0;
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
      <SEOHelmet
        title="Muhammed Adel | Portfolio"
        description="Welcome to the portfolio of Muhammed Adel. Discover my projects and skills in Full-Stack development and DevOps."
        keywords="Muhammed Adel, Home, Portfolio, DevOps, Full-Stack"
      />
      <CustomCursor ref={customCursorRef}>View Project</CustomCursor>
      <motion.div variants={itemVariants}>
        <ViewTitleComponent title="Portfolio" />
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
              animate={visibleItems.includes(cardContainerRef.current?.children[index]) ? "visible" : "hidden"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ImageCardContainer>
                <CardImage src={project.imageUrl} alt={project.title} />
              </ImageCardContainer>
              <CardContent>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
              </CardContent>
            </StyledCard>
          ))}
        </StyledCardContainer>
      </article>
    </motion.main>
  );
}
