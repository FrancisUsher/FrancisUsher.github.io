import { Grid, List, ListItem } from "@mui/material";
import { Job } from "../resume";
import JobSection from "./JobSection";

interface JobsLayoutProps {
  jobs: Job[];
}

function JobsLayout(props: JobsLayoutProps) {
  return (
    <List>
      {props.jobs.map((job) => (
        <ListItem>
          <Grid container>
            <JobSection job={job} />
          </Grid>
        </ListItem>
      ))}
    </List>
  );
}

export default JobsLayout;
