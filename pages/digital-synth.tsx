import type { NextPage } from "next";
import allProjects from "../data/projects";
import { Project } from "../interfaces/project";
import { Typography } from "@mui/material";
import Image from "next/image";

import { styled } from "@mui/system";

import image1 from "../public/digital-synth-1.jpg";
import image2 from "../public/digital-synth-2.jpg";

const SLUG = "digital-synth";
const project: Project = allProjects.filter((proj) => proj.slug === SLUG)[0];
const { title, description } = project;

const StyledImageList = styled("div")`
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Title = styled(Typography)`
  text-align: center;
`;

const Description = styled(Typography)`
  text-align: center;
  width: 80%;
  margin: auto;
`;

const Project: NextPage = () => {
  return (
    <Container>
      <Title variant="h3">{title}</Title>
      <Description>{description}</Description>
      <StyledImageList>
        <Image src={image1} />
        <Image src={image2} />
      </StyledImageList>
    </Container>
  );
};

export default Project;
