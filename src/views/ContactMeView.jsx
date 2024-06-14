import styled from "styled-components";
import ViewTitleComponent from "../components/ViewTitleComponent/ViewTitleComponent";
import devToImage from "../assets/social-media/dev.to.png";
import linkedInImage from "../assets/social-media/linkedin.png";
import githubImage from "../assets/social-media/github.png";
import phoneImage from "../assets/social-media/phone.png";
import gmailImage from "../assets/social-media/gmail.png";
import whatsappImage from "../assets/social-media/whatsapp.png";
import EyeComponent from "../components/EyeComonent/EyeComonent";

const StyledContainer = styled.div`
  color: var(--on-surface-color);
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1rem;
  justify-items: center;
  align-items: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    padding: 2rem;
  }
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

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
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

const CenteredEyeComponent = styled.div`
  grid-column: span 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 640px) {
    grid-column: span 3;
  }
`;

const ContactMeView = () => {
  return (
    <StyledContainer className="bg-surface w-10/12 mx-auto">
      <div className="mx-auto max-w-screen-lg">
        <ViewTitleComponent title="Contact Me" />
      </div>

      <StyledGrid>
        <StyledLink href="https://dev.to/muhammedadel">
          <StyledLogo src={devToImage} alt="Dev.to" />
          <LogoName>Dev.to</LogoName>
        </StyledLink>

        <StyledLink href="https://www.linkedin.com/in/muhammed-elshall/">
          <StyledLogo src={linkedInImage} alt="LinkedIn" />
          <LogoName>LinkedIn</LogoName>
        </StyledLink>

        <StyledLink href="https://github.com/mhamdadel">
          <StyledLogo src={githubImage} alt="GitHub" />
          <LogoName>GitHub</LogoName>
        </StyledLink>

        <CenteredEyeComponent>
          <EyeComponent />
        </CenteredEyeComponent>
        
        <StyledLink href="mailto://muhammed.adel.elshall@gmail.com">
          <StyledLogo src={gmailImage} alt="Gmail" />
          <LogoName>Gmail</LogoName>
        </StyledLink>

        <StyledLink href="https://wa.me/01110894640">
          <StyledLogo src={whatsappImage} alt="Whatsapp" />
          <LogoName>Whatsapp</LogoName>
        </StyledLink>

        <StyledLink href="tel:+201110894640">
          <StyledLogo src={phoneImage} alt="phone" />
          <LogoName>Mobile phone</LogoName>
        </StyledLink>
      </StyledGrid>
    </StyledContainer>
  );
};

export default ContactMeView;
