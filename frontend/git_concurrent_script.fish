#!/usr/bin/env fish

# Start the SSH agent
eval (ssh-agent -c)

# Add your SSH key to the agent (assuming your key is named 'github')
ssh-add -k

# Set the maximum number of concurrent tasks
set max_concurrent_tasks 10

# Initialize variables to track progress
set completed_tasks 0
set remaining_tasks 100

for i in (seq 1 100)
    while test (count (jobs)) -ge $max_concurrent_tasks
        # Sleep for a short time to avoid busy-waiting
        sleep 1
    end

    begin
        # Create a new branch
        git checkout -b feature/file_$i

        # Create a commit for the file
        echo $i > "file_$i.txt"
        git add "file_$i.txt"
        git commit -m "Add file_$i.txt"

        # Push the branch to the remote repository
        git push origin feature/file_$i

        # Create an issue (assuming you have permissions)
        gh issue create --title "Issue for file_$i" --body "This issue is related to file $i." --repo abusayeed.me-23

        # Create a pull request
        gh pr create --base main --head feature/file_$i --title "Add file_$i.txt" --repo abusayeed.me-23

        # Perform a code review (assuming you have review permissions)
        gh pr review $i --body "Code looks good to me."


        # Merge the pull request
        gh pr merge --auto --delete-branch feature/file_$i --repo abusayeed.me-23

        # Switch back to the main branch
        git checkout main

        # Update progress
        set -q completed_tasks
        set -q remaining_tasks
        echo "Completed tasks: $completed_tasks, Remaining tasks: $remaining_tasks"
    end &
    
    # Update progress
    set -q remaining_tasks
    set remaining_tasks (math $remaining_tasks - 1)
end

# Wait for all background jobs to finish
wait

# Stop the SSH agent
ssh-agent -k
