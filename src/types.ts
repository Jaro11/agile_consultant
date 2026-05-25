export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  deliverables: string[];
  metrics: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  brief: string;
  challenge: string;
  strategy: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  duration: string;
  year: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  specialties: string[];
  experience: number;
  almaMater: string;
}

export interface ConsultationRequest {
  name: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  focusArea: string;
  notes: string;
  date: string;
  time: string;
  advisorId: string;
}
