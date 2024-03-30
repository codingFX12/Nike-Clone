import {
  Header,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer
} from './sections'

import { Nav } from './components/index'

const App = () => {
  return (
    <main className="relative bg-slate-100">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Header />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-sky-50 padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  )
}

export default App