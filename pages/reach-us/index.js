import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components'
import Container from '../../containers/container'

export default function Reach() {
  return (
    <Layout bgClass={`h-screen`}>
      <Head>
        <title>Reach Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className='my-16 border-2  border-[#181F46] p-8 rounded-[33px] bg-[#111633] flex flex-col-reverse md:flex-row justify-between'>
          <div>
            <div className='flex items-start gap-4 mb-4'>
              <Image src={`/images/location.png`} alt={"Location"} width={27} height={38} />
              <div className='max-w-xs text-lg'>
                <p className='font-bold'>WeWork Rajapushpa</p>
                <p>Nanakramguda Rd, Financial District, Manikonda Jagir, Telangana 500032, India</p>
              </div>
            </div>
            <div className='flex items-start gap-4 mb-4'>
              <Image src={`/images/phone.png`} alt={"phone"} width={27} height={27} />
              <div className='max-w-xs text-lg'>
                <p className='font-bold'>+91 82736 22726</p>
              </div>
            </div>
            <div className='flex items-start gap-4'>
              <Image src={`/images/email.png`} alt={"email"} width={27} height={19} />
              <div className='max-w-xs text-lg'>
                <p className='font-bold'>info@npowert.com</p>
              </div>
            </div>
          </div>

          <div className="text-center pr-0 pb-4 flex-2 mb-0 md:mb-4">
            <div className='flex gap-4 justify-between'>
              <div className=' flex flex-col gap-4'>
                <Image src="/images/contact-bg-1.png" alt='Contact Us Image 1' width={200} height={150} />
                <Image src="/images/contact-bg-2.png" alt='Contact Us Image 3' width={200} height={150} />
              </div>
              <div>
                <Image src="/images/contact-bg-3.png" className='object-center' alt='Contact Us Image 3' width={150} height={200} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}