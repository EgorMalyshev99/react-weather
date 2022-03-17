import React from "react";
import { Container } from "react-bootstrap";
import s from "./MainHeader.module.scss";

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <>
      <header className={s.header}>
        <Container></Container>
      </header>
    </>
  );
};

export default MainHeader;
