import offlineQuestions from "@/public/assets/questions.json";
const randomArray = (arr: any) => arr.toSorted(() => 0.5 - Math.random());

interface Question {
  question: string;
  answers: string[];
  topic: string;
  correctAnswer: string;
  userAnswer?: string;
  ia?: boolean;
}

export const getQuestions = (topics: string[], qNumber: number) => {
  const randomTopics = randomArray(topics);
  const messyTopics: string[] = [];
  for (let i = 0; i < qNumber; i++) {
    messyTopics.push(randomTopics[i % topics.length]);
  }

  function getOfflineQuestions() {
    const questionPerTopic: Record<string, number> = {};
    messyTopics.forEach((topic) => {
      questionPerTopic[topic] = (questionPerTopic[topic] || 0) + 1;
    });

    const questions: Question[] = [];

    Object.keys(questionPerTopic).forEach((topic) => {
      const topicQuestions = offlineQuestions[
        topic as keyof typeof offlineQuestions
      ] as Question[];
      randomArray(topicQuestions)
        .slice(0, questionPerTopic[topic])
        .forEach((question) => {
          questions.push({
            ...question,
            topic,
            answers: randomArray(question.answers),
            userAnswer: undefined,
            ia: false,
          });
        });
    });
    return questions;
  }

  if (process.env.NODE_ENV === "development") {
    return new Promise<Question[]>((resolve) => {
      setTimeout(() => {
        // const error = new Error('Custom error')
        // error.statusCode = 350
        // reject(error)

        resolve(randomArray(getOfflineQuestions()));
      }, 1 * 1000);
    });
  }

  const iaQuestions = fetch("/api/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ topics: messyTopics.slice(0, 3) }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.statusCode >= 400) {
        const error = new Error(data.message);
        throw error;
      } else return data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return iaQuestions
    .then((iaQuestions) =>
      randomArray([
        ...iaQuestions,
        ...getOfflineQuestions().slice(iaQuestions.length),
      ])
    )
    .catch(() => randomArray(getOfflineQuestions()));
};
