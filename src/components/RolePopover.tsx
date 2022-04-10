import { Paper, Popover, Typography } from "@mui/material";
import { Role } from "../resume";
import { format } from "date-fns";
import { useState, MouseEvent } from "react";

interface RolePopoverProps {
  role: Role;
}

function RolePopover(props: RolePopoverProps) {
  const startDateString = format(props.role.startDate, "MMM y");
  const endDate = props.role.endDate;
  const endDateString =
    endDate === undefined ? "Present" : format(endDate, "MMM y");

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <Typography
        aria-owns={open ? `mouse-over-popover-${props.role.title}` : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {props.role.title}
      </Typography>
      <Popover
        id={`mouse-over-popover-${props.role.title}`}
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        PaperProps={{
          sx: {
            p: 2,
            ml: -4,
          },
        }}
      >
        <Typography>{`${startDateString} - ${endDateString}`}</Typography>
        <Typography>{props.role.description}</Typography>
      </Popover>
    </>
  );
}

export default RolePopover;
