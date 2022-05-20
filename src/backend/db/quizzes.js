import { dc, marvel } from "../../assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: "3fe39675-140b-4075-82f3-949a4dc95d18",
    title: "DC",
    description:
      "Play a quiz on Detective Comics Cinematic Universe and test you knowledge",
    totalScore: 20,
    coverImage: dc,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "DC Comics is a subsidiary of which company?",
        options: ["20th Century Fox", "Marvel Pictures", "Warner Bros"],
        answer: "Warner Bros",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "What does 'DC' in DC Comics means?",
        options: ["Dangerous Comics", "Detective Comics", "Demonic Comics"],
        answer: "Detective Comics",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question:
          "Before Harley Quinn joined the 'Suicide Squad', what was her original profession?",
        options: ["Physicist", "Geologist", "Teacher", "Psychiatrist"],
        answer: "Psychiatrist",
      },
    ],
    catergoryName: "Movies",
  },
  {
    _id: "3fe396q5-140b-4075-82f3-949a4dc95d18",
    title: "MARVEL",
    description:
      "Play a quiz on Detective Comics Cinematic Universe and test you knowledge",
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
        answer: "Radioactive",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question:
          "What type of radiation gave Bruce Banner the ability to turn into the Hulk?",
        options: ["Gamma", "Infrared", "Ultraviolet", "Microwave"],
        answer: "Gamma",
      },
    ],
    catergoryName: "Movies",
  },
];
