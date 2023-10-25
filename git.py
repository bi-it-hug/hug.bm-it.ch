import subprocess

commands = ["git add *", f'git commit -m "{input()}"', "git push"]

for x in commands:
    subprocess.run(x, shell=True)