import styled from "styled-components";
import { FormLabel, RadioGroup } from "@mui/material";

const GroupName = styled(FormLabel)`
  text-align: left;
`;

const Requirement = styled.span`
  color: red;
`;

const GroupRadio = styled(RadioGroup)`
  margin-left: 15px;
`;

export { GroupName, Requirement, GroupRadio };
