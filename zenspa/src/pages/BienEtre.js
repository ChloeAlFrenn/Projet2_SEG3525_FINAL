import React, { useContext } from "react";
import Article from "../components/Article";
import Video from "../components/Video";
import { jared } from "../assets/index";
import LanguageContext from '../components/LanguageContext';

function BienEtre() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Article
        title={language === 'fr' ? "Yoga pour la Paix Intérieure" : "Yoga for Inner Peace"}
        description={language === 'fr' ? "Découvrez comment le yoga peut vous aider à trouver la paix intérieure grâce à des techniques anciennes et des pratiques modernes." : "Learn how yoga can help you find inner peace through ancient techniques and modern practices."}
        imageUrl={jared}
        articleUrl="https://example.com/yoga-article"
      />

      <Video
        title={language === 'fr' ? "Méditation Guidée pour Réduire le Stress" : "Guided Meditation for Stress Relief"}
        description={language === 'fr' ? "Une méditation guidée pour vous aider à réduire le stress et à trouver un état de relaxation profonde." : "A guided meditation to help you reduce stress and find a state of deep relaxation."}
        videoUrl="https://www.youtube.com/embed/WnSr8w4QEWo"
      />
    </div>
  );
}

export default BienEtre;
