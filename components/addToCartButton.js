import { useMutation } from '@tanstack/react-query'
import { addToCart } from 'services/storeAPI'

export default function AddToCartButton({ pid, colorSelected, storageSelected, updateCartSize }) {

  const mutation = useMutation(
    (productSelected) => addToCart(productSelected),
    {
      onSuccess: () => {updateCartSize()}
    }
  );

  return (
    <>
    byee
    <button onClick={() => {
        mutation.mutate({ id: pid, colorCode: colorSelected, storageCode: storageSelected })
      }}
    >
      Add to cart
    </button>
    </>
  )
}