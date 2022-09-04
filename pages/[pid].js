import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { getProductDetails } from 'services/storeAPI'
import Link from 'next/link'
import AddToCartButton from 'components/addToCartButton';
import { CartContext } from 'utils/contexts';

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
          <select value={ colorSelected } onChange={(e)=>{setColor(e.target.value)}}>
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
          <select value={ storageSelected } onChange={(e)=>{setStorage(e.target.value)}}>
            {
              data.options.storages.map((storage) => {
                return (
                  <option key={storage.code} value={storage.code}>{storage.name}</option>
                )
              })
            }
          </select>
      </label>
      
      <CartContext.Consumer>
        {({size, incrementSize}) => (
          <AddToCartButton pid={pid} colorSelected={colorSelected} storageSelected={storageSelected} updateCartSize={incrementSize} />
        )}
      </CartContext.Consumer>
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