## Contributing.

Hey there, thank you for taking interest in this project. I'd list the quick steps you can follow to get started in contributing.

The only file you'd be working with in this project is the `articles.js` file in the source folder. `src/articles.js`

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

## Happy Hacking!