import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { increment } from "../store/reducers/convention-reducer";
import DepthInterface from "../interface/depth-interface";

const Like = ({ index }: { index: number }) => {
  
  const dispatch = useAppDispatch();
  const convention = useSelector((state: RootState) => state.convention);

  const handleIncrement = () => {
    dispatch(increment(index));
  };

  return (
    <div className="componentsLike">
      <div className="progress">
        <p className="like">
          <img src="img/like.png" onClick={handleIncrement} />
          {convention.filter((_,i) => i === index)[0].like}
          {convention[index].like}
        </p>
      </div>
    </div>
  );
};
export default Like;
