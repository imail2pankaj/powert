import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <>
      <Link href={'/'}>
        <Image src="/images/logo-white.png" alt="logo" height={26} width={135} />
      </Link>
    </>
  )
}

export default Logo