import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { getProductDetails } from 'services/storeAPI';
import AddToCartButton from 'components/addToCartButton';
import { CartContext } from 'utils/contexts';
import { Grid, Center, Image, Divider, Box, Select, Text } from '@mantine/core';
import ProductDescription from 'components/productDescription';
import Link from 'next/link';

export default function ProductDetails() {
  const router = useRouter();
  const pid = router.query.pid;

  const [colorSelected, setColor] = useState(null);
  const [storageSelected, setStorage] = useState(null);

  // Fetch data
  const { data, isSuccess } = useQuery(
    ['productDetail', pid],
    () => getProductDetails(pid),
    {
      enabled: router.isReady,
      refetchInterval: 3600000,
      staleTime: 3600000,
      onSuccess: (data) => {
        setColor(data.options.colors[0].code)
        setStorage(data.options.storages[0].code)
      }
    },
  );

  const selectorStyle={
    width:"50%",
    '.mantine-Select-item[data-selected]': {
      backgroundColor: 'gray',
    },
    '.mantine-Select-item[data-selected]:hover': {
      backgroundColor: 'gray',
    },
    '.mantine-Input-input:focus-within': {
      borderColor: 'gray',
    },
  }

  return (
    <>
    <Grid columns={12} sx={{width:"100%", height:"95%", '.mantine-Col-root':{height:"100%"}}}>
      <Grid.Col span={6}>
        <Center style={{height:"80%"}}>
          {isSuccess?
            <Image
              withPlaceholder
              alt={data.model}
              src={data.imgUrl}
              height="300px"
              width="200px"
              fit="none"
            />
          :
          <Image
            withPlaceholder
            alt={"Loading"}
            src={null}
            height="300px"
            width="200px"
            fit="none"
          />
          }          
        </Center>
      </Grid.Col>
      <Grid.Col span={6}>
        <ProductDescription data={data} isSuccess={isSuccess} />
        <Divider my="sm" />
        <Box style={{height:"40%"}}>
          <Select
            label="Color"
            value={isSuccess?colorSelected:""}
            disabled={!isSuccess}
            onChange={setColor}
            data={
              isSuccess?
                data.options.colors.map(color => ({value: color.code, label: color.name}))
              : [{value:"", label: "Loading"}]
            }
            sx={selectorStyle}
          />
          <Select
            label="Storage"
            value={isSuccess?storageSelected:""}
            disabled={!isSuccess}
            onChange={setStorage}
            data={
              isSuccess?
                data.options.storages.map(storage => ({value: storage.code, label: storage.name}))
                : [{value:"", label: "Loading"}]
            }
            sx={selectorStyle}
          />
          <CartContext.Consumer>
            {({incrementSize}) => (
              <AddToCartButton pid={pid} colorSelected={colorSelected} storageSelected={storageSelected} updateCartSize={incrementSize}  dataIsReady={isSuccess} />
            )}
          </CartContext.Consumer>
        </Box>
      </Grid.Col>
    </Grid>
    <Center>
      <Link href="/">
        <Text size="sm" component="a" variant="link" color="gray" sx={{cursor:"pointer"}}>Go back</Text>
      </Link>
    </Center>
    </>
  )
}