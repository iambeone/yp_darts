import styled from "styled-components";

const SidebarContainer = styled.section`
  position: relative;
  width: 248px;
  height: 100vh;
  background-color: #003200;

  @media (max-width: 900px) {
    width: 150px;
  }

  @media (max-width: 500px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: flex-end;
  }
`;

const Image = styled.img`
  display: block;
  margin: 64px auto 0;

  @media (max-width: 900px) {
    margin-top: 32px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export { SidebarContainer, Image };
