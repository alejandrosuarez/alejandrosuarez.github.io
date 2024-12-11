import React from "react";
import { PROJECTS } from "./Projects.constants";
import {
  Bar,
  ContainerInner,
  Description,
  Label,
  Project,
  ProjectHeading,
  ProjectLink,
  TechStack,
} from "./Projects.styles";
const Projects = () => {
  return (
    <ContainerInner>
      <p>
        a collection of my past and current projects
      </p>
      {PROJECTS.map((p) => {
        return (
          <Project>
            <ProjectHeading>
              <h3>{p.title}</h3>
              {p.link != "" && <Bar />}
              {p.link != "" && <ProjectLink href={p.link}>paper</ProjectLink>}
            </ProjectHeading>
            <TechStack>
              {p.techStack.map((t) => {
                return (
                  <Label>
                    <p>{t}</p>
                  </Label>
                );
              })}
            </TechStack>
            <Description style={{ marginBottom: "0px" }}>
              {p.description}
            </Description>
          </Project>
        );
      })}
    </ContainerInner>
  );
};

export default Projects;
