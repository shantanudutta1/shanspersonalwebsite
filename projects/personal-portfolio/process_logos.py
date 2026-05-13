import os
from PIL import Image

logo_paths = [
    "src/assets/nonomo-logo.png",
    "src/assets/atz-group.png",
    "src/assets/igo3d.png",
    "public/logos/peak-und-peak.png",
    "public/logos/heidelberg.png",
    "public/logos/realfast-ai.png",
    "public/logos/unipac.png",
]

for path in logo_paths:
    if os.path.exists(path):
        try:
            img = Image.open(path).convert("RGBA")
            pixels = img.getdata()
            
            # Check for generic corner colors to identify fill vs transparent
            corners = [pixels[0], pixels[img.width - 1], pixels[img.width * (img.height - 1)], pixels[img.width * img.height - 1]]
            
            transparent_count = sum(1 for p in pixels if p[3] < 128)
            is_transparent = transparent_count > (img.width * img.height * 0.1)
            
            print(f"{path}: corners={corners[:2]}, is_transparent={is_transparent}, size={img.size}")
            
            # Optional: auto-remove background and convert to white
            bg_color = corners[0]
            if not is_transparent and (bg_color[0] == bg_color[1] == bg_color[2]):
                # It's a solid grey/white/black background image
                new_data = []
                for p in pixels:
                    # If pixel is close to background, make it transparent
                    diff = abs(p[0] - bg_color[0]) + abs(p[1] - bg_color[1]) + abs(p[2] - bg_color[2])
                    if diff < 30:
                        new_data.append((255, 255, 255, 0))
                    else:
                        # Otherwise, make it white
                        new_data.append((255, 255, 255, int(p[3] * 0.9)))
                img.putdata(new_data)
                img.save(path.replace(".png", "-pure.png"))
                print(f"  -> Generated {path.replace('.png', '-pure.png')}")
            elif is_transparent:
                # Make all non-transparent pixels white
                new_data = []
                for p in pixels:
                    if p[3] > 50:
                        new_data.append((255, 255, 255, p[3]))
                    else:
                        new_data.append(p)
                img.putdata(new_data)
                img.save(path.replace(".png", "-pure.png"))
                print(f"  -> Generated {path.replace('.png', '-pure.png')}")
                
        except Exception as e:
            print(f"Error on {path}: {e}")
    else:
        print(f"Missing: {path}")
