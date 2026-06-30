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
    "I am a PhD student in the Department of Computer Science at Tel Aviv University, advised by <a href='https://www.mansouryishay.sites.tau.ac.il/'>Prof. Yishay Mansour</a>. I completed my MSc under the supervision of <a href='https://darshanlab.sites.tau.ac.il/'>Dr. Ran Darshan</a> and before that, obtained a BSc in Computer Science from the Open University of Israel.",
    "My research focuses on online learning and online optimization, with emphasis on Multi Armed Bandit and Markov Decision Process.",
    "<a href='https://scholar.google.com/citations?user=sYngpysAAAAJ&hl=en'>Google Scholar</a>"
  ],

  // Preprints: each item gets a title, meta line, and arXiv link
  preprints: [
    {
      title: "Near-Optimal Stochastic Linear Bandits with Delay",
      authors: "Ofir Schlisselberg, Mengxiao Zhang, Yishay Mansour",
      conference: null, // null for no conference
      arxiv: "https://arxiv.org/pdf/2606.16656"
    },
    {
      title: "Mirror Descent Beyond Euclidean Stability: An Exponential Separation in Initialization Sensitivity ",
      authors: "Shira Vansover-Hager, Matan Schliserman, Ofir Schlisselberg, Tomer Koren",
      conference: null, // null for no conference
      arxiv: "https://arxiv.org/pdf/2606.11431"
    },
    {
      title: "Collaborating in Multi-Armed Bandits with Strategic Agents",
      authors: "Idan Barnea, Ofir Schlisselberg, Yishay Mansour",
      conference: null, // null for no conference
      arxiv: "https://arxiv.org/pdf/2605.13145"
    },
    {
      title: "Online Learning in MDPs with Partially Adversarial Transitions and Losses",
      authors: "Ofir Schlisselberg, Tal Lancewicki, Yishay Mansour",
      conference: null, // null for no conference
      arxiv: "https://arxiv.org/pdf/2602.09474"
    },
    // Add more objects here
  ],

  // Publications
  publications: [
    {
      title: "The Hidden Cost of Approximation in Online Mirror Descent",
      authors: "Ofir Schlisselberg, Uri Sherman, Tomer Koren, Yishay Mansour",
      conference: {name: "COLT 2026", url: "https://proceedings.mlr.press/v336/schlisselberg26a.html"}, // null for no conference
      arxiv: "https://arxiv.org/pdf/2511.22283"
    },
    {
      title: "Improved Best-of-Both-Worlds Regret for Bandits with Delayed Feedback",
      authors: "Ofir Schlisselberg, Tal Lancewicki, Peter Auer, Yishay Mansour",
      conference: {name: "NeurIPS 2025", url: "https://proceedings.neurips.cc/paper_files/paper/2025/file/02f0ac0a323dc17d964d4bbf8a62e01b-Paper-Conference.pdf"}, // null for no conference
      arxiv: "https://arxiv.org/pdf/2505.24193" // or leave empty if no arXiv
    },
    {
      title: "The impact of allocation strategies in subset learning on the expressive power of neural networks",
      authors: "Ofir Schlisselberg, Ran Darshan",
      conference: {name: "ICLR 2025", url: "https://proceedings.iclr.cc/paper_files/paper/2025/hash/a1563f83b580b83d2836abc6ea03280a-Abstract-Conference.html"}, // null for no conference
      arxiv: "https://arxiv.org/pdf/2502.06300" // or leave empty if no arXiv
    },
    {
      title: "Delay as Payoff in MAB",
      authors: "Ofir Schlisselberg*, Ido Cohen*, Tal Lancewicki, Yishay Mansour",
      conference: {name: "AAAI 2025", url: "https://ojs.aaai.org/index.php/AAAI/article/view/34237"}, // null for no conference
      arxiv: "https://arxiv.org/pdf/2408.15158" // or leave empty if no arXiv
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
