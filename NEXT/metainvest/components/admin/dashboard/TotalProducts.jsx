import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function TotalProducts() {
  let totalProducts = 0;
  let error = null;

  try {
    const response = await fetch("http://127.0.0.1:8000/api/products/count", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    totalProducts = await response.json();
  } catch (err) {
    console.error("Error fetching product count:", err);
    error = "Failed to load product count";
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Products</CardTitle>
      </CardHeader>
      <CardContent>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p className="text-3xl font-bold">{totalProducts?.count}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default TotalProducts;
