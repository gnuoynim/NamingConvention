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

  return (
    <div className="mainList">
      <h2>최근 가장 많이 검색된 단어</h2>
      <div className="listWrap">
        {convention.map((item, index) => (
          <div key={item.depth[index].id}>
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
                <p className="registrationDate">20days ago</p>
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
