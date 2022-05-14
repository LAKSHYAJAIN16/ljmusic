import { AppShell, Button, Header } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { Text } from "@mantine/core";
import { ActionIcon } from "@mantine/core";

function Home() {
  return (
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

            <a href="?intent=parchive">
              <Button size="sm" style={{ marginLeft: "130px" }}>
                Piece Archive
              </Button>
            </a>
          </div>
        </Header>
      }
    >
      {/* Your application here */}
    </AppShell>
  );
}

export default Home;
