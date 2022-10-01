import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, red, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    background: (note) => {
      if (note.category === "work") {
        return red[700];
      }
      if (note.category === "money") {
        return green[500];
      }
      if (note.category === "todos") {
        return yellow[700];
      }
      return blue[700];
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              style={{ color: "red" }}
              onClick={() => handleDelete(note.id)}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
