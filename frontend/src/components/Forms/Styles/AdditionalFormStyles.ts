import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  max-width: 684px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  position: sticky;
  bottom: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -5px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 500px) {
     {
      bottom: 0px;
    }
  }
  @media (min-width: 834px) {
     {
      padding: 16px 24px;
    }
  }
`;

export { Form, ButtonWrapper };
