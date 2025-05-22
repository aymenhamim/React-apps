import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { axiosInstance } from "@/store/slices/productsSlice";

const API_BASE_URL = "/backend";

async function TotalProducts() {
  let totalProducts = 0;
  let error = null;

  try {
    const response = await axiosInstance.get(
      `${API_BASE_URL}/api/products/count`
    );

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
