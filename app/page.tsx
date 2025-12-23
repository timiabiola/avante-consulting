import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Founders from '@/components/Founders'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Journey />
      <Founders />
      <ContactForm />
      <Footer />
    </main>
  )
}
