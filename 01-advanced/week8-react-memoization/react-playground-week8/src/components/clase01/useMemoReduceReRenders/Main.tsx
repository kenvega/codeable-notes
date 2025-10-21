import * as React from "react";
import List from "./List";

export default function Main() {
  const [sortOrder, setSortOrder] = React.useState("asc");

  const options = React.useMemo(
    () => ({
      sortBy: "name",
      sortOrder: sortOrder,
    }),
    [sortOrder]
  );

  return (
    <div className="app">
      <h1>Lista Ordenada</h1>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <List options={options} />
    </div>
  );
}
