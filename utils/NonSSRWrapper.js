import dynamic from 'next/dynamic'

function NonSSRWrapper (props) {
  return ( 
    <>
      {props.children}
    </> 
  )
}

export default dynamic(() => Promise.resolve(NonSSRWrapper), { 
    ssr: false 
})