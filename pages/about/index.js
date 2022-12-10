import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components'
import Container from '../../containers/container'

export default function About() {
  return (
    <Layout bgClass={"h-full md:h-screen"}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="flex flex-col-reverse md:flex-row justify-between gap-6">
          <div className='my-16'>
            <h1 className='text-4-5xl font-bold mb-2'>
              Nanopowered <br />Technologies
            </h1>
            <p className='font-medium block mb-8'>
              Empowering Silicon with Digital<br /> and Analog Brains
            </p>
            <p className='primary-text block mb-4'>
              Nanopowered Technologies is a global semiconductor <br className="hidden md:block" />
              services provider with highly skilled resources in <br className="hidden md:block" />
              Analog and Digital ASIC from RTL to GDS-II and Mixed <br className="hidden md:block" />
              Signal Design.
            </p>
            <p className='primary-text block'>
              NpowerT's prudent roadmap aligns with long-term <br className="hidden md:block" />
              collaboration with our extreme customer base with <br className="hidden md:block" />
              continuous promotion of growth and triumph.
            </p>
          </div>
          <div className=" text-center pr-0 lg:pr-[120px] pb-4 flex-2">
            <Image src="/images/about-bg.png" width={550} height={550} />
          </div>
        </div>
      </Container>
    </Layout>
  )
}