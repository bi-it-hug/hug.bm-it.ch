import random, time

text = """
Python ist eine einfach zu erlernende und leistungsstarke Programmiersprache, die für
ihre klare Syntax bekannt ist. Sie wird in einer Vielzahl von Anwendungen eingesetzt,
von Webentwicklung bis zur Datenanalyse. Die große Entwicklergemeinschaft und die Fülle
an Open-Source-Bibliotheken machen Python zu einer beliebten Wahl in der Softwareentwicklung.
"""

for letter in text:
    if letter in [",", "."]:
        time.sleep(random.uniform(0.15, 0.25))
    
    print(letter, end="", flush=True)
    print(end="")
    time.sleep(random.uniform(0.05, 0.15))