import { useContext } from "react";

import Avatar from "@mui/material/Avatar";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";

import { AppNotificationContext } from "../state/AppNotification";

import { deleteReview } from "../utils/api/reviews";

export default function AdaptationReviewCard(props) {
  const { showNotification } = useContext(AppNotificationContext);

  const removeCurrentReview = () => {
    deleteReview(props.id).then((data) => {
      props.removeReview(props.id);
      showNotification(`Removed Review: ${props.title}`, "info");
    });
  };

  return (
    <Card sx={{ mt: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            {props.rating}
          </Avatar>
        }
        action={
          <IconButton onClick={removeCurrentReview}>
            <DeleteIcon />
          </IconButton>
        }
        title={
          <Typography variant="body2" color="text.secondary">
            {props.title}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
