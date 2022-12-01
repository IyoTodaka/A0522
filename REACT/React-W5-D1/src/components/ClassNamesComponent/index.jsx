import React from "react";
import cx from "classnames"

function ClassNamesComponent() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  const [isCurrentPage, setIsCurrentPage] = React.useState(false);

  const headerClass = cx("Header", {
    dark: isThemeDark,
    active: isCurrentPage
  })

  return (
    <div>
      {/* <h3 className={`Header ${isThemeDark && "dark"} ${isCurrentPage && "active"}`}>ClassNames</h3> */}
      <h3 className={headerClass}>ClassNames</h3>
      <button className="btn" onClick={() => setIsThemeDark(!isThemeDark)}>
        Dark mode: {String(isThemeDark)}
      </button>
      <button className="btn" onClick={() => setIsCurrentPage(!isCurrentPage)}>
        Active: {String(isCurrentPage)}
      </button>
    </div>
  );
}

export default ClassNamesComponent;
