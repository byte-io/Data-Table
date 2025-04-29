import { useState } from "react";
import users from "./user.json";

const formatPagination = (pageItem, onPage) => {
  const end = onPage * pageItem;
  const start = end - pageItem;
  const totalPage = Math.ceil(users.length / pageItem);
  const pageUsers = users.slice(start, end);

  return { pageUsers, totalPage };
};

export const DataTable = () => {
  const [pageItem, setPageItem] = useState(5);
  const [onPage, setOnPage] = useState(1);

  const { pageUsers, totalPage } = formatPagination(pageItem, onPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {pageUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />

      <select
        onChange={(event) => {
          setPageItem(+event.target.value);
          setOnPage(1);
        }}
      >
        {[5, 10, 20].map((item) => (
          <option key={item} value={item}>
            show {item}
          </option>
        ))}
      </select>
      <button
        onClick={() => setOnPage((prev) => prev - 1)}
        disabled={onPage === 1}
      >
        Prev
      </button>
      <span>
        {onPage} of Page {totalPage}
      </span>
      <button
        onClick={() => setOnPage((prev) => prev + 1)}
        disabled={onPage === totalPage}
      >
        Next
      </button>
    </div>
  );
};

//use css to align div side by side and one above other
//fix the position of footer, header and tableHeader
