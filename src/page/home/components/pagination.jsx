import { Link, useParams } from "react-router-dom";

export const Pagination = () => {
  const { page } = useParams();

  return (
    <>
      <nav aria-label="Page navigation ">
        <ul className="pagination">
          <li className={`page-item ${page === "1" ? "disabled" : ""}`}>
            <Link className="page-link" to={`/${Number(page) - 1}`}>
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to={`/${Number(page) + 1}`}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
