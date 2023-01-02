import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > span {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const ProgressCSS = makeStyles({
  colorPrimary: {
    color: '#EEAF22',
  }
})