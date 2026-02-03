export type Pill = {
  label: string;
  x: string;
  y: string;
  r: string;
};

export interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
}

export interface WorkDescription {
  intro: string;
  body?: string;
  skills?: string[];
  outro?: string;
}

export interface WorkItem {
  title: string;
  company: string;
  period: string;
  type: 'laptop' | 'keyboard' | 'hanger';
  description: WorkDescription;
}
