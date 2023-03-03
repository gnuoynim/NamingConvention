import BaseLayout from "../layout/base-layout";
import List from "../components/list";
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
      </div>
      <button
        type="button"
        className="customButton"
        onClick={handleClickRegister}
        style={{ display: isShown ? "none" : "block" }}
      >
        등록
      </button>
      <List />
    </BaseLayout>
  );
};

export default Index;
