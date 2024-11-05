import Avatar from "@mui/material/Avatar";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteReview } from "../utils/api/reviews";

export default function AdaptationReviewCard(props) {
  const deleteClickHandler = (id) => {
    console.log(`deleting ${id}...`);
    // delete review on backend then call the delete callback (which will delete on frontend)
    deleteReview(id).then(() => {
      props.deleteReviewCalback(id);
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
        title={
          <Typography variant="body2" color="text.secondary">
            {props.title}
          </Typography>
        }
        action={
          <IconButton
            onClick={() => {
              deleteClickHandler(props.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
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
