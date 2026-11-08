// Edit this file to update the website. No build step is needed.
// ADD A PAPER: copy an object into publications or preprints, newest first.
// { title: "Paper title", authors: "Name, Ofir Schlisselberg, Name",
//   conference: { name: "Conference 2027", url: "https://..." },
//   arxiv: "https://arxiv.org/abs/..." }
// Use conference: null for a preprint without a venue.
// conference.url is optional. Author highlighting is automatic.
// Use * after an author's name for equal contribution.
// cvUrl: set to a final PDF path, e.g. "cv.pdf", to show a CV download link.
const SITE_DATA = {
  "name": "Ofir Schlisselberg",
  "pageTitle": "Ofir Schlisselberg | Online Learning & Games",
  "email": "ofirs4@mail.tau.ac.il",
  "avatar": "avatar.jpeg",
  "links": [
    {
      "label": "Google Scholar",
      "url": "https://scholar.google.com/citations?user=sYngpysAAAAJ&hl=en"
    }
  ],
  "cvUrl": null,
  "headline": "Ofir Schlisselberg",
  "intro": "I am a Ph.D. student in Computer Science at Tel Aviv University, advised by <a href=\"https://www.mansouryishay.sites.tau.ac.il/\">Yishay Mansour</a>. I study the mathematical foundations of online learning and games.",
  "bioParagraphs": [
    "My research spans bandits, Markov decision processes, and online optimization. I enjoy problems that call for new mathematical ideas, particularly understanding what makes learning possible and how the structure of feedback changes its limits.",
    "I completed my M.Sc. with <a href=\"https://darshanlab.sites.tau.ac.il/\">Ran Darshan</a>, studying neural network expressivity, and my B.Sc. at the Open University of Israel.",
    "Before my Ph.D., I worked in cybersecurity research and embedded and operating systems development. I continue to advise on systems design and mentor researchers and developers."
  ],
  "recognition": "My doctoral research is supported by the CHE Fellowship (VATAT) for Outstanding PhD Students in Data Science and the TAD Excellence Program.",
  "publications": [
    {
      "title": "Near-Optimal Stochastic Linear Bandits with Delay",
      "authors": "Ofir Schlisselberg, Mengxiao Zhang, Yishay Mansour",
      "conference": {
        "name": "NeurIPS 2026"
      },
      "arxiv": "https://arxiv.org/pdf/2606.16656"
    },
    {
      "title": "Mirror Descent Beyond Euclidean Stability: An Exponential Separation in Initialization Sensitivity",
      "authors": "Shira Vansover-Hager, Matan Schliserman, Ofir Schlisselberg, Tomer Koren",
      "conference": {
        "name": "NeurIPS 2026"
      },
      "arxiv": "https://arxiv.org/pdf/2606.11431"
    },
    {
      "title": "The Hidden Cost of Approximation in Online Mirror Descent",
      "authors": "Ofir Schlisselberg, Uri Sherman, Tomer Koren, Yishay Mansour",
      "conference": {
        "name": "COLT 2026",
        "url": "https://proceedings.mlr.press/v336/schlisselberg26a.html"
      },
      "arxiv": "https://arxiv.org/pdf/2511.22283"
    },
    {
      "title": "Improved Best-of-Both-Worlds Regret for Bandits with Delayed Feedback",
      "authors": "Ofir Schlisselberg, Tal Lancewicki, Peter Auer, Yishay Mansour",
      "conference": {
        "name": "NeurIPS 2025",
        "url": "https://proceedings.neurips.cc/paper_files/paper/2025/file/02f0ac0a323dc17d964d4bbf8a62e01b-Paper-Conference.pdf"
      },
      "arxiv": "https://arxiv.org/pdf/2505.24193"
    },
    {
      "title": "The impact of allocation strategies in subset learning on the expressive power of neural networks",
      "authors": "Ofir Schlisselberg, Ran Darshan",
      "conference": {
        "name": "ICLR 2025",
        "url": "https://proceedings.iclr.cc/paper_files/paper/2025/hash/a1563f83b580b83d2836abc6ea03280a-Abstract-Conference.html"
      },
      "arxiv": "https://arxiv.org/pdf/2502.06300"
    },
    {
      "title": "Delay as Payoff in MAB",
      "authors": "Ofir Schlisselberg*, Ido Cohen*, Tal Lancewicki, Yishay Mansour",
      "conference": {
        "name": "AAAI 2025",
        "url": "https://ojs.aaai.org/index.php/AAAI/article/view/34237"
      },
      "arxiv": "https://arxiv.org/pdf/2408.15158"
    }
  ],
  "preprints": [
    {
      "title": "Collaborating in Multi-Armed Bandits with Strategic Agents",
      "authors": "Idan Barnea*, Ofir Schlisselberg*, Yishay Mansour",
      "conference": {
        "name": "Preliminary version: EWRL 2026 · Oral"
      },
      "arxiv": "https://arxiv.org/pdf/2605.13145"
    },
    {
      "title": "Online Learning in MDPs with Partially Adversarial Transitions and Losses",
      "authors": "Ofir Schlisselberg, Tal Lancewicki, Yishay Mansour",
      "conference": null,
      "arxiv": "https://arxiv.org/pdf/2602.09474"
    }
  ],
  "teaching": [
    {
      "date": "Spring 2027",
      "title": "Introduction to Reinforcement Learning",
      "detail": "Teaching Assistant, Tel Aviv University · Upcoming"
    },
    {
      "date": "Fall 2026",
      "title": "Algorithms for Rational Players",
      "detail": "Teaching Assistant, Tel Aviv University"
    },
    {
      "date": "Fall 2025",
      "title": "Computational Neuroscience",
      "detail": "Teaching Assistant, Tel Aviv University"
    }
  ],
  "lastUpdatedYear": 2026
};
