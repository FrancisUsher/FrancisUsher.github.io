import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Grid, Typography } from "@mui/material";
import { Job, getJobStartDate, getJobEndDate } from "../resume";
import { format } from "date-fns";
import RolePopover from "./RolePopover";

interface JobSectionProps {
  job: Job;
}

function JobSection(props: JobSectionProps) {
  const startDateString = format(getJobStartDate(props.job), "MMM y");
  const endDate = getJobEndDate(props.job);
  const endDateString =
    endDate === undefined ? "Present" : format(endDate, "MMM y");
  return (
    <>
      <Grid item xs={8} sx={{ justifyContent: "space-between" }}>
        <Typography display={"inline"} variant="h5">
          {props.job.employer}
        </Typography>
        <Typography display={"inline"} variant="h5">
          {`${startDateString} - ${endDateString}`}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Timeline>
          {props.job.roles.map((role, i) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot></TimelineDot>
                {i < props.job.roles.length - 1 && (
                  <TimelineConnector></TimelineConnector>
                )}
              </TimelineSeparator>

              <TimelineContent>
                <RolePopover role={role}></RolePopover>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Grid>
    </>
  );
}

export default JobSection;
