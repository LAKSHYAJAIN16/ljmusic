import React, { useState } from "react";
import { ActionIcon, Avatar, Badge, Title, validateJson } from "@mantine/core";
import { Text } from "@mantine/core";
import { ThemeIcon } from "@mantine/core";
import { AppShell, Button, Header, Navbar, ScrollArea } from "@mantine/core";

import data from "./data";

export default function Parchive() {
  const [selec, setSelec] = useState(0);

  return (
    <>
      <AppShell
        padding="md"
        header={
          <Header
            height={60}
            p="xs"
            style={{ display: "flex", alignItems: "center" }}
          >
            <a href="?intent=home">
              <Avatar src="/src/favic.jpg" alt="LJMUSIC" />
            </a>

            <Text size="xl" weight={700} style={{ paddingLeft: "10px" }}>
              LJMusic
            </Text>

            <div>
              <Button size="sm" style={{ marginLeft: "130px" }}>
                Latest Releases
              </Button>

              <Button size="sm" style={{ marginLeft: "130px" }}>
                Download Sheet Music
              </Button>

              <Button size="sm" style={{ marginLeft: "130px" }}>
                Piece Archive
              </Button>
            </div>
          </Header>
        }
        navbar={
          <Navbar height="auto" p="xs" width={{ base: 300 }}>
            <Navbar.Section mt="xs">
              <Title>All Pieces</Title>
            </Navbar.Section>

            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
              {data.map((val, idx) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingBottom: "5px",
                      paddingTop: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelec(idx + 1)}
                  >
                    <ThemeIcon size="lg" color={val.col}>
                      <Text>{val.pre}</Text>
                    </ThemeIcon>

                    <Text style={{ paddingLeft: "10px" }}>{val.title}</Text>
                  </div>
                </>
              ))}
            </Navbar.Section>

            <Navbar.Section>{/* Footer with user */}</Navbar.Section>
          </Navbar>
        }
      >
        {selec === 0 && (
          <>
            <Title>Choose a Piece</Title>
          </>
        )}

        {selec !== 0 && (
          <>
            {/* Minus 1 because we take 0 as the initial */}
            <Badge size="lg" color={data[selec - 1].col}>
              {data[selec - 1].collection}
            </Badge>
            <Title>{data[selec - 1].title}</Title>
            <Text>
              <b>{data[selec - 1].timSig}</b> || <b>{data[selec - 1].key}</b> ||{" "}
              <b>{data[selec - 1].theme}</b>
            </Text>

            <br />
            <Text>{data[selec - 1].desc}</Text>

            <br />
            <Badge size="sm">Sheet Music</Badge>
            <br />
            <iframe
              src={data[selec - 1].sheetMusicLink}
              width={500}
              height={600}
            ></iframe>
            <br />

            <br />
            <Badge size="sm">Midi</Badge>
            <br />
            <audio
              controls
              src={data[selec - 1].midiLink}
              autoPlay={false}
            ></audio>
            <br />

            <br />
            <Badge size="sm">Recording</Badge>
            <br />
            <iframe
              width="545"
              height="409"
              src={data[selec - 1].recordingLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
            <br />
          </>
        )}
      </AppShell>
    </>
  );
}
