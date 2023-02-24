import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const SideList = () => {

  const [state, setState] = useState("")
  useEffect(() => {
    axios({
      method: "get",
      url: "/api/popular-keyword",
      responseType: "json",
    }).then(function (res) {
      setState(res.data)
    });
  }, []);
  
  return (
    <div className="sideList">
      <p>검색 많은 순위</p>
      <ul>
        <li>
          <span>1위</span>
          <span>{state[0]}</span>
        </li>
        <li>
          <span>2위</span>
          <span>{state[1]}</span>
        </li>
        <li>
          <span>3위</span>
          <span>{state[2]}</span>
        </li>
        <li>
          <span>4위</span>
          <span>{state[3]}</span>
        </li>
        <li>
          <span>5위</span>
          <span>{state[4]}</span>
        </li>
      </ul>
    </div>
  );
};

export default SideList;
