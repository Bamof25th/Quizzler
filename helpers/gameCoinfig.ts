import categoriesJSON from "@/public/assets/categories.json";

const MAX_QUESTIONS = 10;
const MIN_QUESTIONS = 5;
export const TIMES = [10, 20, 30, 60];
const DEFAULT_QUESTIONS = 5;
const DEFAULT_TIME = 30;
const INFINITE_GAME = false;
const TIME_MODE = false;

interface QueryValidatorProps {
  questions: number;
  time: number;
  categories: string[];
  infinite: boolean;
  timeMode: boolean;
}

export default function queryValidator(query: QueryValidatorProps) {
  const { questions, time, categories, infinite, timeMode } = query;
  const urlQueries: QueryValidatorProps = {
    questions: DEFAULT_QUESTIONS,
    time: DEFAULT_TIME,
    categories: [],
    infinite: INFINITE_GAME,
    timeMode: TIME_MODE,
  };
  if (questions) {
    if (questions < MIN_QUESTIONS || questions > MAX_QUESTIONS)
      urlQueries.questions = MAX_QUESTIONS;
  } else if (questions < MIN_QUESTIONS) {
    urlQueries.questions = MIN_QUESTIONS;
  } else {
    urlQueries.questions = DEFAULT_QUESTIONS;
  }
  if (time) {
    if (time > TIMES[TIMES.length - 1]) urlQueries.time = TIMES[TIMES.length - 1];
    else if (time < TIMES[0]) urlQueries.time = TIMES[0];
    else urlQueries.time = time;
  } else {
    urlQueries.time = DEFAULT_TIME;
  }

  if (infinite) {
    if (infinite === true) urlQueries.infinite = true;
    else urlQueries.infinite = false;
  }
  if (timeMode) {
    if (timeMode === true) urlQueries.timeMode = true;
    else urlQueries.timeMode = false;
  }

  if (categories) {
    const categoriesArrayFiltered = categories.filter((category) =>
      categoriesJSON.map((category) => category.id).includes(category)
    );
    if (categoriesArrayFiltered.length > 0)
      urlQueries.categories = categoriesArrayFiltered;
    else urlQueries.categories = categoriesJSON.map((category) => category.id);
  } else {
    urlQueries.categories = categoriesJSON.map((category) => category.id);
  }

  return urlQueries;
}
export const defaultQuestions = {
  minQuestions: MIN_QUESTIONS,
  maxQuestions: MAX_QUESTIONS,
};
export const defaultQuery = {
  questions: DEFAULT_QUESTIONS,
  time: DEFAULT_TIME,
  infinite: INFINITE_GAME,
  timeMode: TIME_MODE,
  categories: categoriesJSON.map((category) => category.id),
};
