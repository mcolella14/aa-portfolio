import React from "react";
import Link from "next/link";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";

import { styled } from "@mui/system";

import analogImg from "../public/analog-synth-1.jpg";
import digitalImg from "../public/digital-synth-1.jpg";
import midiImg from "../public/midi-controller-1.jpg";
import bassImg from "../public/bass.jpg";

import { Project } from "../interfaces/project";

const StyledImageList = styled("ul")`
  width: 80%;
  padding: 0;
  li {
    transition: 0.3s;
    cursor: pointer;
  }
  li:hover {
    opacity: 0.5;
    transform: scale(1.05);
  }
  display: grid;
  grid-template-columns: repeat(2, 50%);
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 100%);
  }
  // gap: 24px;
`;

const StyledImageListItem = styled(ImageListItem)`
  margin: 24px;
  min-width: 200px;
`;

const ProjectCarousel: React.FunctionComponent<{ projects: Project[] }> = ({
  projects,
}) => {
  const Analog = () => (
    <Link href={`/${projects[0].slug}`} key={projects[0].slug}>
      <a>
        <StyledImageListItem>
          <Image src={analogImg} alt={projects[0].title} />
          <ImageListItemBar title={projects[0].title} />
        </StyledImageListItem>
      </a>
    </Link>
  );
  const Digital = () => (
    <Link href={`/${projects[1].slug}`} key={projects[1].slug}>
      <a>
        <StyledImageListItem>
          <Image src={digitalImg} alt={projects[1].title} />
          <ImageListItemBar title={projects[1].title} />
        </StyledImageListItem>
      </a>
    </Link>
  );
  const Midi = () => (
    <Link href={`/${projects[2].slug}`} key={projects[2].slug}>
      <a>
        <StyledImageListItem>
          <Image src={midiImg} alt={projects[2].title} />
          <ImageListItemBar title={projects[2].title} />
        </StyledImageListItem>
      </a>
    </Link>
  );
  const Bass = () => (
    <Link href={`/${projects[3].slug}`} key={projects[3].slug}>
      <a>
        <StyledImageListItem>
          <Image src={bassImg} alt={projects[3].title} />
          <ImageListItemBar title={projects[3].title} />
        </StyledImageListItem>
      </a>
    </Link>
  );
  return (
    <StyledImageList>
      <Analog />
      <Digital />
      <Midi />
      <Bass />
    </StyledImageList>
  );
};

export default ProjectCarousel;
