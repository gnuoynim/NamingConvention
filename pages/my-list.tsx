import BaseLayout from "../layout/base-layout";
import Like from "../components/like";
import ModalComponent from "../components/modal-component";
import { RootState, useAppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setConvention } from "../store/reducers/convention-reducer";
import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ConventionInterface from "../interface/convention-interface";
import conventionGenerator from "../helpers/convention-generator";
import { setConventionId, setKeyword } from "../store/reducers/state-reducer";

const MyList = () => {
  const state = useSelector((state: RootState) => state.state);
  const depth = useSelector((state: RootState) => state.depth);
  const convention = useSelector((state: RootState) => state.convention);
  const dispatch = useAppDispatch();
  const router = useRouter();


  const handleClickModify = (item: ConventionInterface, index: number) => {
    dispatch(setKeyword(item.keyword));
    dispatch(setConventionId(index));

    router.push("./register-modify");
  };

  const handleClickDelete = (index: number) => {
    dispatch(setConvention([...convention.filter((_, i) => index !== i)]));
  };
  const handleClickType = () => {
    router.push("./language-type");
  };

  return (
    <BaseLayout>
      <div>
        <div className="registerContent">
          <div className="sort">
            <span>sort by</span>
            <select>
              <option>최근 등록순</option>
              <option>좋아요 많은순</option>
            </select>
          </div>
          <ul>
            {convention.map((item, index) => (
              <li key={index}>
                <>
                  <div className="content" key={index}>
                    <div className="contentBox">
                      <div className="contentTitle">
                        <p>{item.keyword}</p>
                        <span className="badge">{item.name}</span>
                        <span className="countBadge">{item.depth.length}</span>
                      </div>
                      <div className="buttonBox">
                        <button
                          type="button"
                          onClick={() => handleClickModify(item, index)}
                        >
                          수정
                        </button>
                        <button
                          type="button"
                          onClick={() => handleClickDelete(index)}
                        >
                          삭제
                        </button>
                        <button type="button" onClick={handleClickType}>
                          type
                        </button>
                      </div>
                    </div>
                    <p> {conventionGenerator(item).map((i) => i.content)}</p>
                  </div>
                  <div className="likeWrap">
                    <span>2days ago</span>
                    <Like index={index} />
                  </div>
                </>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
};
export default MyList;
