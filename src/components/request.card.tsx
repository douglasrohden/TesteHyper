import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { QueueRequest } from "@hyper-fetch/react";
import { RequestInstance } from "@hyper-fetch/core";
import { LinearProgress } from "@mui/material";

type Props = {
  request: QueueRequest<RequestInstance>;
};

export function RequestCard({ request }: Props) {
  return (
    <Card
      sx={{
        minWidth: 275,
        mt: 2,
        padding: 0
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Ongoing Request
        </Typography>
        <Typography sx={{ fontSize: 16 }} variant="h5">
          Request ID: <b>{request.requestId}</b>
        </Typography>
        <Typography sx={{ fontSize: 13, mb: 2 }} color="text.secondary">
          Added at: <b>{new Date(request.timestamp).toLocaleTimeString()}</b>
        </Typography>
        <LinearProgress value={request.downloading?.progress} />
      </CardContent>
      <CardActions sx={{ px: 2, pt: 3, pb: 2 }}>
        <Button
          size="small"
          variant="contained"
          color={request.stopped ? "success" : "error"}
          onClick={request.stopped ? request.startRequest : request.stopRequest}
        >
          {request.stopped ? "Start Request" : "Stop Request"}
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={request.deleteRequest}
        >
          Remove Request
        </Button>
      </CardActions>
    </Card>
  );
}
