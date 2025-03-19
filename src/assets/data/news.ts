import news_1 from "../news1.jpg"
import news_2 from "../news2.jpg"
import news_3 from "../news3.jpg"
import news_4 from "../news4.jpg"
import news_5 from "../news5.jpg"
import news_6 from "../news6.jpg"

interface News {
    image: {src: string};
    title: string;
    duration: string;
    news: string;
}

export const news: News[] = [
  {
    image: { src: news_1 },
    title: "Global Leaders Address Climate Crisis at UN Summit",
    news: "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change. The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges. Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities. Stay tuned for key takeaways and policy commitments from the summit.",
    duration: "2 min",
  },
  {
    image: { src: news_2 },
    title: "Global Leaders Address Climate Crisis at UN Summit",
    news: "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change. The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges. Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities. Stay tuned for key takeaways and policy commitments from the summit.",
    duration: "2 min",
  },
  {
    image: { src: news_3 },
    title: "Global Leaders Address Climate Crisis at UN Summit",
    news: "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change. The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges. Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities. Stay tuned for key takeaways and policy commitments from the summit.",
    duration: "2 min",
  },
  {
    image: { src: news_4 },
    title: "Global Leaders Address Climate Crisis at UN Summit",
    news: "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change. The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges. Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities. Stay tuned for key takeaways and policy commitments from the summit.",
    duration: "2 min",
  },
  {
    image: { src: news_5 },
    title: "Global Leaders Address Climate Crisis at UN Summit",
    news: "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change. The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges. Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities. Stay tuned for key takeaways and policy commitments from the summit.",
    duration: "2 min",
  },
  {
    image: { src: news_6 },
    title: "Global Leaders Address Climate Crisis at UN Summit",
    news: "World leaders gathered at the United Nations Climate Summit to discuss urgent measures to combat climate change. The conference focused on reducing carbon emissions, promoting sustainable energy, and strengthening international cooperation to tackle environmental challenges. Experts warn that immediate action is needed to prevent further global warming and its devastating effects on ecosystems and communities. Stay tuned for key takeaways and policy commitments from the summit.",
    duration: "2 min",
  },
];