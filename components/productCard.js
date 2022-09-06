import Link from 'next/link';
import { Paper, Image, Center, Group, Box, Grid } from '@mantine/core';
import { memo } from 'react';

function ProductCard({product}) {
  return (
    <Grid.Col span={3}>
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
            />
          </Center>
          <Box
            p="md"
            style={{"maxWidth":"50%"}}
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