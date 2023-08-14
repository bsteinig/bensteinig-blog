import React from "react";
import { useMantineTheme } from "@mantine/core";

export function BrandLogo({ variant = "default", width = 110, ...others }) {
  const theme = useMantineTheme();
  return (
    <svg
      {...others}
      width={width}
      viewBox="0 0 84 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M84 84C84 87.8667 82.6 91.2 79.8 94C77.1333 96.6667 73.8667 98 70 98H7.15256e-07V28L14 14H7.15256e-07V-1.90735e-06H56C59.8667 -1.90735e-06 63.1333 1.4 65.8 4.2C68.6 6.86666 70 10.1333 70 14V42H70.4C74.2667 42 77.4667 43.4 80 46.2C82.6667 48.8667 84 52.1333 84 56V84ZM54 42V14H16V54L28 42H54ZM68 84V56H16V84H68Z"
        fill={
          theme.colorScheme === "dark"
            ? theme.colors.dark[0]
            : theme.colors.gray[9]
        }
      />
    </svg>
  );
}
