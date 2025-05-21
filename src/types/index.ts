// Type definitions for the application

export interface DecorationService {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface VehicleService {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
}

export interface DrivingLicenseService {
  id: string;
  title: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  role?: string;
  content: string;
  imageUrl?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}