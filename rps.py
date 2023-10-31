import random, time

rps = ["rock", "paper", "scissors"]
playerWins = 0
botWins = 0

def mainLoop():
    while True:
        playerChoice = str(input("\nYour choice: "))
        time.sleep(1.4)

        if playerChoice == rps[0] or playerChoice == rps[1] or playerChoice == rps[2]:
            break

        else:
            print('Please choose either "rock", "paper" or "scissors".\n')

    botChoice = random.choice(rps)
    print(f"Bot chose: {botChoice}!")
    time.sleep(1.2)

    if playerChoice == botChoice:
        print("It's a tie!\n")
        mainLoop()

    elif playerChoice == rps[0] and botChoice == rps[1]:
        botWins += 1
        print("Bot wins!")

    elif playerChoice == rps[0] and botChoice == rps[2]:
        playerWins += 1
        print("Player wins!")

    elif playerChoice == rps[1] and botChoice == rps[2]:
        botWins += 1
        print("Bot wins!")

    elif playerChoice == rps[2] and botChoice == rps[1]:
        playerWins += 1
        print("Player wins!")

    elif playerChoice == rps[2] and botChoice == rps[0]:
        botWins += 1
        print("Bot wins!")

    elif playerChoice == rps[1] and botChoice == rps[0]:
        playerWins += 1
        print("Player wins!")

    time.sleep(0.8)
    print(f"\nPlayer wins: {playerWins}\nBot wins: {botWins}")

    while True:
        playAgain =  input("\nWant to play again? [y] for yes [n] for no. ")
        time.sleep(1.4)

        if playAgain == "y":
            mainLoop()

        elif playAgain == "n":
            break

        else:
            print('Please choose either "y" or "n".\n')
            
mainLoop()