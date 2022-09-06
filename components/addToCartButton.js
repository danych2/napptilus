import { Box, Button } from '@mantine/core';
import { useMutation } from '@tanstack/react-query'
import { addToCart } from 'services/storeAPI'

export default function AddToCartButton({ pid, colorSelected, storageSelected, updateCartSize }) {

  const { mutate, isLoading } = useMutation(
    (productSelected) => addToCart(productSelected),
    {
      onSuccess: () => {updateCartSize()}
    }
  );

  return (
    <Box sx={{width:"50%"}}>
      <Button
        variant="outline"
        color="gray"
        loading={isLoading}
        loaderPosition="right"
        onClick={() => {
          mutate({ id: pid, colorCode: colorSelected, storageCode: storageSelected })
        }}
        mt="md"
        sx={{width:"50%", float:"right"}}
      >
        🛒 Add to cart
      </Button>
    </Box>
  )
}