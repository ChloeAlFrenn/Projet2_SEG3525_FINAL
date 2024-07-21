import React from "react";
import Article from "../components/Article";
import Video from "../components/Video";
import { jared } from "../assets/index";

function BienEtre() {
  return (
    <div>
        <Article 
        title="Article sur le yoga" 
        description="Technique, auteur, résumé de l'article, but et bienfaits de l'article. Peut prendre toute la largeur ici." 
        imageUrl={jared}
        articleUrl="https://example.com/yoga-article" 
      />

      <Video
        title="Titre de Vidéo de méditation"
        description="Technique, auteur, résumé de la vidéo, but de la vidéo. Peut prendre toute la largeur ici."
        videoUrl="https://www.youtube.com/embed/WnSr8w4QEWo"
      />
    </div>
  );
}

export default BienEtre;
