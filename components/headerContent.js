import { Text, Group, Stack, Center, Breadcrumbs } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function HeaderContent({cartSize}) {
  const router = useRouter();
  const items = [{name: 'products', url: '/'}];
  const pid = router.query.pid;
  if(pid) items.push({name: pid, url: `/${pid}`});
  
  return (
    <Stack spacing="xs" sx={{height:"100%"}}>
      <Group position="apart">
        <Image
          alt="ZARA PHONE"
          src={'/static/zaraphone.png'}
          width="417"
          height="29"
        />
        <Text size="sm" mr="xl">{`Products in cart: ${cartSize}`}</Text>
      </Group>
      <Center>
        <Breadcrumbs sx={{'a':{cursor:"pointer"}}}>
          {items.map(item => (
            <Link key={item.name} href={item.url}>
              <Text component="a" variant="link" color="gray">
                {item.name}
              </Text>
            </Link>
          ))}
        </Breadcrumbs>
      </Center>
    </Stack>
  )
}