import { Text, Group, Center, Breadcrumbs, Image, Grid } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HeaderContent({cartSize}) {
  const router = useRouter();

  // Create breadcrumbs URLs
  const items = [{name: 'products', url: '/'}];
  const pid = router.query.pid;
  if(pid) items.push({name: pid, url: `/${pid}`});

  return (
    <Grid spacing="xs" sx={{height:"100%"}}>
      <Grid.Col span={12} sx={{height:"90%"}}>
        <Group position="apart">
          <Link href="/">
            <Image
              className="linkHome"
              alt="ZARA PHONE"
              src={'/static/zaraphone.png'}
              withPlaceholder
              sx={{
                width:"40% !important",
                '.mantine-Image-image': {minWidth: "250px", cursor: "pointer"}
              }}
            />
          </Link>
          <Text size="sm" mr="xl" className="cartInfo" >{`${cartSize} product${cartSize==1?'':'s'} in cart`}</Text>
        </Group>
      </Grid.Col>

      <Grid.Col span={12}>
        <Center>
          <Breadcrumbs sx={{'a':{cursor:"pointer"}}}>
            {items.map(item => (
              <Link key={item.name} href={item.url}>
                <Text size="xs" component="a" variant="link" color="gray">
                  {item.name}
                </Text>
              </Link>
            ))}
          </Breadcrumbs>
        </Center>
      </Grid.Col>
    </Grid>
  )
}