/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, Box, Typography, Container, Chip } from "@mui/material";
import { useAppManager } from "@hyper-fetch/react";

import { Sidebar } from "components/sidebar";
import { DASHBOARD_PAGE } from "constants/routing.constants";
import { builder } from "api";

import { ReactComponent as Logo } from "assets/logo.svg";

export const Viewer: React.FC<{
  name: string;
  children: React.ReactNode;
  noButtons?: boolean;
}> = ({ name, children, noButtons }) => {
  const [mount, setMount] = useState(true);
  const { isOnline, isFocused } = useAppManager(builder);

  const push = useNavigate();

  const handleToggle = () => {
    setMount((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "#1b1b1d",
        backgroundImage:
          "radial-gradient(#ffffff1a 1px,#0000 0),radial-gradient(#ffffff1a 1px,#0000 0)",
        backgroundPosition: "0 0,50px 50px",
        backgroundSize: "100px 100px"
      }}
    >
      <Box
        sx={{
          pt: "30px",
          pb: "10px",
          pl: 3,
          pr: 3,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Logo style={{ maxWidth: "100%", width: "300px", maxHeight: "90px" }} />
      </Box>
      <Box sx={{ pb: "40px", pl: 3, pr: 3 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "900", textAlign: "center" }}
        >
          <Box
            sx={{
              fontSize: "24px",
              letterSpacing: "2px",
              color: "#fbc646",
              fontWeight: "900"
            }}
          >
            {name}
          </Box>
          {!isFocused && <Chip label="Blur" color="primary" size="small" />}
          {!isOnline && <Chip label="Offline" color="error" size="small" />}
        </Typography>
        {!noButtons && (
          <Stack pt={2} direction="row" spacing={2} justifyContent="center">
            <Box>
              <Button
                size="small"
                variant="contained"
                type="button"
                onClick={() => push(DASHBOARD_PAGE.path)}
              >
                Go To dashboard
              </Button>
            </Box>
            <Box>
              <Button
                color={mount ? "success" : "error"}
                size="small"
                variant="contained"
                type="button"
                onClick={handleToggle}
              >
                {mount ? "Unmount" : "Mount"}
              </Button>
            </Box>
          </Stack>
        )}
      </Box>
      <Box px={2}>
        {!noButtons && mount && children}
        {noButtons && (
          <Container
            sx={{
              pt: 4
            }}
          >
            {mount && children}
          </Container>
        )}
      </Box>
    </Box>
  );
};
