import BaseLayout from "../layout/base-layout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useAppDispatch } from "../store";
import React, { useEffect, useRef, useState } from "react";
import conventionGenerator from "../helpers/convention-generator";
import ConventionInterface from "../interface/convention-interface";
import Router, { useRouter } from "next/router";
import LanguageInterface from "../interface/language-interface";

const LanguageType = () => {
  const convention = useSelector((state: RootState) => state.convention);
  const state = useSelector((state: RootState) => state.state);
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState(0);
  const [current, setCurrent] = useState<ConventionInterface>();
  const router = useRouter();
  const copyref = useRef<HTMLDivElement>(null);
  const [languageDepth, setLanguageDepth] = useState<{ content: string }[]>([]);
  const [language, setLanguage] = useState<LanguageInterface>();

  useEffect(() => {
    switch (tab) {
      case 0:
        setLanguage({
          id: "id=",
          class: "class=",
        });
        break;
      case 1:
        setLanguage({
          id: "#",
          class: ".",
        });
        break;
      case 2:
        setLanguage({
          id: "const",
          class: "let",
          variable: "var",
        });
        break;
      case 3:
        setLanguage({
          id: "id",
          class: "className",
          variable: "const",
        });
        break;
      case 4:
        setLanguage({
          id: "$",
        });
        break;
      case 5:
        setLanguage({
          id: "Type",
          class: "final ",
        });
        break;
    }
  }, [tab]);

  useEffect(() => {
    if (convention.length > 0) {
      setCurrent(convention[state.conventionId]);
      setLanguageDepth(conventionGenerator(convention[state.conventionId]));
    }
  }, []);

  const handleClickCopie = () => {
    if (copyref.current?.innerText) {
      const range = document.createRange();
      range.selectNode(copyref.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      navigator.clipboard.writeText(copyref.current?.innerText);
      window.getSelection()?.removeAllRanges();
    }
  };

  return (
    <BaseLayout>
      <h2 className="tag">{"</>"} 각각 언어를 복사 할수있습니다.</h2>
      <div className="languageType">
        <ul className="language">
          <li className={tab === 0 ? "on" : ""} onClick={() => setTab(0)}>
            <div className="type">
              <div>
                <span>Html</span>
                <p>{current?.keyword}</p>
              </div>
              <p className="explain">
                *HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인
                구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용합니다.
              </p>
            </div>
          </li>
          <li className={tab === 1 ? "on" : ""} onClick={() => setTab(1)}>
            <div className="type">
              <div>
                <span>css,Scss</span>
                <p>{current?.keyword}</p>
              </div>
              <p className="explain">
                *Cascading Style Sheets는 HTML이나 XML로 작성된 문서의 표시
                방법을 기술하기 위한 스타일 시트 언어입니다
              </p>
            </div>
          </li>
          <li className={tab === 2 ? "on" : ""} onClick={() => setTab(2)}>
            <div className="type">
              <div>
                <span>Javascript</span>
                <p>{current?.keyword}</p>
              </div>
              <p className="explain">
                *JavaScript는 가벼운, 인터프리터 혹은 just-in-time 컴파일
                프로그래밍 언어로, 일급 함수를 지원합니다
              </p>
            </div>
          </li>
          <li className={tab === 3 ? "on" : ""} onClick={() => setTab(3)}>
            <div className="type">
              <div>
                <span>React</span>
                <p>{current?.keyword}</p>
              </div>
              <p className="explain">
                *React는 사용자 인터페이스를 만들기 위한 JavaScript
                라이브러리입니다.
              </p>
            </div>
          </li>
          <li className={tab === 4 ? "on" : ""} onClick={() => setTab(4)}>
            <div className="type">
              <div>
                <span>Php</span>
                <p>{current?.keyword}</p>
              </div>
              <p className="explain">
                *PHP는 C언어를 기반으로 만들어진 서버 측에서 실행되는 서버
                사이드 스크립트 언어입니다.
              </p>
            </div>
          </li>
          <li className={tab === 5 ? "on" : ""} onClick={() => setTab(5)}>
            <div className="type">
              <div>
                <span>Java</span>
                <p>{current?.keyword}</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="contents" ref={copyref}>
          <ul>
            <li>
              <div className="codeBox">
                {languageDepth.map((item: { content: string }, index) => (
                  <div key={index}>
                    {language?.id ? (
                      <div>
                        <span>{language?.id}</span>
                        <span>{item.content}</span>
                      </div>
                    ) : null}
                    {language?.class ? (
                      <div>
                        <span>{language?.class}</span>
                        <span>{item.content}</span>
                      </div>
                    ) : null}
                    {language?.variable ? (
                      <div>
                        <span>{language?.variable}</span>
                        <span>{item.content}</span>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <button className="copy" onClick={handleClickCopie}>
                copy
              </button>
            </li>
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
};

export default LanguageType;
