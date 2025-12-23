import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import AvanteAdvantage from '@/components/AvanteAdvantage'
import Testimonials from '@/components/Testimonials'
import Founders from '@/components/Founders'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Journey />
      <AvanteAdvantage />
      <Testimonials />
      <Founders />
      <ContactForm />
      <Footer />
    </main>
  )
}
