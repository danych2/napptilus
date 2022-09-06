import Link from 'next/link';
import { Paper, Image, Center, Group, Box, Grid } from '@mantine/core';
import { memo } from 'react';

function ProductCard({product}) {
  return (
    <Grid.Col sm={6} md={4} lg={3} className="linkToProduct">
    <Link href={`/${product.id}`}>
      <Paper
        withBorder
        shadow="md"
        radius="md"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: 'lightgray',
          },
        }}
      >
        <Group
          noWrap
        >
          <Center
            p="xs"
            m="xs"
            style={{
              "borderRadius": "5px",
              "backgroundColor": "white"
            }}
          >
            <Image
              alt=""
              src={product.imgUrl}
              width="110px"
              withPlaceholder
            />
          </Center>
          <Box
            p="md"
            sx={{maxWidth:"50%"}}
          >
            <b>{product.model}</b>
            <br />
            {product.brand}
            <br />
            {product.price?`${product.price}€`:'<unavailable>'}
          </Box>
        </Group>
      </Paper>
    </Link>
    </Grid.Col>
  )
}

export default memo(ProductCard);