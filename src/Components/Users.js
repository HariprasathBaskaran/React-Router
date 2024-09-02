import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <h4>User1</h4>
      <h4>User2</h4>
      <h4>User3</h4>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>
      <h2>{ActiveUsers ? "showing Active user" : "showing all users"}</h2>
    </div>
  );
};

export default Users;
