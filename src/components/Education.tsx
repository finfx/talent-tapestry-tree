
import { GraduationCap, Award, Calendar } from "lucide-react";

type EducationItem = {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  description?: string;
};

type CertificationItem = {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  credentialId?: string;
};

const Education = () => {
  const educationList: EducationItem[] = [
    {
      institution: "Independent",
      degree: "CompTIA Security+",
      period: "2025 - PRESENT",
      description: "In Progress (2025)"
    },
    {
      institution: "Independent",
      degree: "CompTIA Network+",
      period: "2025 - PRESENT",
      description: "In Progress (2025)"
    },
    {
      institution: "Independent",
      degree: "CompTIA A+",
      period: "2025 - PRESENT",
      description: "In Progress (2025)"
    },
    {
      institution: "CiiSec",
      degree: "CyberEPQ",
      period: "2024 - PRESENT",
      description: "In Progress (2024)"
    },
    {
      institution: "gecko community",
      degree: "BTEC speaking and listening",
      period: "2021 - 2022",
      description: "Distinction"
    },
    {
      institution: "gecko community",
      degree: "GCSE English language",
      period: "2021 - 2022",
      description: "Grade 4"
    }
  ];

  const certifications: CertificationItem[] = [
    {
      name: "Google IT Support Professional Certificate",
      issuer: "Google",
      date: "January 2023",
      description: "Comprehensive program covering troubleshooting, customer service, networking, operating systems, system administration, and security."
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "May 2023",
      description: "In-depth training on security domains, security frameworks, and security controls. Learned about tools and programming languages, including Linux, SQL, and Python."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Education & Certifications</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            My educational background and professional certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>
            <div className="space-y-8">
              {educationList.map((edu, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-blue-600 font-medium">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="mt-2 text-gray-700">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-blue-600">{cert.issuer}</p>
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                  </div>
                  {cert.description && (
                    <p className="mt-2 text-gray-700 text-sm">{cert.description}</p>
                  )}
                  {cert.credentialId && (
                    <p className="mt-1 text-gray-500 text-xs">Credential ID: {cert.credentialId}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
