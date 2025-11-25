export interface Job {
  id: string;
  title: string;
  description: string;
  organisation: string;
  location: string;
  salary?: string;
  closingDate?: string;
}

const jobs: Job[] = [ 
{ description: 'This is a fantastic job for a ...', location: '3 Glass Wharf, Bristol, BS2 OEL', organisation: 'Ministry of Defence', id: '1567', title: 'Policy Advisor', salary: '£45,000', closingDate: '20 December 2025'  },
{ description: 'This is a fantastic job for a ...', location: '2 Horse Guards, Whitehall, London, SW1A 2AX', organisation: 'College of Policing', id: '9488', title: 'Police Service - Volunteer Curator', closingDate: '20 December 2025' },
{ description: 'This is a fantastic job for a ...', location: '2 Horse Guards, Whitehall, London, SW1A 2AX', organisation: 'Home Office', id: '9487', title: 'Project Manager', salary: '£39,000 to £46,200', closingDate: '20 December 2025' },
{ description: 'This is a fantastic job for a ...', location: 'Benton Park Road, Newcastle upon Tyne, NE7 7LX', organisation: 'HM Revenue and Customs', id: '9489', title: 'Dentist', closingDate: '5 January 2026', salary: '£99,000' }
]

export function getJobs(): Job[] {
  return jobs;
}

export function getJobById(id: string): Job | undefined {
  return jobs.find((job) => job.id === id);
}