import re
import os

themes_js = r'c:\Users\Heavietnam\Desktop\ProjectT1\themes.js'
themes_folder = r'c:\Users\Heavietnam\Desktop\ProjectT1\themes'

# Create themes folder if not exists
os.makedirs(themes_folder, exist_ok=True)

with open(themes_js, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract each theme using a more robust pattern
themes = []
lines = content.split('\n')

current_theme_num = None
current_theme_content = []
in_theme = False
backtick_count = 0

for line in lines:
    # Check for theme start
    theme_match = re.match(r'\s*theme(\d+):\s*`', line)
    if theme_match:
        if current_theme_num and current_theme_content:
            # Save previous theme
            themes.append((current_theme_num, '\n'.join(current_theme_content)))
        
        current_theme_num = theme_match.group(1)
        current_theme_content = []
        in_theme = True
        
        # Extract content after backtick on same line
        content_start = line.find('`') + 1
        if content_start < len(line):
            remaining = line[content_start:]
            if remaining and remaining != '':
                current_theme_content.append(remaining)
        continue
    
    if in_theme:
        # Check if line ends theme (backtick followed by comma or closing brace)
        if re.match(r'\s*`\s*[,}]', line):
            # Remove the trailing backtick and comma/brace
            cleaned = re.sub(r'`\s*[,}].*$', '', line)
            if cleaned.strip():
                current_theme_content.append(cleaned)
            in_theme = False
        else:
            current_theme_content.append(line)

# Save last theme
if current_theme_num and current_theme_content:
    themes.append((current_theme_num, '\n'.join(current_theme_content)))

print(f'Found {len(themes)} themes')

# Write each theme to a separate file
for num, css in themes:
    output_file = os.path.join(themes_folder, f'theme{num}.js')
    with open(output_file, 'w', encoding='utf-8') as out:
        out.write(css.strip())
    print(f'Created theme{num}.js')

print(f'\nAll {len(themes)} theme files created successfully!')
print(f'Files saved to: {themes_folder}')
