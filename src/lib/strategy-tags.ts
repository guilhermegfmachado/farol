// Language-independent tags for the "Estratégias sem IA" (strategies-without-AI)
// bullets — the actionable section of every profile. Tags let a teacher filter
// to what they can use right now. They attach by position: strategyTags[slug][i]
// tags the i-th strategy item, in the same order across all languages.
//
// Tag meaning (objective, so tagging stays consistent):
//   quick   — an in-the-moment move made during the lesson, no setup
//   no-prep — needs no materials prepared before class
//   no-tech — needs no digital device / software / AI
export type StrategyTag = 'quick' | 'no-prep' | 'no-tech';

// The section index of "Estratégias sem IA" within every profile's sections.
export const STRATEGY_SECTION_INDEX = 2;

const R: StrategyTag = 'quick';
const P: StrategyTag = 'no-prep';
const T: StrategyTag = 'no-tech';

export const strategyTags: Record<string, StrategyTag[][]> = {
  tdah:         [[R, P, T], [R, P, T], [R, P, T], [R, P, T]],
  dislexia:     [[T],       [R, P, T], [R, P, T], []],
  dispraxia:    [[R, P],    [T],       [T],       [R, P, T]],
  autismo:      [[R, P, T], [R, P, T], [R, P, T], [T]],
  sobredotacao: [[T],       [R, P, T], [R, P, T], [R, P, T]],
  plnm:         [[T],       [R, P, T], [R, P, T], [R, P, T]],
};

export const ALL_TAGS: StrategyTag[] = ['quick', 'no-prep', 'no-tech'];
