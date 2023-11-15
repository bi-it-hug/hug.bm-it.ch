import json

filePath = "Projekt/Projektarbeit.json"

with open(filePath, "r") as jsonFile:
    jsonData = json.load(jsonFile)

print(jsonData)
