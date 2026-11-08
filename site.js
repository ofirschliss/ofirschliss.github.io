(() => {
  'use strict';
  const d = typeof SITE_DATA === 'undefined' ? null : SITE_DATA;
  if (!d) return;
  const byId = id => document.getElementById(id);
  const make = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  };
  const link = (label, url, className) => {
    const el = make('a', className, label);
    el.href = url;
    return el;
  };
  document.title = d.pageTitle;
  byId('name').textContent = d.name;
  byId('avatar').src = d.avatar;
  byId('avatar').alt = d.name;
  byId('email-link').textContent = d.email;
  byId('email-link').href = 'mailto:' + d.email;
  byId('research-heading').textContent = d.headline;
  // Biography HTML is authored in config.js to support advisor links.
  byId('intro').innerHTML = d.intro;
  byId('recognition').textContent = d.recognition;
  byId('year').textContent = d.lastUpdatedYear;
  d.links.forEach(item => byId('profile-links').append(link(item.label + ' ↗', item.url)));
  if (d.cvUrl) byId('profile-links').append(link('CV (PDF) ↓',d.cvUrl));
  d.bioParagraphs.forEach(html => {
    const p = make('p');
    p.innerHTML = html;
    byId('bio-text').append(p);
  });
  function renderPapers(id,papers) {
    papers.forEach(p => {
      const article = make('article', 'paper');
      const year = p.conference?.name.match(/20\d{2}/)?.[0] || '';
      article.append(make('div', 'paper-year', year));
      const body = make('div', 'paper-body');
      const heading = make('h3');
      const paperUrl = p.arxivUrl || p.arxiv || p.conference?.url;
      heading.append(paperUrl ? link(p.title,paperUrl,'paper-title') : document.createTextNode(p.title));
      body.append(heading);
      if (p.conference?.name) {
        const venue = make('p','venue');
        if (p.conference.url) venue.append(link(p.conference.name,p.conference.url));
        else venue.textContent = p.conference.name;
        body.append(venue);
      }
      const authors = make('p','authors');
      p.authors.split(d.name).forEach((part,i) => {
        if (i) authors.append(make('strong','',d.name));
        authors.append(document.createTextNode(part));
      });
      body.append(authors);
      const actions = make('div','paper-links');
      if (p.arxivUrl || p.arxiv) actions.append(link('arXiv ↗',p.arxivUrl || p.arxiv));
      if (p.conference?.url) actions.append(link('Proceedings ↗',p.conference.url));
      if (actions.childElementCount) body.append(actions);
      article.append(body);
      byId(id).append(article);
    });
  }
  renderPapers('publications-list',d.publications);
  renderPapers('preprints-list',d.preprints);
  d.teaching.forEach(item => {
    const row = make('div','teaching-item');
    const body = make('div');
    body.append(make('h3','',item.title),make('p','',item.detail));
    row.append(make('span','date',item.date),body);
    byId('teaching-list').append(row);
  });
  const navLinks = Array.from(document.querySelectorAll('.section-nav a'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a => {
          if (a.hash === '#' + entry.target.id) a.setAttribute('aria-current','location');
          else a.removeAttribute('aria-current');
        });
      });
    },{rootMargin:'-5% 0px -60% 0px',threshold:0});
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
  }
})();
