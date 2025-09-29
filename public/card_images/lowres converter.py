import os
from PIL import Image

# Settings
target_width = 200
input_folder = os.path.dirname(os.path.abspath(__file__))   # same folder as script
output_folder = os.path.join(input_folder, "lowres")

# Ensure output folder exists
os.makedirs(output_folder, exist_ok=True)

# Process each file in the same folder as script
for filename in os.listdir(input_folder):
    if not filename.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
        continue
    if filename == os.path.basename(__file__):
        continue  # skip script itself if accidentally matched

    input_path = os.path.join(input_folder, filename)
    name, _ = os.path.splitext(filename)
    output_path = os.path.join(output_folder, f"{name}.webp")

    with Image.open(input_path) as img:
        w, h = img.size
        aspect_ratio = h / w
        target_height = int(target_width * aspect_ratio)
        img_resized = img.resize((target_width, target_height), Image.LANCZOS)
        img_resized.save(output_path, "WEBP", quality=80, method=6)  # quality trade-off
