import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function DocumentTitleOne() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Count - ${count}`
  // }, [count])     instead
  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment Count - {count}
      </button>
    </div>
  );
}

export default DocumentTitleOne;
