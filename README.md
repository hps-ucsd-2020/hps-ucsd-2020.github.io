# UCSD HPS Website

## Using Jekyll
Locally hosting this website will require use of your computer's terminal.

To locally host this website for development purposes, first acquire Jekyll by following the instructions for your operating system on [the Jekyll website](https://jekyllrb.com/){:target="_blank"}. After installing Jekyll, clone this git repository and change directory into it. Prepare to host the website using `bundle install` and host the website using the command `bundle exec jekyll serve`

Jekyll makes use of liquid syntax and yaml to standardize web development. It is recommended to go through the [step-by-step tutorial](https://jekyllrb.com/docs/step-by-step/01-setup/){:target="_blank"} on the Jekyll website.

## Making wiki articles
Wiki articles can be made and pushed by any HPS member registered with the team GitHub. Wiki articles can be made and edited using the controls on the wiki pages on the website. Wiki articles should be placed in the relevent wiki article folder.

Images needed for wiki articles should be given a descriptive name and placed in `assets/img/wiki`

## Design Principles
We want to maintain a number of consistent principles when designing the website to keep it easy for a rotating set of developers to understand and make improvements to.

1. Modularity - Everything should be able to be easily swapped out without destroying the functionality of the website
2. Ease of configuration - Everything that can be configured in yaml instead of in the html should be - same with css changes.
3. Few moving parts - Reuse things where they can be reused. Try to avoid making too many components that are only used in one place. We want to keep the size of the site small!

More principles will be added as needed.
