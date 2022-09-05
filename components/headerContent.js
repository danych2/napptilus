import { Text, Group, Stack, Center, Breadcrumbs } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function HeaderContent({cartSize}) {
  const router = useRouter()
  const items = [<Link key="products" href="/">products</Link>]
  const pid = router.query.pid
  if(pid) items.push(<Link key={pid} href={`/${pid}`}>{pid}</Link>)
  return (
    <Stack spacing="xs">
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
        <Breadcrumbs>
          {items}
        </Breadcrumbs>
      </Center>
    </Stack>
  )
}