---
sidebar_position: 4
---

# Adding Files to GitHub

This guide walks you through adding new or changed files to a GitHub repository using the command line.

## Before You Start

Make sure you have:
- [Git](https://git-scm.com/downloads) installed on your computer
- A GitHub account with access to the repository
- The repository already cloned to your computer

## Step 1: Open a Terminal in Your Project Folder

Navigate to the folder containing your project. For example:

```bash
cd ~/helpdocs
```

## Step 2: Check What's Changed

See which files are new or modified:

```bash
git status
```

This lists any new files (shown in red) and any files you've edited since the last commit.

## Step 3: Stage Your Files

Add the files you want to include in your next commit.

To add a single file:

```bash
git add filename.md
```

To add everything that's changed:

```bash
git add .
```

## Step 4: Commit Your Changes

Save your staged changes with a short message describing what you did:

```bash
git commit -m "Add printer troubleshooting guide"
```

## Step 5: Push to GitHub

Upload your commit to the remote repository:

```bash
git push
```

If this is the first time pushing from this branch, you may need to run:

```bash
git push -u origin main
```

(Replace `main` with your branch name if it's different.)

## Step 6: Confirm on GitHub

Go to your repository's page on GitHub.com and check that your new files appear.

## Troubleshooting

**"fatal: not a git repository"** — Make sure you're in the correct folder (the one containing a `.git` subfolder).

**"Updates were rejected"** — Someone else has pushed changes since your last pull. Run `git pull` first, resolve any conflicts, then push again.

**Nothing happens after `git push`** — You may be prompted to log in. Follow the authentication steps GitHub provides (such as a browser sign-in or personal access token).
