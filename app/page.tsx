import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Building2, Users, ArrowRight, Star, PhoneCall, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://picsum.photos/seed/hospital/1920/1080"
            alt="Hospital Background"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Welcome to Cedar Group Hospital
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We Care About <span className="text-blue-600">Your Health</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Providing excellent health services at an accessible location with affordable costs and dedicated professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 h-14">
                <Link href="/contact#appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 h-14">
                <a href="tel:07045669178">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">24/7 Availability</h3>
                <p className="text-blue-100 text-sm">We are always open for you</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Accessible Location</h3>
                <p className="text-blue-100 text-sm">Festac Town, Lagos</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Emergency Contact</h3>
                <p className="text-blue-100 text-sm">07045669178</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Excellence in Healthcare Delivery
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our watchword is offering excellent health services, at an accessible location on equally affordable cost with dedicated professionals.
              </p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our scope of health services covers most area of medical practice available in Third World Countries. Our facility is a specialist based practice, as the patients are routinely referred to the relevant specialist within the system, at short notice.
              </p>
              <Button asChild variant="link" className="text-blue-600 p-0 text-lg font-semibold hover:text-blue-700">
                <Link href="/about" className="flex items-center">
                  Learn more about us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/seed/doctor/800/600"
                alt="Medical Professionals"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Cedar Group Hospital?</h2>
            <p className="text-gray-600 text-lg">We are committed to providing the highest standard of medical care with compassion and professionalism.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
                <p className="text-gray-600">Our emergency and inpatient services are available round the clock to ensure you get care when you need it most.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Facilities</h3>
                <p className="text-gray-600">Equipped with state-of-the-art medical technology and comfortable, clean, and odor-free environments for optimal recovery.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Staff</h3>
                <p className="text-gray-600">Our team consists of highly skilled doctors, nurses, and specialists dedicated to compassionate patient care.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4].map((i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  <Star className="w-5 h-5 fill-current text-yellow-400/50" />
                </div>
                <span className="font-semibold text-gray-900">4.4/5</span>
                <span className="text-gray-500">from 15 reviews</span>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link href="/testimonials">View All Reviews</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "Excellent healthcare services.",
                author: "Patient Review"
              },
              {
                text: "Easy accessibility to health care services. Comfortable 5star wards and Dialysis center.",
                author: "Patient Review"
              },
              {
                text: "State of the Art Equipment. They are high on Standard.",
                author: "Patient Review"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-gray-50 border-none">
                <CardContent className="p-6">
                  <div className="flex text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <p className="font-semibold text-gray-900">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
