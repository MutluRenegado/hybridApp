from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='.', static_url_path='')

# HTML content for each section
pages = {
    "main": "<h2>Welcome to the Main Page</h2><p>This is the main section.</p>",
    "hashtag-manager": "<h2>Hashtag Manager</h2><p>Manage your hashtags here.</p>",
    "text-manager": "<h2>Text Manager</h2><p>Edit and store your text content here.</p>",
    "socials-manager": "<h2>Socials Manager</h2><p>Connect and control your social accounts.</p>",
    "member-area": "<h2>Member Area</h2><p>Private content and user dashboard.</p>",
    "authentication": "<h2>Authentication</h2><p>Login and registration features.</p>"
}

@app.route('/')
def root():
    return send_from_directory('.', 'index.html')

@app.route('/page/<name>')
def serve_page(name):
    return pages.get(name, "<h2>404</h2><p>Page not found.</p>")

if __name__ == '__main__':
    app.run(debug=True, port=5000)

