import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'services/storeAPI';
import { Grid, Group, TextInput, ScrollArea } from '@mantine/core';
import ProductCard from 'components/productCard';
import { useState } from 'react';

export default function Home() {
  const [filter, setFilter] = useState('');
  const filterLowercase = filter.toLowerCase();
  const { data, isSuccess } = useQuery(
    ['products'],
    getProducts,
    {
      refetchInterval: 3600000,
      staleTime: 3600000,
    }
  );

  return (
    <ScrollArea
    p="sm"
    type="always"
    offsetScrollbars
    sx={{
      height:"100%",
      '.mantine-ScrollArea-scrollbar[data-orientation="horizontal"]':{
        display: 'none',
        opacity: 0
      }
    }}
  >
    <Group m="xl" position="right">
      <TextInput
        placeholder="Buscar"
        size="md"
        value={filter}
        onChange={(event) => setFilter(event.currentTarget.value)} 
      />
    </Group>
    <Grid mr="md">
      {
        isSuccess?
          data.filter((product) =>
              product.brand.toLowerCase().includes(filterLowercase) || product.model.toLowerCase().includes(filterLowercase))
            .map((product) => {
            return (
              <ProductCard key={product.id} product={product} />
            )
          })
        :
          'Loading'
      }
    </Grid>
    </ScrollArea>
  )
}
