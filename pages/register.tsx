import BaseLayout from "../layout/base-layout";
import DepthBoxComponent from "../components/depth-box-component";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { addDepth, setDepth } from "../store/reducers/depth-reducer";
import { useRouter } from "next/router";
import DepthInterface from "../interface/depth-interface";
import { setConvention } from "../store/reducers/convention-reducer";
import { useEffect, useState } from "react";
import { DragDropContext,Droppable, Draggable } from "react-beautiful-dnd";


const Register = () => {
  const state = useSelector((state: RootState) => state.state);
  const depth = useSelector((state: RootState) => state.depth);
  const convention = useSelector((state: RootState) => state.convention);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [keyword, setKeyword] = useState("");

  

  const handleClickAdd = () => {
    dispatch(addDepth(depth));
  };

  const handleClickRegister = () => {
    const contents = document.querySelectorAll<HTMLInputElement>("#list input");
    const dd: DepthInterface[] = [];
    contents.forEach((item) =>
      dd.push({
        text: item.value,
        id: item.dataset.id!.toString(),
        // like: 0,
      })
    );
    console.log(dd);
    dispatch(setDepth(dd));

    let type = "";
    switch (tab) {
      case 0:
        type = "snake_casing";
        break;
      case 1:
        type = "camelCasing";
        break;
      case 2:
        type = "PascalCase";
        break;
      case 3:
        type = "kebab-case";
        break;
    }

    dispatch(
      setConvention([
        ...convention,
        {
          keyword: state.keyword,
          name: type,
          depth: dd,
        },
      ])
    );

    router.push("/register-complete");
  };

  useEffect(() => {
    switch (tab) {
      case 0:
        setKeyword(`${state.keyword}_`);
        dispatch(
          setDepth([
            ...depth.map((item) => {
              return {
                id: item.id,
                text: `${item.text.charAt(0).toLowerCase()}${item.text.slice(
                  1,
                  item.text.length
                )}`,
              };
            }),
          ])
        );
        break;
      case 1:
        setKeyword(state.keyword);
        dispatch(
          setDepth([
            ...depth.map((item) => ({
              id: item.id,
              text: `${item.text.charAt(0).toUpperCase()}${item.text.slice(
                1,
                item.text.length
              )}`,
            })),
          ])
        );
        break;
      case 2:
        setKeyword(
          `${state.keyword.charAt(0).toUpperCase()}${state.keyword.slice(
            1,
            state.keyword.length
          )}`
        );
        dispatch(
          setDepth([
            ...depth.map((item) => ({
              id: item.id,
              text: `${item.text.charAt(0).toUpperCase()}${item.text.slice(
                1,
                item.text.length
              )}`,
            })),
          ])
        );
        break;
      case 3:
        setKeyword(`${state.keyword}-`);
        dispatch(
          setDepth([
            ...depth.map((item) => {
              return {
                id: item.id,
                text: `${item.text.charAt(0).toLowerCase()}${item.text.slice(
                  1,
                  item.text.length
                )}`,
              };
            }),
          ])
        );
        break;
    }
  }, [tab]);

  return (
    <BaseLayout>
      <div className="registerWrap">
        <div className="depthWrap">
          <p className="registerWord">
            <span>*</span>
            {state.keyword}
          </p>
          <div>
            <div>
              <p>탭을 선택해주세요.</p>
              <div className="tabs">
                <ul>
                  <li
                    className={tab === 0 ? "current" : ""}
                    onClick={() => setTab(0)}
                  >
                    snake_casing
                  </li>
                  <li
                    className={tab === 1 ? "current" : ""}
                    onClick={() => setTab(1)}
                  >
                    camelCasing
                  </li>
                  <li
                    className={tab === 2 ? "current" : ""}
                    onClick={() => setTab(2)}
                  >
                    PascalCase
                  </li>
                  <li
                    className={tab === 3 ? "current" : ""}
                    onClick={() => setTab(3)}
                  >
                    kebab-case
                  </li>
                </ul>
              </div>
              <div id="tabContents">
                <ul id="list">
                  {depth.map((item, index) => {
                    return (
                      <li key={item.id + item.text}>
                        {keyword}
                        <DepthBoxComponent
                          scale={item.text}
                          index={index}
                          id={item.id}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button type="button" onClick={handleClickAdd}>
                +
              </button>
            </div>
          </div>
          <button
            className="enrollButton enroll02"
            onClick={handleClickRegister}
          >
            등록
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};
export default Register;
