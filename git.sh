#Now, you can run the script like this:
# sh git.sh "Your commit message here"

#This line specifies that the script should be executed using the Bash shell. It's essential for running Bash scripts.
#!/bin/bash


git pull

git add .

git status

# Check if a commit message is provided as a command-line argument
if [ -n "$1" ]; then
  commitMessage="$*"
else
  echo "\nEnter a commit message:"
  read commitMessage
fi

git commit -m "$commitMessage"


git push

printf "\033[0;32m✅ Pushed to Prod!\033[0m\n"
