import BaseLayout from "../layout/base-layout";
import { useRouter } from "next/router";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import conventionGenerator from "../helpers/convention-generator";
import LikeComponent from "../components/like-component";


const ListView = () => {
  const convention = useSelector((state: RootState) => state.convention);
  const dispatch = useAppDispatch();
  const router = useRouter();


  return (
    <BaseLayout>
      <>
        {convention.map((item, index) => (
          <div key={index}>
            <div className="listView">
              <div className="nickname">
                <img src="img/emoji2.png" />
                <span>nickname</span>
              </div>
              <div>
                <span className="rankBage">1위</span>
                <span className="badge">{item.name}</span>
                <span className="countBadge">{item.depth.length}</span>
                <ul>
                  {conventionGenerator(item).map((i, index) => (
                    <li key={index}>{i.content}</li>
                  ))}
                </ul>
                <LikeComponent index={index} />
              </div>
            </div>
          </div>
        ))}
      </>
    </BaseLayout>
  );
};

export default ListView;
