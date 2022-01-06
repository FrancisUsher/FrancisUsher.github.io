import { Grid, List, ListItem } from "@mui/material";
import { getJobStartDate } from "../resume";
import JobSection from "./JobSection";
import { compareDesc } from "date-fns";

interface JobsLayoutProps {
  jobs: Job[];
  resumeItems: ResumeItemsMap;
}

function JobsLayout(props: JobsLayoutProps) {
  return (
    <List>
      {props.jobs
        .slice()
        .sort((job1, job2) =>
          compareDesc(getJobStartDate(job1), getJobStartDate(job2))
        )
        .map((job) => (
          <ListItem>
            <Grid container>
              <JobSection job={job} items={props.resumeItems[job.employer]} />
            </Grid>
          </ListItem>
        ))}
    </List>
  );
}

export default JobsLayout;
