import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
`;
export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const List = styled.ul`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  flex-basis: calc((100%-40px) / 4);
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  transition: all 500ms ease;
  scale: 1;
  &:hover {
    scale: 1.1;
  }
`;

export const Name = styled.li`
  font-weight: 600;
`;
