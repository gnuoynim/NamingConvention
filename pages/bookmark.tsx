import BaseLayout from "../layout/base-layout";


const Bookmark = () => {
  return (
    <BaseLayout>
      <div>
        Bookmark
        <div>
            <p>
                자주사용하는 단어
                <span>container</span>
            </p>
        </div>
        <div>
            <p>
                좋아요 표시한 단어 
                <span>like</span>
            </p>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Bookmark;
