import BaseLayout from "../layout/base-layout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useAppDispatch } from "../store";
import React, { useEffect, useRef, useState } from "react";
import conventionGenerator from "../helpers/convention-generator";
import Router, { useRouter } from "next/router";

const LanguageType = () => {
  const convention = useSelector((state: RootState) => state.convention);
  const state = useSelector((state: RootState) => state.state);
  const depth = useSelector((state: RootState) => state.depth);
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState(0);
  const router = useRouter();
  const copyref = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState({
    id: "",
    class: "",
  });

  useEffect(() => {
    switch (tab) {
      case 0:
        setLanguage({
          id: 'id=""',
          class: "class",
        });
        break;
      case 1:
        setLanguage({
          id: ".",
          class: "#",
        });
        break;
      case 2:
        setLanguage({
          id: "const",
          class: "let",
        });
        break;
      case 3:
        setLanguage({
          id: "className",
          class: "id",
        });
        break;
      case 4:
        setLanguage({
          id: "Type",
          class: "final ",
        });
        break;
    }
  }, [tab]);

  const handleClickCopie = () => {
    
    if (copyref.current?.innerText) {

      const range = document.createRange();
      range.selectNode(copyref.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      navigator.clipboard.writeText(copyref.current.innerText);
      window.getSelection()?.removeAllRanges();

      // alert("복사성공");
      
    }
  };

  return (
    <BaseLayout>
      <h2 className="tag">{"</>"}</h2>
      <div className="languageType">
        <ul className="language">
          <li className={tab === 0 ? "on" : ""} onClick={() => setTab(0)}>
            <div className="type">
              <span>Html</span>
              <p>{state.keyword}</p>
              <p className="explain">
                *HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인
                구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용합니다.
              </p>
            </div>
          </li>
          <li className={tab === 1 ? "on" : ""} onClick={() => setTab(1)}>
            <div className="type">
              <span>css,Scss</span>
              <p>{state.keyword}</p>
              <p className="explain">
                *Cascading Style Sheets는 HTML이나 XML로 작성된 문서의 표시
                방법을 기술하기 위한 스타일 시트 언어입니다
              </p>
            </div>
          </li>
          <li className={tab === 2 ? "on" : ""} onClick={() => setTab(2)}>
            <div className="type">
              <span>Javascript</span>
              <p>{state.keyword}</p>
              <p className="explain">
                *JavaScript는 가벼운, 인터프리터 혹은 just-in-time 컴파일
                프로그래밍 언어로, 일급 함수를 지원합니다
              </p>
            </div>
          </li>
          <li className={tab === 3 ? "on" : ""} onClick={() => setTab(3)}>
            <div className="type">
              <span>React</span>
              <p>{state.keyword}</p>
            </div>
          </li>
          <li className={tab === 4 ? "on" : ""} onClick={() => setTab(4)}>
            <div className="type">
              <span>Php</span>
              <p>{state.keyword}</p>
              <p className="explain">
                *PHP는 C언어를 기반으로 만들어진 서버 측에서 실행되는 서버
                사이드 스크립트 언어입니다.
              </p>
            </div>
          </li>
          <li className={tab === 5 ? "on" : ""} onClick={() => setTab(5)}>
            <div className="type">
              <span>Java</span>
              <p>{state.keyword}</p>
            </div>
          </li>
        </ul>

        <div className="contents" ref={copyref}>
          <ul>
            {convention.map((item, index) => {
              return (
                <li key={index}>
                  {conventionGenerator(item).map((i, index) => (
                    <div key={index}>
                      <div>
                        <span>{language.id}</span> {i.content}
                      </div>
                      <div>
                        <span>{language.class}</span> {i.content}
                      </div>
                    </div>
                  ))}
                </li>
              );
            })}
            <li>
              <button onClick={handleClickCopie}>copy</button>
            </li>
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
};

export default LanguageType;
