import type { NextPage } from "next";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/about.jpg";

const AboutContainer = styled("div")`
  grid-template-columns: repeat(2, 50%);
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 32px 10%;
  grid-template-areas: "a b";
  @media (max-width: 720px) {
    gap: 32px;
    grid-template-columns: repeat(1, 100%);
    grid-template-areas:
      "b"
      "a";
  }
`;

const Heading = styled(Typography)`
  text-align: center;
  margin-bottom: 32px;
`;

const Picture = styled("div")`
  grid-area: b;
  margin: auto;
`;

const Description = styled(Typography)`
  width: 100%;
  grid-area: a;
  text-align: center;
`;
const About: NextPage = () => (
  <>
    <Heading variant="h3">About Me</Heading>
    <AboutContainer>
      <Picture>
        <Image src={profilePic} />
      </Picture>
      <Description>...</Description>
    </AboutContainer>
  </>
);

export default About;
