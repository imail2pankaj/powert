import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components';
import Container from '../../containers/container'
import { applications } from '../../utils/constants';

export default function Application() {
  return (
    <Layout bgClass=" h-screen">
      <Head>
        <title>Applications</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className='my-16 text-center'>
          <h1 className='text-4-5xl font-bold  mb-8 md:mb-12'>Applications</h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 max-w-4xl mx-auto'>
            {applications.map(appl => (
              <div key={appl.name} className='flex justify-center items-center flex-col mb-6 md:mb-12'>
                <Image src={appl.images} alt={appl.name} width={70} height={70} />
                <p className='mt-4 font-bold'>{appl.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}