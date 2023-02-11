export interface Article {
  paper_id: string;
  metadata: Metadata;
  body_text: Bodytext[];
  ref_entries: Refentries;
  back_matter: any[];
  bib_entries: Bibentries;
}

export interface Bibentries {
  BIBREF0: BIBREF0;
  BIBREF1: BIBREF1;
  BIBREF2: BIBREF1;
  BIBREF3: BIBREF1;
  BIBREF4: BIBREF1;
  BIBREF5: BIBREF1;
  BIBREF6: BIBREF1;
  BIBREF7: BIBREF1;
  BIBREF8: BIBREF1;
  BIBREF9: BIBREF1;
  BIBREF10: BIBREF0;
  BIBREF11: BIBREF1;
  BIBREF12: BIBREF1;
  BIBREF13: BIBREF0;
  BIBREF14: BIBREF1;
  BIBREF15: BIBREF1;
  BIBREF16: BIBREF0;
  BIBREF17: BIBREF1;
}

export interface BIBREF1 {
  title: string;
  authors: Author2[];
  year: number;
  venue: string;
  volume: string;
  issn: string;
  pages: string;
  other_ids: Otherids2;
}

export interface Otherids2 {
  DOI: any[];
}

export interface BIBREF0 {
  title: string;
  authors: Author2[];
  year: number;
  venue: string;
  volume: string;
  issn: string;
  pages: string;
  other_ids: Otherids;
}

export interface Otherids {
  DOI: string[];
}

export interface Author2 {
  first: string;
  middle: any[];
  last: string;
  suffix: string;
}

export interface Refentries {
  TABREF0: TABREF0;
  TABREF1: TABREF0;
  TABREF2: TABREF0;
}

export interface TABREF0 {
  text: string;
  type: string;
}

export interface Bodytext {
  text: string;
  cite_spans: Citespan[];
  section: string;
  ref_spans: Citespan[];
}

export interface Citespan {
  start: number;
  end: number;
  mention: string;
  ref_id: string;
}

export interface Metadata {
  title: string;
  authors: Author[];
}

export interface Author {
  first: string;
  middle: string[];
  last: string;
  suffix: string;
  email: string;
  affiliation: Affiliation;
}

export interface Affiliation {
}