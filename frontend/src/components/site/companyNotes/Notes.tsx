import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Grid, Stack } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TextField from "@mui/material/TextField";
interface NotesProps {
  candidate_id?: string;
  company_id?: string;
}

const Notes: React.FC<NotesProps> = ({ candidate_id, company_id }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([""]);

  function handleChange(element: any) {
    const value = element.target.value;

    setComment(value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setComments((prevState) => [...prevState, comment]);
    setComment("");
  }

  return (
    <Paper sx={{ px: 3, py: 3, borderRadius: "16px", mb: 3 }} elevation={0}>
      <Grid container>
        <Grid item md={10}>
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            Notes and comments
          </Typography>
          <Typography variant="body2">
            Add any relevant input to this candidate selection process. What you
            write here will only be seen by your company's team members and not
            by the candidate.
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Stack direction="row" spacing={1}>
            <ChatBubbleOutlineIcon />{" "}
            <Typography
              sx={{ display: "inline-block", verticalAlign: "bottom" }}
            >
              {comments.length <= 1 ? "No comments yet" : comments.length - 1}
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={12} sx={{ borderBottom: "1px solid lightgrey", mb: 2 }}>
          <Box sx={{ my: 2 }} onSubmit={handleSubmit} component="form">
            <TextField
              required
              multiline
              maxRows={6}
              minRows={6}
              autoComplete="false"
              name="comment"
              id="comment"
              size="small"
              value={comment || ""}
              label="Comment"
              fullWidth
              onChange={handleChange}
            />

            <Button
              sx={{ float: "right", my: 3, textTransform: "none" }}
              // disabled={updateCandidate.isLoading}
              type="submit"
              variant="outlined"
              size="small"
            >
              Add notes
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            All comments
          </Typography>
          <Box sx={{ width: "100%" }}>
            {comments.length < 2 ? (
              <Typography>No comments yet</Typography>
            ) : (
              comments.map((com) => {
                return (
                  <Typography sx={{ mb: 2 }} key={com}>
                    {com}
                  </Typography>
                );
              })
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Notes;
