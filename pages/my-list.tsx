import BaseLayout from "../layout/base-layout";
import Like from "../components/like";
import ModalComponent from "../components/modal-component";
import { RootState, useAppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setConvention } from "../store/reducers/convention-reducer";
import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import ConventionInterface from "../interface/convention-interface";

const MyList = () => {
  const state = useSelector((state: RootState) => state.state);
  const depth = useSelector((state: RootState) => state.depth);
  const convention = useSelector((state: RootState) => state.convention);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClickModify = () => {
    router.push("./register-modify");
  };

  const nameList = (item: ConventionInterface) => {
    return item.depth.map((i) => {
      let content = "";
      switch (item.name) {
        case "snake_casing":
          content = `${item.keyword}_${i.text}`;
          break;

        case "camelCasing":
          content = `${item.keyword.charAt(0).toLowerCase()}
            ${item.keyword.slice(1, item.keyword.length)} 
            ${i.text}`;
          break;

        case "PascalCase":
          content = `${item.keyword.charAt(0).toUpperCase()}
          ${item.keyword.slice(1, item.keyword.length)} 
          ${i.text}`;
          break;

        case "kebab-case":
          content = `${item.keyword}-${i.text}`;
          break;
      }
      return <span>{content}</span>;
    });
  };

  const handleClickDelete = (index: number) => {
    dispatch(setConvention([...convention.filter((_, i) => index !== i)]));
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
              <li>
                <>
                  <div className="content">
                    <div className="contentBox">
                      <div className="contentTitle">
                        <p>{item.keyword}</p>
                        <span className="badge">{item.name}</span>
                        <span className="countBadge">{item.depth.length}</span>
                      </div>
                      <div className="buttonBox">
                        <button type="button" onClick={handleClickModify}>
                          수정
                        </button>
                        <button
                          type="button"
                          onClick={() => handleClickDelete(index)}
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                    <p>{nameList(item)}</p>
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
