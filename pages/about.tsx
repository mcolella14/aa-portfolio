import type { NextPage } from "next";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/about.jpg";

const AboutContainer = styled("div")`
  margin: auto;
  grid-template-rows: minmax(0, 60px) auto auto;
  display: grid;
  justify-content: center;
  padding: 32px 10%;
  grid-template-areas:
    "c b"
    "a b";
  gap: 32px;
  @media (max-width: 867px) {
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      "b"
      "c"
      "a";
  }
  overflow: nowrap;
`;

const Heading = styled(Typography)`
  grid-area: c;
`;

const Picture = styled("div")`
  grid-area: b;
  margin: auto;
  width: 100%;
  height: 100%;
  min-width: 300px;
  max-width: 500px;
  align-self: begin;
`;

const Description = styled(Typography)`
  width: 100%;
  grid-area: a;
  @media (max-width: 867px) {
    font-size: 1.5rem;
  }
`;

const aboutDescription = `
  Hi, I'm Ally!  To me there is nothing more amazing than building something, having it work, and able to make music it out of it.
  When starting college I didn't know my direction, but as time passed I learned how to combine
  my passion for science with my love for music in building electronic instruments. I've tailored my academic and professional
  career to do just that, graduating from Wheaton College (MA) in 2019 with a BA in Music and a minor in Physics, and I am
  currently a PCB Production Specialist at Earthquaker Devices.
`;
const About: NextPage = () => (
  <>
    <AboutContainer>
      <Heading variant="h3">About Me</Heading>
      <Picture>
        <Image src={profilePic} alt="About Picture" objectFit="cover" />
      </Picture>
      <Description>{aboutDescription}</Description>
    </AboutContainer>
  </>
);

export default About;
