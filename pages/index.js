import { useQuery } from '@tanstack/react-query'
import { getProducts } from 'services/storeAPI'
import { Grid, Group } from '@mantine/core';
import ProductCard from 'components/productCard';

export default function Home() {
  const response = useQuery(
    ['products'],
    getProducts,
    {
      refetchInterval: 3600000,
      staleTime: 3600000,
    }
  )
  const { data, isFetching, isSuccess } = response;
  return (
    <>
    <Group m="xl" position="right">
      Buscar
    </Group>
    <Grid>
      {
        isSuccess?
          data.map((product) => {
            return (
              <Grid.Col span={3} key={product.id}>
                <ProductCard product={product} />
              </Grid.Col>
            )
          })
        :
          'Loading'
      }
    </Grid>
    </>
  )
}
