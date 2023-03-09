import LikeComponent from "./like-component";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Router, { useRouter } from "next/router";
import { RootState, useAppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import conventionGenerator from "../helpers/convention-generator";
import {setKeyword, setState, setConventionId,} from "../store/reducers/state-reducer";
import { setConvention } from "../store/reducers/convention-reducer";
import ConventionInterface from "../interface/convention-interface";
import { useState } from "react";

const ListComponent = () => {
  const convention = useSelector((state: RootState) => state.convention);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClickView = (item: ConventionInterface, index: number) => {
    dispatch(setKeyword(item.keyword));
    dispatch(setConventionId(index));
    router.push("/list-view");
  };
  const day = dayjs(new Date()).format("YYYY-MM-DD HH:mm");

  return (
    <div className="mainList">
      <h2>최근 검색등록된 단어</h2>
      {user.email === "" ? (
        ""
      ) : (
        <>
          <div className="listWrap">
            {convention.map((item, index) => (
              <div key={index}>
                <div className="list">
                  <div onClick={() => handleClickView(item, index)}>
                    <div className="nickname">
                      <img src="img/emoji.jpeg" />
                      <span>nickname</span>
                    </div>
                    <p className="listTitle">{item.keyword}</p>
                    <p className="inrText">
                      {conventionGenerator(item).map((i) => i.content)}
                    </p>
                    <p className="registrationDate">{day}</p>
                  </div>
                  <LikeComponent index={index} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ListComponent;
