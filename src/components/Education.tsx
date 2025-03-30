
import { GraduationCap, Award, Calendar } from "lucide-react";

type EducationItem = {
  title: string;
  institution?: string;
  status: string;
  period: string;
};

type CertificationItem = {
  title: string;
  institution?: string;
  year: string;
};

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      title: "CompTIA Security+",
      status: "Independent • In Progress (2025)",
      period: "2025 - PRESENT"
    },
    {
      title: "CompTIA Network+",
      status: "Independent • In Progress (2025)",
      period: "2025 - PRESENT"
    },
    {
      title: "CompTIA A+",
      status: "Independent • In Progress (2025)",
      period: "2025 - PRESENT"
    },
    {
      title: "Cyber/ISPO",
      status: "Independent • In Progress (2024)",
      period: "2024 - PRESENT"
    },
    {
      title: "IETSC speaking and listening",
      status: "gelos community",
      period: "2021 - 2022"
    },
    {
      title: "Distinction",
      status: "GCSE English language community",
      period: "2021 - 2022"
    },
    {
      title: "Grade 4",
      status: "GCSE Maths",
      period: ""
    }
  ];

  const certifications: CertificationItem[] = [
    {
      title: "Microsoft Windows",
      institution: "University of Bath",
      year: "2023"
    },
    {
      title: "Cyber safety at Cefac",
      institution: "Sellafield",
      year: "2023"
    },
    {
      title: "CompTIA Network+ (Progress 2023)",
      year: "2023"
    },
    {
      title: "CompTIA Security+ (Progress 2023)",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Education & Certifications</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            My educational background and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.status}</p>
                    {item.period && (
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {item.period}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold text-gray-900">{cert.title}</h4>
                    {cert.institution && <p className="text-gray-600">{cert.institution}</p>}
                    <div className="flex items-center text-gray-500 text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* References Section */}
            <div className="mt-12">
              <div className="flex items-center mb-8">
                <div className="h-8 w-8 text-blue-600 mr-3 flex items-center justify-center">
                  <span className="text-xl font-bold">@</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Reference</h3>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900">Katy Maxwell</h4>
                <p className="text-gray-600">Founder & Director</p>
                <p className="text-gray-500 mt-2">
                  Email: info@studiomix.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
