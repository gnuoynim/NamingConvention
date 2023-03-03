import Like from "./like";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Router, { useRouter } from "next/router";
import { RootState, useAppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import conventionGenerator from "../helpers/convention-generator";


const List = () => {
  const convention = useSelector((state: RootState) => state.convention);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleClickView = () => {
    router.push("/list-view");
  };
  const day = dayjs(new Date()).format('YYYY-MM-DD HH:mm');


  return (
    <div className="mainList">
      <h2>최근 검색등록된 단어</h2>
      <div className="listWrap">
        {convention.map((item, index) => (
          <div key={index}>
            <div className="list" >
              <div onClick={handleClickView}>
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
              <Like index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
