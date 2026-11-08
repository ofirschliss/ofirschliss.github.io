# Ofir Schlisselberg's website

A static website for GitHub Pages. No package installation or build step is needed.

## Add a paper

Edit only `config.js`. Copy an existing object into `publications` or `preprints`, newest first:

```js
{
  title: "Your paper title",
  authors: "Coauthor, Ofir Schlisselberg*, Coauthor*",
  conference: {
    name: "Conference 2027",
    url: "https://conference.example/paper"
  },
  arxiv: "https://arxiv.org/abs/your-paper"
},
```

- Use `conference: null` for a preprint without a venue.
- The conference URL is optional. Remove that line when there is no proceedings link.
- Asterisks indicate equal contribution.
- Keep commas between objects. The page generates author highlighting and links automatically.
- To move an accepted preprint into publications, move its object between the two arrays and update its conference.

## Other updates

The biography, fellowship acknowledgment, and compact teaching list are also in `config.js`. Set `cvUrl` to the path of a finished PDF to show the CV download link; leave it `null` to hide it.

- `index.html`: page structure
- `styles.css`: responsive design
- `site.js`: rendering of the biography, papers, and teaching
- `avatar.jpeg`: portrait

## Local preview

Run any static web server from this directory, then open its local URL. For example:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

The page is static and requires no server-side code. All assets are local; there are no analytics, external font requests, or build dependencies.
