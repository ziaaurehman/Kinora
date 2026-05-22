import os

files = [
    "/Users/waleedahmad/.gemini/antigravity/brain/09f76f9e-cca7-4347-923b-96030b6e64e4/media__1779386236994.png",
    "/Users/waleedahmad/.gemini/antigravity/brain/09f76f9e-cca7-4347-923b-96030b6e64e4/media__1779386195277.png",
    "/Users/waleedahmad/.gemini/antigravity/brain/09f76f9e-cca7-4347-923b-96030b6e64e4/media__1779386170331.png",
    "/Users/waleedahmad/.gemini/antigravity/brain/09f76f9e-cca7-4347-923b-96030b6e64e4/media__1779386161694.png",
    "/Users/waleedahmad/.gemini/antigravity/brain/09f76f9e-cca7-4347-923b-96030b6e64e4/media__1779386015862.png"
]

for f in files:
    if os.path.exists(f):
        with open(f, "rb") as fd:
            header = fd.read(100)
            print(f, "header:", header[:20])
            if b"<svg" in header or b"<?xml" in header:
                print("  -> Is SVG/XML!")
            else:
                print("  -> Is Binary/PNG!")
