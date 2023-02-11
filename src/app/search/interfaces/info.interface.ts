export interface Info {
  id: string;
  terms: Term[];
  onts: Ont[];
  sections: Section[];
}

export interface Section {
  section: string;
  features: Feature3[];
}

export interface Feature3 {
  term: string;
  ontology: string;
  class: string;
}

export interface Ont {
  ontology: string;
  abs_count: number;
  features: Feature2[];
}

export interface Feature2 {
  section: string;
  term: string;
  class: string;
}

export interface Term {
  term: string;
  abs_count: number;
  features: Feature[];
}

export interface Feature {
  section: string;
  ontology: string;
  class: string;
}