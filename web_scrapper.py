import requests
from bs4 import BeautifulSoup

url = "https://blog.hubspot.com/sales/famous-quotes"

f = open("js/quotes.js", "w")

browser = requests.get(url)
if browser.status_code == 200:
    result = []
    soup = BeautifulSoup(browser.text, "html.parser")
    l = soup.find_all("div", "hsg-featured-snippet__wrapper--content")
    quote_list = l[1].find_all("li")
    for i in range(len(quote_list)):
        result.append({})
        tmp = quote_list[i].string.rsplit(" -", maxsplit=1)
        result[i]["quote"] = tmp[0]
        result[i]["author"] = tmp[1]

    f.write(f"const quotes = {result}")

f.close()
