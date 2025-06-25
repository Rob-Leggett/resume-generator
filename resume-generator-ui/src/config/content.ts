export interface CertificationData {
  name: string;
  date: string;
  badgeUrl: string;
}

export const certifications: CertificationData[] = [
  {
    name: 'TOGAF 9.2 Certified',
    date: 'Apr 2021',
    badgeUrl: 'https://www.credly.com/badges/fb2d653a-96ac-4085-b4ee-ecc945137837',
  },
  {
    name: 'AWS Certified Security - Specialty (SCS)',
    date: 'Oct 2020 – Dec 2023',
    badgeUrl: 'https://www.credly.com/badges/8fbb4bcc-a9d0-4011-b880-42323086b314/public_url',
  },
  {
    name: 'Google Cloud Certified Professional Cloud Architect',
    date: 'Apr 2024 – Apr 2026',
    badgeUrl: 'https://www.credly.com/badges/4333b5c8-42d6-499a-b88f-ed926ae721ed/public_url',
  },
  {
    name: 'AWS Certified Solutions Architect - Associate (SAA)',
    date: 'Aug 2023 – Aug 2026',
    badgeUrl: 'https://www.credly.com/badges/2e25894d-1854-4541-a718-b11a9d76114d/public_url',
  },
];