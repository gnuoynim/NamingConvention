import ScaleInterface from "../interface/scale-interface";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { removeDepth } from "../store/reducers/depth-reducer";

const DepthBoxComponent = ({ scale = "", index, id = "" }: ScaleInterface) => {
  const [state, setState] = useState(scale);
  const depth = useSelector((state: RootState) => state.depth);
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.count);

  const handleClickRemove = () => {
    dispatch(removeDepth(index));
    console.log(index);
  };

  return (
    <>
      <input
        data-id={id}
        type="text"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
      <div className="variation">
        <button type="button" onClick={handleClickRemove}>
          -
        </button>
      </div>
    </>
  );
};

export default DepthBoxComponent;
