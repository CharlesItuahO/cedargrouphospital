import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Excellent healthcare services.",
      author: "Patient Review",
      rating: 5
    },
    {
      text: "Easy accessibility to health care services. Comfortable 5star wards and Dialysis center.",
      author: "Patient Review",
      rating: 5
    },
    {
      text: "State of the Art Equipment. They are high on Standard.",
      author: "Patient Review",
      rating: 5
    },
    {
      text: "The doctors and nurses were incredibly compassionate and attentive during my stay. I felt truly cared for.",
      author: "Patient Review",
      rating: 4
    },
    {
      text: "Very clean and serene environment. It doesn't feel like a typical hospital, which helped a lot with my anxiety.",
      author: "Patient Review",
      rating: 5
    },
    {
      text: "Quick response at the emergency ward. The staff is highly professional and knows exactly what to do.",
      author: "Patient Review",
      rating: 4
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Read what our patients have to say about their experience at Cedar Group Hospital.
          </p>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              <Star className="w-6 h-6 fill-current text-yellow-400/50" />
            </div>
            <span className="font-semibold text-white text-lg">4.4/5</span>
            <span className="text-blue-200">from 15 reviews</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md relative overflow-hidden">
                <div className="absolute top-4 right-4 text-blue-100">
                  <Quote className="w-12 h-12" />
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex text-yellow-400 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">Verified Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
