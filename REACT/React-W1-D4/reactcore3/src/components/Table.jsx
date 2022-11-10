import React from "react";

const Table = ({ list }) => {
  return (
    <div className="table">
      <div className="table-header">
        <span style={{ width: "40%" }}>Title</span>
        <span style={{ width: "20%" }}>Author</span>
        <span style={{ width: "20%" }}>Number of Comments</span>
        <span style={{ width: "20%" }}>Points</span>
      </div>
      {list.map((item) => (
        <div className="table-row" key={item.objectID}>
          <span style={{ width: "40%" }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: "20%" }}>{item.author}</span>
          <span style={{ width: "20%" }}>{item.num_comments}</span>
          <span style={{ width: "20%" }}>{item.points}</span>
        </div>
      ))}
    </div>
  );
};

export default Table;
