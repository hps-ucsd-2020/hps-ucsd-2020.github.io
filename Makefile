all: serve

build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

clean:
	rm -rf _site

install:
	bundle install
