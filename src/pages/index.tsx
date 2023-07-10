import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material";

import { Viewer } from "../components/viewer";
import {
  DETAILS_PAGE,
  FORM_PAGE,
  LIST_PAGE
} from "../constants/routing.constants";
import ViewListIcon from "@mui/icons-material/ViewList";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";

export function Index() {
  const push = useNavigate();

  return (
    <Viewer name="Dashboard" noButtons>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Card
          onClick={() => push(DETAILS_PAGE.path)}
          sx={{
            maxWidth: "100%",
            width: 345,
            mb: 2,
            display: "flex",
            "&:hover": { filter: "brightness(200%)", cursor: "pointer" }
          }}
        >
          <CardContent sx={{ pr: 1, mr: "-10px" }}>
            <MovieFilterIcon
              sx={{
                background: "rgba(251,198,70,0.3)",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                p: "7px"
              }}
            />
          </CardContent>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              mt="5px"
              mb={2}
            >
              Details
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Single entity endpoints
            </Typography>
          </CardContent>
        </Card>
        <Card
          onClick={() => push(LIST_PAGE.path)}
          sx={{
            maxWidth: "100%",
            width: 345,
            mb: 2,
            display: "flex",
            "&:hover": { filter: "brightness(200%)", cursor: "pointer" }
          }}
        >
          {" "}
          <CardContent sx={{ pr: 1, mr: "-10px" }}>
            <ViewListIcon
              sx={{
                background: "rgba(251,198,70,0.3)",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                p: "7px"
              }}
            />
          </CardContent>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              mt="5px"
              mb={2}
            >
              List
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Multi entity endpoints, paginated lists
            </Typography>
          </CardContent>
        </Card>
        <Card
          onClick={() => push(FORM_PAGE.path)}
          sx={{
            maxWidth: "100%",
            width: 345,
            mb: 2,
            display: "flex",
            "&:hover": { filter: "brightness(200%)", cursor: "pointer" }
          }}
        >
          {" "}
          <CardContent sx={{ pr: 1, mr: "-10px" }}>
            <SubscriptionsIcon
              sx={{
                background: "rgba(251,198,70,0.3)",
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                p: "7px"
              }}
            />
          </CardContent>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              mt="5px"
              mb={2}
            >
              Form
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Forms, Deletes, Queues
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Viewer>
  );
}

export default Index;
