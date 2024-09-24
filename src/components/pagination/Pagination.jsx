import React from "react";

const Pagination = ({ productPerPage, currentPage, setCurrentPage, totalProducts }) => {
	function prevPage() {
		setCurrentPage((prev) => {
			if (prev <= 1) {
				return prev;
			} else {
				return prev - 1;
			}
		});
	}
	function nextPage() {
		setCurrentPage((prev) => {
			if (prev >= Math.ceil(totalProducts / productPerPage)) {
				return prev;
			} else {
				return prev + 1;
			}
		});
	}
	return (
		<div className="w-full flex flex-col items-center justify-center mt-8">
			<div className=" space-x-4 ">
				<button className="px-6 py-3 bg-blue-400 rounded-l" onClick={prevPage}>
					«
				</button>
				<button className="px-6 py-3 bg-blue-400 rounded">Page {currentPage} of {Math.ceil(totalProducts / productPerPage)}</button>
				<button className="px-6 py-3 bg-blue-400 rounded-r" onClick={nextPage}>
					»
				</button>
			</div>
		</div>
	);
};

export default Pagination;
