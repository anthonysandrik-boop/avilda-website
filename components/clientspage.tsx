import { ClientLogos } from './ClientLogos';
import { PremiumTestimonials } from './PremiumTestimonials';

export function ClientsPage() {
  return (
    <div className="bg-white">
      {/* Client Logos Section */}
      <ClientLogos />

      {/* Client Testimonials Section */}
      <PremiumTestimonials />
    </div>
  );
}
