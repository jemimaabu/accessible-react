import React, { useEffect } from "react";
import styled from "styled-components";
import { TabsComponent } from "./Tabs";

export const TabsContainer = () => {
  useEffect(() => {
    document.title = "Accessible React | Tabs";
  });

  return (
    <TabsComponent
      Tabs={[
        {
          title: "Dumbledore's Truth",
          content: (
            <q>
              Of course it is happening inside your head, Harry, but why on
              earth should that mean that it is not real?
            </q>
          )
        },
        {
          title: "Harry's Obsession",
          content: (
            <q>
              Harry, however, had never been less interested in Quidditch; he
              was rapidly becoming obsessed with Draco Malfoy.
            </q>
          )
        },
        {
          title: "Snape gets owned",
          content: (
            <>
              "Do you remember me telling you we are practicing non-verbal
              spells, Potter?"
              <br /> "Yes," said Harry stiffly.
              <br /> "Yes, sir."
              <br />
              "There's no need to call me "sir" Professor."
              <br /> And then everybody was like:
              <br />
              <iframe
                src="https://giphy.com/embed/cF7QqO5DYdft6"
                style={{ height: "150px", margin: "auto", display: "block" }}
                frameBorder="0"
                title="OHHHHHH"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </>
          )
        }
      ]}
    />
  );
};
