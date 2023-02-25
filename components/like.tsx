import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { increment } from "../store/reducers/convention-reducer";
import DepthInterface from "../interface/depth-interface";
import { addLike } from "../store/reducers/user-reducer";

const Like = ({ index }: { index: number }) => {
  const dispatch = useAppDispatch();
  const convention = useSelector((state: RootState) => state.convention);
  const user = useSelector((state: RootState) => state.user);

  const handleIncrement = () => {
    if (!user.like.includes(index)) {
      dispatch(increment(index));
      dispatch(addLike(index));
    }
  };

  return (
    <div className="componentsLike">
      <div className="progress">
        <p className="like">
          <img src="img/like.png" onClick={handleIncrement} />
          {convention[index].like}
        </p>
      </div>
    </div>
  );
};
export default Like;
