import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Collapse,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  SvgIcon,
  Typography,
} from "@mui/material";
import { getJobStartDate, getJobEndDate, getJobSkills } from "../resume";
import { format } from "date-fns";
import RolePopover from "./RolePopover";
import { compareDesc } from "date-fns/esm";
import { Box } from "@mui/system";
import SkillIcon from "./SkillIcon";
import { useMemo, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface JobSectionProps {
  job: Job;
  items: ResumeItem[];
}

function JobSection(props: JobSectionProps) {
  const startDateString = useMemo(
    () => format(getJobStartDate(props.job), "MMM y"),
    [props.job]
  );
  const endDate = useMemo(() => getJobEndDate(props.job), [props.job]);
  const endDateString =
    endDate === undefined ? "Present" : format(endDate, "MMM y");

  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <ListItemButton onClick={toggleOpen}>
      {open ? <ExpandLess fontSize="large" /> : <ExpandMore fontSize="large" />}

      <Grid item xs={7} sx={{ justifyContent: "space-between" }}>
        <Typography display={"inline"} variant="h5">
          {props.job.employer}
        </Typography>
        <Typography display={"block"} variant="h6">
          {`${startDateString} - ${endDateString}`}
        </Typography>
        <Box>
          {Object.entries(getJobSkills(props.job)).map(
            ([skillKey, skillItem], i) => (
              <SkillIcon
                key={i}
                skillDetails={skillItem}
                skillKey={skillKey as Skill}
              />
            )
          )}
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List>
            {props.items.map((item, i) => (
              <ListItem key={i}>{item.description}</ListItem>
            ))}
          </List>
        </Collapse>
      </Grid>
      <Grid item xs={4}>
        <Timeline>
          {props.job.roles
            .slice()
            .sort((role1, role2) =>
              compareDesc(role1.startDate, role2.startDate)
            )
            .map((role, i) => (
              <TimelineItem key={i}>
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
    </ListItemButton>
  );
}

export default JobSection;
