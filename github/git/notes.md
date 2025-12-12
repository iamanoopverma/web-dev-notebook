## Git Commands

#### Real World Analogy: Mobile Photo Backup
##### Working Directory = Tumhari mobile gallery
- Tumne photos liye, changes hue (crop, edit, delete).
##### Staging Area = Select photos
- Tum decide karte ho ki kaun se photos Google Drive me backup honge.
```js
git add
```
##### Repository = Google Drive backup
- Selected photos permanently upload karna.
```js
git commit
```

#### Full Summary in One Line
Working Directory → git add → Staging Area → git commit → Repository

#### Git actually krta kya hai?
- Tumhare code ka history maintain karta hai
- Har commit ek snapshot hota hai
- Tum kabhi bhi koi commit open, compare, restore kar sakte ho
- Alag-alag branches me safe experiment kar sakte ho
- Merge karke final kaam combine kar sakte ho
- Team me code share/track kar sakte ho

#### GIT Commands Table

| **Command**                                      | **One-liner Meaning**                          |
| ------------------------------------------------ | ---------------------------------------------- |
| `git --version`                                  | Checks if Git is installed.                    |
| `git config --global user.name "Your Name"`      | Sets global Git username.                      |
| `git config --global user.email "you@email.com"` | Sets global Git email.                         |
| `git config --global --list`                     | Shows all global Git settings.                 |
| `git init`                                       | Converts current folder into a Git repository. |
| `git status`                                     | Shows tracked/untracked/modified files.        |
| `git add <file>`                                 | Stages a specific file.                        |
| `git add .`                                      | Stages all changed files.                      |

#### Commit commands Table

| **Command**                               | **One-liner Meaning**                                         |
| ----------------------------------------- | ------------------------------------------------------------- |
| `git commit -m "message"`                 | Creates a commit (snapshot) with a message.                   |
| `git commit -am "message"`                | Adds modified tracked files + commits in one step.            |
| `git log`                                 | Shows commit history.                                         |
| `git show <commit-id>`                    | Opens a specific commit and shows its changes.                |
| `git diff`                                | Shows difference between working directory and staging.       |
| `git diff <commit1> <commit2>`            | Compares two commits.                                         |
| `git revert <commit-id>`                  | Safely undo a commit by creating a new reverse commit.        |
| `git restore <file>`                      | Restores file content to last committed state.                |
| `git restore <file> --source=<commit-id>` | Restores file to a specific old commit version.               |
| `git reset HEAD <file>`                   | Unstages a file (removes from staging).                       |
| `git checkout <commit-id>`                | Opens old commit in "detached HEAD" mode. *(not for editing)* |

#### Branch Commands Table

| **Command**                | **One-liner Meaning**                    |
| -------------------------- | ---------------------------------------- |
| `git branch`               | Lists all branches.                      |
| `git branch <name>`        | Creates a new branch.                    |
| `git checkout <branch>`    | Switches to a branch.                    |
| `git switch <branch>`      | Modern command to switch branches.       |
| `git checkout -b <branch>` | Creates + switches to new branch.        |
| `git merge <branch>`       | Merges given branch into current branch. |
| `git branch -d <branch>`   | Deletes a branch.                        |

#### Ignore Command Table

| **Command**                        | **One-liner Meaning**                    |
| ---------------------------------- | ---------------------------------------- |
| `.gitignore`                       | Tells Git which files/folders to ignore. |
| `git rm -r --cached <file/folder>` | Stops tracking a committed file/folder.  |
