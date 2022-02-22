import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Image from "next/image";
import { styled } from "@mui/system";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { Project } from "../interfaces/project";
import allProjects from "../data/projects";
import ProjectCarousel from "../components/project-carousel";

import mainImage from "../public/ally.jpg";

const ThinH3 = styled("h2")`
  font-weight: 300;
`;

const TopLeftSection = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const TopSection = styled("div")`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
`;

const BottomSection = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const StyledDivider = styled(Divider)`
  background-color: #6d6d6d;
  margin: 50px 0;
`;

const Title = styled(Typography)`
  text-align: center;
  @media (max-width: 920px) {
    font-size: 3rem;
  }
`;

const ProjectsTitle = styled(Typography)`
  text-align: center;
  @media (max-width: 920px) {
    font-size: 2rem;
  }
`;

const Home: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      <TopSection>
        <TopLeftSection>
          <Title variant="h1">Ally Amaral</Title>
          <ThinH3>
            <span style={{ marginRight: "20px" }}>Builder</span>|
            <span style={{ margin: "0 20px" }}>Musician</span>|
            <span style={{ marginLeft: "20px" }}>Creator</span>
          </ThinH3>
        </TopLeftSection>
        <ImageWrapper>
          <Image src={mainImage} alt="Profile Picture" objectFit="scale-down" />
        </ImageWrapper>
      </TopSection>
      <StyledDivider variant="middle" />
      <ProjectsTitle variant="h3">Projects</ProjectsTitle>
      <BottomSection>
        <ProjectCarousel projects={projects} />
      </BottomSection>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { projects: allProjects },
  };
};

export default Home;
