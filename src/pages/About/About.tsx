import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  Bar,
  ContainerInner,
  Social,
  SocialLink,
  Socials
} from "./About.styles";

const About = () => {
  return (
    <ContainerInner>
      <div>
        {/* <p>
          I'm a recent Harvard graduate with Bachelor's and Master's degrees in
          Computer Science, bringing experience across big tech, finance,
          startups, and entrepreneurship. I’m passionate about backend
          development, cloud computing, distributed systems, and DevOps,
          thriving in fast-paced, high-impact environments.
        </p>
        <p>
          My career has spanned building full-stack mobile apps, trading
          platforms, robotics, AI and algorithmic solutions for type-1
          diabetics, and scaling startup backends into robust APIs. I focus on
          writing clean, maintainable code, fostering clear communication, and
          driving collaborative teamwork to deliver high-quality solutions.
        </p>
        <p>
          Born in São Paulo and raised in the U.S., I overcame the challenges of
          immigrant life and poverty, becoming valedictorian and earning a full
          scholarship to Harvard. As the first in my family to earn a
          degree in the U.S., I bring resilience, determination, and a unique
          perspective to every project.
        </p>
        <p>
          Outside of work, I’m passionate about photography, music, fitness, and
          travel, having explored ten countries and worked in San Francisco and
          New York City.
        </p>
        <p>Feel free to reach out—let’s connect! :)</p> */}
        <p>
          I recently graduated from Harvard with both Bachelor's and Master's
          degrees in Computer Science. With diverse experience in big tech,
          finance, startups, and entrepreneurship, I am currently thriving in a
          fast-paced, high-impact startup environment.
        </p>
        <p>
          My career has spanned building full-stack mobile apps, trading
          platforms, robotics, AI and algorithmic solutions for type-1
          diabetics, and scaling startup backends into robust APIs. I focus on
          writing clean, maintainable code, fostering clear communication, and
          driving collaborative teamwork to deliver high-quality solutions.
        </p>
        <p>
          Born in São Paulo and raised in the U.S., I worked hard with my family to
          overcome the challenges of immigrant life and poverty. I became
          valedictorian and earned a full scholarship to Harvard. As the first in
          my family to earn a degree in the U.S., I bring resilience,
          determination, and a unique perspective to every project.
        </p>
        <p>
          Outside of work, I’m passionate about photography, music, fitness, and
          travel, having explored ten countries and worked in San Francisco and
          New York City.
        </p>
        <p>Feel free to reach out—let’s connect! :)</p>
        <Socials>
          <Social>
            <FaGithub />
            <Bar />
            <p>
              <SocialLink href="https://github.com/kiopsy" target="_blank">
                @kiopsy
              </SocialLink>
            </p>
          </Social>
          <Social>
            <FaLinkedin />
            <Bar />
            <p>
              <SocialLink
                href="https://www.linkedin.com/in/vic-goncalves/"
                target="_blank"
              >
                /in/vic-goncalves
              </SocialLink>
            </p>
          </Social>
          <Social>
            <IoMdMail />
            <Bar />
            <p>
              <SocialLink href="mailto:victorgoncalves@college.harvard.edu">
                victorgoncalves@college.harvard.edu
              </SocialLink>
            </p>
          </Social>
        </Socials>
      </div>
    </ContainerInner>
  );
};

export default About;