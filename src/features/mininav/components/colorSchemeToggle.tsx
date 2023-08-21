import { ActionIcon } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import React from "react";

function ColorSchemeToggle({
  colorScheme,
  toggleColorScheme,
  styles,
  size = 22,
}: ColorSchemeToggleProps) {
  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      radius="xl"
      variant="transparent"
      style={{
        color: colorScheme === "dark" ? "#fff" : "#000",
        ...styles,
      }}
    >
      {colorScheme === "dark" ? (
        <IconSun size={size} />
      ) : (
        <IconMoonStars size={size} />
      )}
    </ActionIcon>
  );
}

export default ColorSchemeToggle;

interface ColorSchemeToggleProps {
  colorScheme: string;
  toggleColorScheme: () => void;
  styles: React.CSSProperties;
  size?: number;
}
