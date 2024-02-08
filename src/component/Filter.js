import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  return (
    <>
      <h1>Filter (Query params): {name}</h1>
      <button onClick={() => setSearchParams({ name: "S", city: "yy" })}>
        Set name in query params
      </button>
    </>
  );
}

export default Filter;
