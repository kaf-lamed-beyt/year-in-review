## Contributing.

Hey there, thank you for taking interest in this project. I'd list the steps you can follow to get started in contributing.

- First, you have to fork this repository. When you do that you're creating a copy of this repository under your own github account.
- Clone the repository (your own forked version), by doing this...

```bash
    git clone https://github.com/yourUsername/year-in-review.git
```

- Set the remote upstream of your forked repository to the base respository (i.e. the original repository)

```bash
    git remote add upstream https://github.com/Caleb335/year-in-review.git
```

- Create a branch and start working your feature. Say for example, the article you want to add was written by **Hannah**, you can go ahead to create a branch called **Hannah** and make your changes in that branch.

```bash
    git checkout -b Hannah
```

- Save and commit your changes

```bash
    git add --all

    git commit -m "add hannah's article"
```

- Push to your branch, create a pull request and wait for it to be merged.

```bash
    git push origin Hannah
```

## Adding articles

The only file you'd be working with in this project is the `articles.js` file in the utils folder. `src/utils/articles.js`

In `src/utils/articles.js` we have an array of objects called `articles`. So all you have to do now is to add your own object in the format below.

The `title` key should accept a string value that holds the title of the article.

The `previewText` key should accept a string that shows probably an introduction from the article. You can decide to make this an excerpt from the article. But, it shouldn't be greater than two sentences.

The `author` key should accept the name of the author.

The `readMore` key represents the link to where the article was originally published.

The `date` key takes in the date that you added the article to this project. Say for example, you added an here today, the syntax below illustrates how to do that.

```javascript
date: new Date('Dec 1 2021, 13:41:00')
```

The `entry_id` key is for us to be able to keep tabs on the amount of items we have in the array.

```javascript
  {
    title,
    previewText,
    author,
    readMore,
    date,
    entry_id,
  }
```

Since we've already wrapped up with 2022, you'll be adding articles into the `twentyTwo` array. But, if you find articles that have been published previously feel free to add them in the `twenty` OR `twentyOne`array (which is short for 2020 or 2021).

## Happy Hacking!
