import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, HeartPulse, Stethoscope, Syringe, Baby, Users, FileSearch, Microscope, Coffee } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Accidents & Emergency",
      description: "24/7 rapid response and critical care for medical emergencies and trauma.",
      icon: <Activity className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Intensive Care Unit",
      description: "State-of-the-art monitoring and life support for critically ill patients.",
      icon: <HeartPulse className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Renal Dialysis",
      description: "Advanced dialysis center providing comfortable and effective treatment for kidney conditions.",
      icon: <Activity className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Medicine",
      description: "Comprehensive internal medicine services for diagnosis and treatment of adult diseases.",
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Surgery",
      description: "Expert surgical procedures performed in modern, fully-equipped operating theaters.",
      icon: <Syringe className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Paediatrics",
      description: "Specialized medical care for infants, children, and adolescents.",
      icon: <Baby className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Obstetrics and Gynecology",
      description: "Complete women's health services, from routine checkups to maternity care.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Investigations/Wellness Screening",
      description: "Preventative health checkups and comprehensive wellness screening packages.",
      icon: <FileSearch className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Diagnostic Support Services",
      description: "Accurate and timely laboratory and imaging services to support clinical decisions.",
      icon: <Microscope className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Hospitality",
      description: "Comfortable 5-star wards and amenities to ensure a pleasant stay for our patients.",
      icon: <Coffee className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored to meet your medical needs with excellence and compassion.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
