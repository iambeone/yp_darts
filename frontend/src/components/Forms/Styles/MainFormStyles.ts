import styled from "styled-components";
import Button from "../../Button/Button";

const Form = styled.form`
  margin: 24px auto 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  max-width: 734px;
  gap: 48px 24px;

  @media (max-width: 1194px) {
     {
      margin-left: 24px;
    }
  }

  @media (max-width: 500px) {
     {
      margin-left: 16px;
    }
  }
`;

const Line = styled.div`
  width: 100%;
`;

const SubmitBlock = styled.div`
  button: 0px;
  width: 100%;
  justify-items: center;
  justify-content: center;
  display: grid;
  gap: 16px;
  padding: 16px 0 16px;
  box-shadow: 0px -5px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  bottom: 0px;
  background: #ffffff;

  @media (max-width: 500px) {
     {
      bottom: 70px;
    }
  }
`;

const SubmitButton = styled(Button)`
  max-width: 121px;
`;

const Requirement = styled.span`
  color: red;
`;

export { Form, Line, SubmitBlock, SubmitButton, Requirement };
