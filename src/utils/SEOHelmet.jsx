import { Helmet } from "react-helmet-async";
import personalImage from "../assets/personal-photo.png";
import logoImage from "../assets/logo.svg";

const SEOHelmet = ({ title, description, keywords  }) => {
  const defaultTitle = "Muhammed Adel | Portfolio";
  const defaultDescription = "Portfolio of Muhammed Adel, a Senior DevOps Engineer specializing in Full-Stack development, DevOps, and more. Discover projects, skills, and experience.";
  const defaultKeywords = "Muhammed Adel, Portfolio, DevOps Engineer, Full-Stack Developer, Java, Spring Boot, Node.js, Angular, React, PHP, Laravel, Software Engineer";
  const defaultUrl = "https://github.com/mhamdadel/index";

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Muhammed Adel" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={defaultUrl} />
      <meta property="og:image" content={personalImage} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={personalImage} />
      
      {/* Link Tags */}
      <link rel="canonical" href={defaultUrl} />
      <link rel="icon" href={logoImage} />
      <link rel="icon" type="image/svg" sizes="32x32" href={logoImage} />
      <link rel="icon" type="image/svg" sizes="16x16" href={logoImage} />
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
    </Helmet>
  );
};

export default SEOHelmet;
