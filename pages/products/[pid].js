import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getProductDetails, addToCart } from 'services/storeAPI'
import Link from 'next/link'

export default function ProductDetails() {
  const router = useRouter();
  const pid = router.query.pid;

  const { data, isSuccess } = useQuery(
    ['productDetail', pid],
    () => getProductDetails(pid),
    {
      enabled: router.isReady,
      refetchInterval: 3600000,
      staleTime: 3600000,
    },
  )

  const [colorSelected, setColor] = useState();
  const [storageSelected, setStorage] = useState();

  const mutation = useMutation(
    (productSelected) => addToCart(productSelected)
  );

  useEffect(() => {
    if(isSuccess) {
      setColor(data.options.colors[0].code)
      setStorage(data.options.storages[0].code)
    }
  }, [isSuccess, data])

  let content;
  if (isSuccess) {
    content = (
      <>
      <label>
          Color:
          <select value={ colorSelected || data.options.colors[0].code } onChange={(e)=>{setColor(e.target.value)}}>
            {
              data.options.colors.map((color) => {
                return (
                  <option key={color.code} value={color.code}>{color.name}</option>
                )
              })
            }
          </select>
      </label>
      <label>
          Storage:
          <select value={ storageSelected || data.options.storages[0].code } onChange={(e)=>{setStorage(e.target.value)}}>
            {
              data.options.storages.map((storage) => {
                return (
                  <option key={storage.code} value={storage.code}>{storage.name}</option>
                )
              })
            }
          </select>
      </label>
      <button onClick={() => {
          mutation.mutate({ id: pid, colorCode: colorSelected, storageCode: storageSelected })
        }}
      >
        Add to cart
      </button>
      </>
    )
  } else {
    content = 'Loading';
  }

  return (
    <>
      {content}
      <br />
      <Link href='/'>Go back</Link>
    </>
  )
}