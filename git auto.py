import subprocess

for x in ["git add *", f'git commit -m "{input("Enter commit message: ")}"', "git push"]:
    subprocess.run(x, shell=True)