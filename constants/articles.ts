export const ARTICLE_TYPES = ['definite', 'indefinite'] as const;
export const CASES = ['nominative', 'accusative', 'dative', 'genitive'] as const;
export const GENDERS = ['masculine', 'feminine', 'neuter', 'plural'] as const;

export const ALL_ARTICLES = {
  definite: {
    nominative: {
      masculine: 'der',
      feminine: 'die',
      neuter: 'das',
      plural: 'die',
    },
    accusative: {
      masculine: 'den',
      feminine: 'die',
      neuter: 'das',
      plural: 'die',
    },
    dative: {
      masculine: 'dem',
      feminine: 'der',
      neuter: 'dem',
      plural: 'den',
    },
    genitive: {
      masculine: 'des',
      feminine: 'der',
      neuter: 'des',
      plural: 'der',
    },
  },
  indefinite: {
    nominative: {
      masculine: 'ein',
      feminine: 'eine',
      neuter: 'ein',
      plural: 'keine',
    },
    accusative: {
      masculine: 'einen',
      feminine: 'eine',
      neuter: 'eines',
      plural: 'keine',
    },
    dative: {
      masculine: 'einem',
      feminine: 'einer',
      neuter: 'einem',
      plural: 'keinen',
    },
    genitive: {
      masculine: 'eines',
      feminine: 'einer',
      neuter: 'eines',
      plural: 'keiner',
    },
  },
};

export const ARTICLE_OPTIONS = {
  definite: ['der', 'die', 'das', 'den', 'dem', 'des'],
  //TODO: what about adjective endings?
  indefinite: ['ein', 'eine', 'eines', 'einem', 'einen', 'einer', 'keine', 'keiner', 'keinen'],
};

export type GenderOption = (typeof GENDERS)[number];
export type CaseOption = (typeof CASES)[number];
export type ArticleType = (typeof ARTICLE_TYPES)[number];
