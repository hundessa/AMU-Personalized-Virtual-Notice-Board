import news_1 from "../news1.jpg";
import news_2 from "../news2.jpg";
import news_3 from "../news3.jpg";
import news_4 from "../news4.jpg";
import news_5 from "../news5.jpg";
import news_6 from "../news6.jpg";

interface News {
  id: number;
  image: { src: string };
  title: string;
  date: string;
  news: string[];
  category: string;
}

interface Categories {
  categoryName: string
}

export const news: News[] = [
  {
    id: 1,
    image: { src: news_1 },
    title: "Global Leaders Address Climate Crisis at UN Summit",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 2,
    image: { src: news_2 },
    title: "Tech Giants Announce New Innovations",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 3,
    image: { src: news_3 },
    title: "Historic Mars Mission Successfully Lands Rover",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 4,
    image: { src: news_4 },
    title: "Startup Raises $50M to Revolutionize Clean Energy",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 5,
    image: { src: news_5 },
    title: "Global Markets Rally Amid Economic Optimism",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 6,
    image: { src: news_6 },
    title: "Scientists Discover Potential Cure for Rare Disease",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
];

export const allNews: News[] = [
  {
    id: 1,
    image: { src: news_1 },
    title: "Global Leaders Address Climate Crisis at UN Summit",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 2,
    image: { src: news_2 },
    title: "Tech Giants Announce New Innovations",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 3,
    image: { src: news_3 },
    title: "Historic Mars Mission Successfully Lands Rover",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 4,
    image: { src: news_4 },
    title: "Startup Raises $50M to Revolutionize Clean Energy",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 5,
    image: { src: news_5 },
    title: "Global Markets Rally Amid Economic Optimism",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 6,
    image: { src: news_6 },
    title: "Scientists Discover Potential Cure for Rare Disease",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 7,
    image: { src: news_1 },
    title: "Major Sports League Announces New Season Schedule",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 8,
    image: { src: news_2 },
    title: "Innovative App Aims to Improve Mental Health Awareness",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 9,
    image: { src: news_3 },
    title: "World's Largest Tech Conference Kicks Off in Silicon Valley",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 10,
    image: { src: news_4 },
    title: "Local Community Rallies to Support Flood Victims",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 11,
    image: { src: news_5 },
    title: "Breakthrough in Quantum Computing Sets New Record",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 12,
    image: { src: news_6 },
    title: "Famous Actor Wins Prestigious Film Award",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 13,
    image: { src: news_1 },
    title: "New Study Reveals Surprising Health Benefits of Dark Chocolate",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 14,
    image: { src: news_2 },
    title: "E-commerce Giant Launches Drone Delivery Service",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 15,
    image: { src: news_3 },
    title: "Groundbreaking Virtual Reality Game Takes Players by Storm",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 16,
    image: { src: news_4 },
    title: "Wildlife Conservation Efforts See Positive Results in 2025",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 17,
    image: { src: news_5 },
    title: "Breakthrough Battery Tech Promises 5-Day Smartphone Life",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
  {
    id: 18,
    image: { src: news_6 },
    title: "Astronomers Detect Earth-Like Planet in Habitable Zone",
    news: [
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
      "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change.The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges.Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities.Stay tuned for key takeaways and policy commitments from the summit.",
    ],
    date: "2 min",
    category: "Announcement",
  },
];

export const categories: Categories[] = [
  {
    categoryName: "Announcement",
  },
  {
    categoryName: "Registrar",
  },
  {
    categoryName: "Department",
  },
  {
    categoryName: "Vacancies",
  },
  {
    categoryName: "ICT Center",
  },
  {
    categoryName: "AMU Intranet",
  },
  {
    categoryName: "Finance & Budget Transparency",
  },
  {
    categoryName: "Finance & Budget Transparency",
  },
  {
    categoryName: "Finance & Budget Transparency",
  },
  {
    categoryName: "Academic Calendar",
  },
  {
    categoryName: "Newsletter",
  },
  {
    categoryName: "SMIS",
  },
  {
    categoryName: "E-learning",
  },
  {
    categoryName: "AMU Mail",
  },
  {
    categoryName: "Digital Library",
  },
];