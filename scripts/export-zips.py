import os
import zipfile

def zip_directory(src_dir, zip_filepath, exclude_dirs=None):
    if exclude_dirs is None:
        exclude_dirs = set()
    with zipfile.ZipFile(zip_filepath, 'w', zipfile.ZIP_DEFLATED) as zip_file:
        for root, dirs, files in os.walk(src_dir):
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            for file in files:
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, src_dir)
                zip_file.write(full_path, rel_path)

# 1. Package source code
os.makedirs('public/downloads', exist_ok=True)
zip_directory(
    '.',
    'public/downloads/portfolio-source-code.zip',
    exclude_dirs={'node_modules', '.git', 'dist', '.cache'}
)

# 2. Package dist build
if os.path.exists('dist'):
    zip_directory(
        'dist',
        'public/downloads/tnuislostq-github-pages-dist.zip'
    )

print("Export packages generated successfully in public/downloads/")
