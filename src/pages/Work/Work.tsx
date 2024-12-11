import { FadeIn } from "@app/components";
import { Bold, Link } from "@app/styles/styles";
import React, { useState } from "react";
import { COMPANIES, DESCRIPTIONS } from "./Work.constants";
import {
  ActiveLine,
  ContainerInner,
  Content,
  Date,
  List,
  ListItem,
  Panel,
  Tab,
  Tabs,
  WorkContainer,
} from "./Work.styles";

const Work = () => {
  const [index, setIndex] = useState(0);

  return (
    <ContainerInner>
      <WorkContainer>
        <Tabs>
          {COMPANIES.map((w: any, i: any) => (
            <Tab onClick={() => setIndex(i)} active={index === i}>
              {w}
            </Tab>
          ))}

          <ActiveLine index={index} />
        </Tabs>
        <Content>
          <Panel>
            <FadeIn>
              <h3>
                {DESCRIPTIONS[index].role} @{" "}
                <Bold>
                  <Link href={DESCRIPTIONS[index].link}>
                    {COMPANIES[index]}
                  </Link>
                </Bold>
              </h3>
              <Date>{DESCRIPTIONS[index].date}</Date>
              <List>
                {DESCRIPTIONS[index].description.map((d: any, i: any) => {
                  return <ListItem key={i}>{d}</ListItem>;
                })}
              </List>
            </FadeIn>
          </Panel>
        </Content>
      </WorkContainer>
    </ContainerInner>
  );
};

export default Work;
