// CareerCatch TypeScript Domain Types

export interface Course {
  id: number
  title: string
  category: string
  instructor: string
  instructorAvatar: string
  thumbnail: string
  rating: number
  reviews: number
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  price: number
  originalPrice: number
}

export interface Mentor {
  name: string
  role: string
  company: string
  experience: string
  avatar: string
  linkedin?: string
  bio?: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  text: string
  rating: number
  hike?: string
}

export interface FAQItem {
  q: string
  a: string
  category?: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  metrics?: string
  difficulty?: 'Beginner' | 'Intermediate' | 'Production Grade'
  image?: string
}

export interface HiringPartner {
  name: string
  logo?: string
  tier?: 'tier1' | 'tier2' | 'unicorn'
}
