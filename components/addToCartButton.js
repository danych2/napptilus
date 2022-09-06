import { Box, Button } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';
import { addToCart } from 'services/storeAPI';

export default function AddToCartButton({ pid, colorSelected, storageSelected, updateCartSize, dataIsReady }) {

  const { mutate, isLoading } = useMutation(
    (productSelected) => addToCart(productSelected),
    {
      onSuccess: () => {updateCartSize()}
    }
  );

  return (
    <Box sx={{width:"50%"}}>
      <Button
        className="addToCartButton"
        variant="filled"
        color="gray"
        loading={isLoading || !dataIsReady}
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