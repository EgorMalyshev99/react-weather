import React from "react";
import s from "./Home.module.scss";
import MainHeader from "../../components/Header/MainHeader";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className={s.home}>
        <MainHeader></MainHeader>
      </div>
    </>
  );
};

export default Home;
