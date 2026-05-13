import urllib.request, json, time

def fetch_image_from_ddg(query, filename):
    import urllib.parse
    q = urllib.parse.quote(query)
    url = f"https://duckduckgo.com/?q={q}&iax=images&ia=images"
    print(f"Searching: {query}")
    
    # We can try to use a simple user agent to get the HTML and regex out the image token, 
    # but duckduckgo image search might be protected.
    # Alternatively, let's use Wikipedia API for Heidelberg
    pass

# Heidelberg Wikipedia
heidelberg_wiki = "https://en.wikipedia.org/w/api.php?action=query&titles=Heidelberger_Druckmaschinen&prop=pageimages&format=json&pithumbsize=500"
req = urllib.request.Request(heidelberg_wiki, headers={'User-Agent': 'Mozilla/5.0'})
resp = urllib.request.urlopen(req).read()
data = json.loads(resp)
pages = data['query']['pages']
for _, page in pages.items():
    if 'thumbnail' in page:
        img_url = page['thumbnail']['source']
        print(f"Found Heidelberg logo: {img_url}")
        urllib.request.urlretrieve(img_url, "public/logos/heidelberg.png")

# For Peak und Peak, let's just make a very nice text logo with their brand colors if we can't find it, or let's try to scrape ppeak.com
try:
    req = urllib.request.Request("https://ppeak.com", headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8')
    import re
    # Look for og:image or logo.png
    m = re.search(r'property="og:image" content="(.*?)"', html)
    if not m:
        m = re.search(r'src="(.*?logo.*?\.png)"', html, re.IGNORECASE)
    if m:
        img_url = m.group(1)
        if img_url.startswith('/'):
            img_url = "https://ppeak.com" + img_url
        elif not img_url.startswith('http'):
            img_url = "https://ppeak.com/" + img_url
        print(f"Found Peak und Peak logo: {img_url}")
        urllib.request.urlretrieve(img_url, "public/logos/peak-und-peak.png")
except Exception as e:
    print(f"Failed to scrape ppeak.com: {e}")

