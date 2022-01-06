import { IconButton } from "@mui/material";

interface SkillIconProps {
  skillKey: Skill;
  skillDetails: SkillDetails;
}

function SkillIcon(props: SkillIconProps) {
  return (
    <IconButton>
      <img
        src={`/logos/${props.skillDetails.iconFileName}`}
        height={40}
        width={40}
        alt={`${props.skillKey} logo`}
      />
    </IconButton>
  );
}

export default SkillIcon;
