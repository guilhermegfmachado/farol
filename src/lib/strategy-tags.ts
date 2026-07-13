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
  discalculia:  [[T],       [R, P],    [R, P, T], [R, P, T]],
};

export const ALL_TAGS: StrategyTag[] = ['quick', 'no-prep', 'no-tech'];

// Measure tier per Portugal's Decreto-Lei 54/2018 (multi-tiered measures).
// The concept is PT law, but the tiering reads universally: 'universal' =
// whole-class practice, 'selective' = targeted support for this student.
// 'Additional' measures (formal, individualised, team-decided) are beyond
// the scope of in-class strategy cards, so no strategy carries that tier —
// the legend on the strategies page explains all three and links to the
// Legal Framework card.
export type StrategyTier = 'universal' | 'selective';

const U: StrategyTier = 'universal';
const S: StrategyTier = 'selective';

// Position-aligned with strategyTags: strategyTiers[slug][i] tiers the i-th strategy.
export const strategyTiers: Record<string, StrategyTier[]> = {
  tdah:         [U, S, S, S],
  dislexia:     [S, U, U, U],
  dispraxia:    [S, S, U, U],
  autismo:      [U, U, S, S],
  sobredotacao: [S, S, S, U],
  plnm:         [S, U, S, S],
  discalculia:  [U, S, S, U],
};

export const ALL_TIERS: StrategyTier[] = ['universal', 'selective'];
