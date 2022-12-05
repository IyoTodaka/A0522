import React, { useRef, useEffect } from "react";

const Search = () => {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  return (
    <form>
      <input type="search" ref={input} />
    </form>
  );
};

export default Search;
