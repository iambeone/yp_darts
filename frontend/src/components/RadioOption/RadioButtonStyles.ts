import styled from "styled-components";
import FormLabel from "@mui/material/FormLabel/FormLabel";

const GroupName = styled(FormLabel)`
  text-align: left;
  margin-left: -15px;
`;

const Requirement = styled.span`
  color: red;
`;

export { GroupName, Requirement };
