export interface Word {
  title: string;
  autor: string;
  cite: string;
  PMID: string;
  paper_id: string;
  keyword: string;
  category: string;
  year: number;
  onts: string[];
  classes: string[];
  abstract: Abstract[];
}

export interface Abstract {
  introduccion: string;
  areas_covered: string;
  expert_opinion: string;
  keywords: string;
}