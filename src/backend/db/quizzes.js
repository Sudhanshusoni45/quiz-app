import { marvel } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95d18",
    title: "You Can WIN",
    totalScore: 20,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "Which season Harvey is the Most Badass One",
        options: ["Season 1", "Season 2", "Season 6", "Every Season"],
        answer: "Every Season",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "In which season does Mike was imprisoned",
        options: ["Season 3", "Season 5", "Season 7", "Season 4"],
        answer: "Season 4",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "Harvey had what kind of emotional problems",
        options: ["Attachment Issues", "Panic Attack", "Trauma", "Stress"],
        answer: "Attachment Issues",
      },
    ],
    catergoryName: "TV Show",
  },
  {
    _id: "3fe396q5-140b-4075-82f3-949a4dc95d18",
    title: "MARVEL",
    totalScore: 20,
    coverImage: marvel,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "How many Infinity Stones are there?",
        options: ["7", "4", "6", "8"],
        answer: "6",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "The spider that bit Peter Parker was …",
        options: ["Infectious", "Radioactive", "Venomous", "Poisonous"],
        answer: "Season 4",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question:
          "What type of radiation gave Bruce Banner the ability to turn into the Hulk?",
        options: ["Gamma", "Infrared", "Ultraviolet", "Microwave"],
        answer: "Attachment Issues",
      },
    ],
    catergoryName: "TV Show",
  },
];
