import { useQuery } from '@tanstack/react-query'
import { getProducts } from 'services/storeAPI'
import Link from 'next/link'

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
    <div>
      Hello Napptilus!
      {
        isSuccess?
          data.map((product) => {
            return (
              <div key={product.id}>
                <Link href={`/${product.id}`}>
                  <a data-cy='linkToProduct'>{`${product.brand}: ${product.model}`}</a>
                </Link>
              </div>
            )
          })
        :
          'Loading'
      }
    </div>
  )
}
