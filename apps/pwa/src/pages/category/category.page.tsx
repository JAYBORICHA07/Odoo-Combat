import { useSearchParams } from "react-router-dom";

function CategoryPage() {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("category"));

  return <div>CategoryPage</div>;
}

export default CategoryPage;
