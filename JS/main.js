import { initAlbum } from "./album.js";
import { initBook } from "./book.js";
import { initCarousel } from "./carousel.js";
import { initMoments } from "./moments.js";
import { initPhrases } from "./phrases.js";
import { initQuiz } from "./quiz.js";
import { initScroll } from "./scroll.js";
import { initTimeline } from "./timeline.js";

document.addEventListener("DOMContentLoaded", () => {
    initAlbum();
    initMoments();
    initPhrases();
    initScroll();
    initQuiz();
    //initTimeline();
    //initBook();
    //initCarousel();
});