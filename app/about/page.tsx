import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Learn more about Cedar Group Hospital and our commitment to providing excellent healthcare services.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/seed/hospital-building/800/1000"
                alt="Cedar Group Hospital Building"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview of Cedar Group Hospital</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  The Cedar Group Hospital was established in 2001 with the objective of providing quality primary, secondary and tertiary healthcare services.
                </p>
                <p>
                  We show tremendous care for our patients because we believe in the sanctity of human life. All our clients are seen as human beings not just as patients, bearing in mind that psychological relief is fundamental to recovery from the ailment.
                </p>
                <p>
                  Therefore, we approach our treatment modulation from a <strong>HOLISTIC</strong> point of view as recommended by the World Health Organization (WHO).
                </p>
              </div>

              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Professional Healthcare Staff</h3>
                    <p className="text-gray-600">Our team comprises highly trained and experienced medical professionals dedicated to your well-being.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Clean and Serene Environment</h3>
                    <p className="text-gray-600">We maintain a pristine, odor-free facility to promote comfort and faster recovery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Patient-Centered Care</h3>
                    <p className="text-gray-600">Every treatment plan is tailored to the individual needs of our patients, focusing on holistic healing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Image src="https://picsum.photos/seed/mission/64/64" alt="Mission" width={32} height={32} className="rounded-full" referrerPolicy="no-referrer" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Treating patients as human beings rather than just cases, focusing on both physical and psychological recovery as recommended by the World Health Organization.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Image src="https://picsum.photos/seed/vision/64/64" alt="Vision" width={32} height={32} className="rounded-full" referrerPolicy="no-referrer" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dedicated to continuous medical education, professional collaboration, and upgrading capabilities to enhance patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
