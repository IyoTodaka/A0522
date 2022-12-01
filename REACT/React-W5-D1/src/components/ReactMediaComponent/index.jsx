import React from "react";
import Media from "react-media";

function ReactMediaComponent() {
  const breakpoints = {
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  };

  return (
    <>
      <h3>React Media</h3>
      <Media queries={breakpoints}>
        {(matches) => (
          <>
            {matches.small && <p>This is a small screen</p>}
            {matches.medium && <p>This is a medium screen</p>}
            {matches.large && <p>This is a large screen</p>}
          </>
        )}
      </Media>
    </>
  );
}

export default ReactMediaComponent;
