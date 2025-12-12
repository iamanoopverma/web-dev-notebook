## Github
This is repository system on server.

##### 1. `git remote add origin https://github.com/iamanoopverma/counter.git`
This command makes bridge between local git repo and github repo.

###### 1. remote
Local Project - It goes on remote server.

###### 2. add
It means add a new remote entry in my local repo.

###### 3. origin
- It's name of github repo. you can change this name but this is standard of indusrtry that first remote name should be origin.
- There is reason behind naming of github repo so that we don't have to write URL again and again just use the name.

##### Combined Command Meaning
“Git, please add a new remote connection named origin,
and link it to this GitHub repository URL.”

##### 2. `git push -u origin main`
This command send local commits to github repo.

###### 1. push
It says upload my local code to github.

###### 2. -u
It sets the upstream. Means git remember that your local branch(main) connected to remote(origin>main).
In future just write `git push` and it automatically push main to origin.

###### 3. origin
It's that name you set the name of github repo.

###### 4. main
It's name of your local branch.

##### Combined Command Meaning
"It says to git upload my current code on main of origin and rememeber this connectino for future pushes."