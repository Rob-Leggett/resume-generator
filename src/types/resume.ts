// Resume data types for template system

export interface ProfileData {
  name?: string;
  email?: string;
  mobile?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  picture?: string;
}

export interface CertificationData {
  name: string;
  date: string;
  badgeUrl: string;
}

export interface AchievementData {
  name: string;
  description: string;
}

export interface SkillData {
  type: string;
  description: string;
}

export interface EducationData {
  school: string;
  name: string;
  date: string;
}

export interface ExperienceData {
  role: string;
  period: string;
  company: string;
  description: string[];
}

export interface ResumeData {
  profile: ProfileData;
  summary: string[];
  experiences: ExperienceData[];
  skills: SkillData[];
  education: EducationData[];
  certifications: CertificationData[];
  achievements: AchievementData[];
}

export interface ThemeDefinition {
  name: string;
  displayName: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    heading: string;
    accent: string;
    link: string;
    border: string;
    error: string;
  };
  typography: {
    fontFamily: string;
    fontFamilyHeading: string;
    baseFontSize: string;
    headingScale: number;
  };
  spacing: {
    unit: string;
    panelPadding: string;
    sectionGap: string;
  };
  borderRadius: string;
}
