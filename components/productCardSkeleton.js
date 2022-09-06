import Link from 'next/link';
import { Paper, Image, Center, Group, Box, Grid, Skeleton } from '@mantine/core';
import { memo } from 'react';

export default function ProductCardSkeleton() {
  return (
    <Grid.Col sm={6} md={4} lg={3}>
      <Paper
        withBorder
        shadow="md"
        radius="md"
        sx={{
          height: "188px",
        }}
      >
        <Group
          noWrap
          sx={{height:"100%"}}
        >
          <Center
            p="xs"
            m="xs"
            style={{
              "borderRadius": "5px",
              "backgroundColor": "white",
            }}
          >
            <Skeleton height={110} circle />
          </Center>
          <Box
            p="md"
            sx={{width:"50%", verticalAlign: "center"}}
          >
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={60} mt={6} />
            <Skeleton height={20} width={40} mt={6} />
          </Box>
        </Group>
      </Paper>
    </Grid.Col>
  )
}