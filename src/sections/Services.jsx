import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="flex flex-1 w-full max-container flex-wrap max-sm:flex-col max-sm:py-3 gap-9 justify-center">
      {services.map((service) => (
        <ServiceCard key={service.key} {...service}/>
      ))}
    </section>
  )
}

export default Services