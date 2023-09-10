import { ActionIcon, Center, Grid } from "@mantine/core";
import React from "react";
import DashCard from "./components/dashCard";
import { IconPlus } from "@tabler/icons-react";

function Dashboard() {
  return (
    <Grid>
      <DashCard title="Create" size="sm">
        <Center>
          <ActionIcon variant="outline" color="blue" size={100}>
            <IconPlus size="100" />
          </ActionIcon>
        </Center>
      </DashCard>
    </Grid>
  );
}

export default Dashboard;
