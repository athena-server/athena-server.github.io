import React from 'react'

const Pagination = ({totalPosts, perPage, currentPage, setCurrentPage}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts/perPage); i++) {
    pages.push (i)
  }
  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "20px" }}>
      {pages.map((page, index) => (
        <button
          key = {index}
          style={{
            padding: "8px 12px",
            backgroundColor: currentPage === page ? "white" : "black",
            color: currentPage === page ? "black" : "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;