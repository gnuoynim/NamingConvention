import BaseLayout from "../layout/base-layout";
import ListComponent from "../components/list-component";
import SearchComponent from "../components/search-component";
import { useRouter } from "next/router";
import { useState } from "react";

const Index = () => {
  const router = useRouter();
  const [isShown, setIsShown] = useState(true);

  const handleClickRegister = () => {
    router.push("register");
  };
  const onClickDisplay = () => {
    setIsShown(false);
  };

  return (
    <BaseLayout>
      <div className="searchBox" onClick={onClickDisplay}>
        <SearchComponent />
        <span>
          <img src="/img/information.png" />
        </span>
      </div>
      <button
        type="button"
        className="customButton"
        onClick={handleClickRegister}
        style={{ display: isShown ? "none" : "block" }}
      >
        등록
      </button>
      <ListComponent />
    </BaseLayout>
  );
};

export default Index;
