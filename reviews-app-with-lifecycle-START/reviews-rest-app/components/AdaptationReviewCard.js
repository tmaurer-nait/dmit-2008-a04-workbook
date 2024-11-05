import Avatar from "@mui/material/Avatar";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdaptationReviewCard({
  id,
  onDeleteRequested,
  rating,
  title,
  comment,
}) {
  const deleteClickHandler = (id) => {
    console.log(`deleting ${id}...`);
    onDeleteRequested(id);
  };

  return (
    <Card sx={{ mt: 2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            {rating}
          </Avatar>
        }
        title={
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        }
        action={
          <IconButton
            onClick={() => {
              deleteClickHandler(id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
