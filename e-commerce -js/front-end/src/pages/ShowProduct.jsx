import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../redux/slices/productsSlice';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ShowProduct = () => {
  // Import dispatcher from react-redux
  const dispatch = useDispatch();

  // Use the state
  const { isLoading, product } = useSelector(state => state.products);

  // get id from URL by react-router-dom
  const { id } = useParams();

  useEffect(
    function () {
      // fetch data by Id
      dispatch(fetchProductById(id));
    },
    [dispatch],
  );

  const discountAmount = (product.price * product.discount) / 100 || 0;
  let newPrice = product.price - discountAmount;
  newPrice = newPrice.toFixed(2);

  return (
    <div className="w-full">
      {isLoading ? (
        <p className="text-center">loading...</p>
      ) : (
        <div className="relative flex justify-evenly rounded-xl bg-stone-100 px-6 py-6 shadow-sm">
          <Link to={'/products'} className="absolute right-12 font-semibold">
            Back
          </Link>
          <div className="flex flex-col content-center gap-3 border bg-stone-50 px-2 py-2">
            <img src={product.img} alt="" className="mx-auto w-60" />
            <div className="images flex gap-2">
              {product.images?.map((img, i) => (
                <img
                  src={img}
                  className="w-32 border border-stone-500"
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="mt-20 w-[40%]">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="my-3">{product.description}</p>

            <div className="my-4 flex items-center gap-4">
              <p className="font-bold">{newPrice} DH </p>
              <span className="text-sm text-stone-500 line-through">
                {product.price} DH
              </span>
            </div>
            <p>stock ({product.quantity})</p>

            <Button className="my-3">Add to cart</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
