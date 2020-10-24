## Markdown for Dummies

### Headers
Start your article with a title like this:
```
## Super cool article about something
```

To make headers for the different sections of the article, type
```
### Materials you'll need
```

As you may have noticed, the more "#" you add, the smaller the header will be. We will stick with these ones for consistency, though. 
Also, the wiki will automatically create a table of contents for you!

### Text Formatting
You can write text normally in markdown. 
Skipping a line will make a new paragraph.

To make text bold, surround it with two asterisks on either side like this:
```
** This is some bold text. **
```

### Adding Links
To add a link, type:

```
[Click me!](website.com){:target="_blank"}
```

The part in curly brackets is optional, but it is convenient because it ensures that the link opens in a new tab.

### Adding Pictures
To add a picture from online, type:

```
![Brief description of picture](image-url)
```

To add your own picture, first you have to upload it to the team's github.
First, give the picture a descriptive title with the name of the team involved.
Then, upload it to the [wiki images folder](https://github.com/hps-ucsd-2020/hps-ucsd-2020.github.io/tree/dev/assets/img/wiki-img) by dragging and dropping it in!
It will ask you to make a commit message, just explain that you're uploading a picutre for a specific tutorial, then press commit.
If you put it in the correct place, the path to the image should read "assets/img/wiki-img/descriptive-name.png" 

Finally, in your tutorial, type:
```
![Brief description of picture](assets/img/wiki-img/descriptive-name.png)
```

Voila!

### Lists
To make a **bullet list**, simply put a "*" "+" or "-" in front of your list items like this:
```
* Eggs
* Bananas
* Orange Juice
```
This is how it will look:
* Eggs
* Bananas
* Orange

To make a **numbered list**, just put a number in front of your list items. You only need to make sure that the first number is 1, then markdown will take care of the numbering for you.

```
1. Wake up
1. Make breakfast
1. Enjoy
```
This will display like this:
1. Wake up
1. Make breakfast
1. Enjoy

### Additional Resources

A good tool is to "preview" your wiki tutorial while editing to see if it looks the way you want it to. (there's a button with an eye icon for this on both the github and prose editor)

If you see something cool on another wiki tutorial, you can click on the file in github and click "raw" to see how they coded it.

If you have any questions, feel free to consult people on the documentation team!

A lot of your questions can probably be answered at the following websites:

[Markdown Basic Syntax](https://www.markdownguide.org/basic-syntax/){:target="_blank"}

[Markdown Extended Syntax](https://www.markdownguide.org/extended-syntax/){:target="_blank"}

Good Luck!



