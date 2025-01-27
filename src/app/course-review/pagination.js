const Pagination = ({totalPosts, perPage, currentPage, setCurrentPage}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts/perPage); i++) {
    pages.push (i)
  }
  return (
    <div className = "flex justify-center">
      {pages.map((page, index) => (
        <button
          key = {index}
          className={`w-[36px] h-[36px] border ${currentPage === page ? "bg-white text-black" : "bg-black text-white"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;