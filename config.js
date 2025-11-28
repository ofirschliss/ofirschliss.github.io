// Edit ONLY this file to change the content of your website.
// index.html will read from the global SITE_DATA object below.

const SITE_DATA = {
  // Basic info
  name: "Ofir Schlisselberg",
  pageTitle: "Ofir Schlisselberg · Homepage",
  email: "ofirs4@mail.tau.ac.il",
  avatar: "avatar.jpeg", // put your photo in the repo and update this path
  affiliationHtml: "PhD Student<br>Department of Computer Science<br>Tel Aviv University",

  // Bio: each string is a paragraph (HTML allowed)
  bioParagraphs: [
    "I am a PhD student in the Department of Computer Science at Tel Aviv University, advised by <a href='https://www.cs.tau.ac.il/~mansour/'>Prof. Yishay Mansour</a>. I completed my MSc under the supervision of Dr. Ran Darshan and before that, obtained a BSc in Computer Science from the Open University of Israel.",
    "My research focuses on online learning and online optimization, with emphasis on Multi Armed Bandit and Markov Decision Process."
  ],

  // Preprints: each item gets a title, meta line, and arXiv link
  preprints: [
    {
      title: "The Hidden Cost of Approximation in Online Mirror Descent",
      meta: "Ofir Schlisselberg, Uri Sherman, Tomer Koren, Yishay Mansour · Preliminary version at OPT 2025",
      arxiv: ""
    }
    // Add more objects here
  ],

  // Publications
  publications: [
    {
      title: "Delay as Payoff in MAB",
      meta: "Ofir Schlisselberg, Ido Cohen, Tal Lancewicki, Yishay Mansour · AAAI 2025",
      arxiv: "https://arxiv.org/abs/2408.15158" // or leave empty if no arXiv
    },
    {
      title: "The impact of allocation strategies in subset learning on the expressive power of neural networks",
      meta: "Ofir Schlisselberg, Ran Darshan · ICLR 2025",
      arxiv: "https://arxiv.org/abs/2502.06300" // or leave empty if no arXiv
    },
    {
      title: "Improved Best-of-Both-Worlds Regret for Bandits with Delayed Feedback",
      meta: "Ofir Schlisselberg, Tal Lancewicki, Peter Auer, Yishay Mansour · NeurIPS 2025",
      arxiv: "https://arxiv.org/abs/2505.24193" // or leave empty if no arXiv
    },
  ],

  // Teaching (simple list of strings)
  teaching: [
    "Teaching Assistant - Computational Neuroscience - TAU Fall 2025",
    "Teaching Assistant - Algorithms for rational players - TAU Fall 2026"
  ],

  // Footer year (optional)
  lastUpdatedYear: 2025
};
