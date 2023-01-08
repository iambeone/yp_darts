import styled from "styled-components";
import { Link } from "react-router-dom";

const TabList = styled.ul`
  margin: 56px 0 0 0;
  padding: 0;

  @media (max-width: 500px) {
    margin-top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const TabLink = styled(Link)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 32px;

  @media (max-width: 500px) {
    width: 100px;
    margin-bottom: 0;
  }

  &:last-of-type {
    width: 100%;
    position: absolute;
    bottom: 64px;
    margin-bottom: 0;
    left: 0;

    @media (max-width: 900px) {
      bottom: 32px;
      z-index: 10;
    }

    @media (max-width: 500px) {
      position: relative;
      width: 60px;
      bottom: 0;
    }
  }
`;

const TabItem = styled.li`
  width: 100%;
  height: 67px;
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    height: 64px;
  }

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

const TabBorder = styled.div`
  width: 4px;
  height: 67px;
  background-color: #fff;
  border-radius: 0 4px 4px 0;

  @media (max-width: 900px) {
    height: 64px;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 4px;
    border-radius: 4px 4px 0 0;
  }

  &:last-of-type {
    @media (max-width: 500px) {
      width: 60px;
    }
  }
`;

const Group = styled.div`
  display: flex;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    width: 100px;
  }
`;

const Image = styled.img`
  padding: 0;
  width: 26px;
  margin: 0 20px 0 28px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }

  &:last-of-type {
    @media (max-width: 500px) {
      height: 18px;
    }
  }
`;

const Title = styled.p`
  margin: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  @media (max-width: 500px) {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 16px;
  }
`;

export { TabList, TabLink, TabItem, TabBorder, Group, Image, Title };
