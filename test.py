import pygame, random, os

pygame.init()
running = True

screenWidth = 1920 / 2
screenHeight = 1080 / 2
screen = pygame.display.set_mode((screenWidth, screenHeight))

playerPos = pygame.Vector2(screenWidth / 2, screenHeight / 2)
playerSize = 20
playerSpeed = 0.4

coinPositions = []
coinSize = 10

colors = {
    "bg": (30, 30, 30),
    "player": (60, 60, 60),
    "yellow": (220, 220, 170)
}

def drawPlayer():
    pygame.draw.circle(screen, colors["player"], playerPos, playerSize)

def printPlayerPos():
    print(f"Player Position | x: {int(playerPos[0])}, y: {int(playerPos[1])}", end="", flush=True)
    print("\r", end="")

def generateCoins():
    for _ in range(10, 20):
        x = random.randint(0, screenWidth)
        y = random.randint(0, screenHeight)
        xy = pygame.Vector2(x, y)
        coinPositions.append(xy)

def drawCoins():
    for pos in coinPositions:
        pygame.draw.circle(screen, colors["yellow"], pos, coinSize)

def checkKeys(x):
    keys = pygame.key.get_pressed()

    if keys[pygame.K_w] or keys[pygame.K_UP]:
        playerPos.y -= playerSpeed

    if keys[pygame.K_a] or keys[pygame.K_LEFT]:
        playerPos.x -= playerSpeed

    if keys[pygame.K_s] or keys[pygame.K_DOWN]:
        playerPos.y += playerSpeed

    if keys[pygame.K_d] or keys[pygame.K_RIGHT]:
        playerPos.x += playerSpeed

    if keys[pygame.K_ESCAPE]:
        os.system("cls")
        x = False+

generateCoins()

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill(colors["bg"])
    drawPlayer()    
    drawCoins()
    checkKeys(running)
    printPlayerPos()
    pygame.display.flip()

pygame.quit()
