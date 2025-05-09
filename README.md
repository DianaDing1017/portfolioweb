# Portfolio Website

A clean and modern portfolio website built with Flask to showcase illustration works.

## Features

- Responsive design
- Image gallery with modal view
- About page with contact information
- Shop page for displaying products
- Clean and artistic layout
- Sidebar navigation with correct Flask routing

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- On Windows:
```bash
venv\Scripts\activate
```
- On macOS/Linux:
```bash
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the application:
```bash
python app.py
```

5. Open your browser and visit:
```
http://localhost:5000
```

## Project Structure

```
portfolio/
├── app.py
├── static/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── (your images)
├── templates/
│   ├── index.html
│   ├── About.html
│   ├── illustration.html
│   ├── Shop.html
│   └── (other pages)
└── README.md
```

## How to Add New Pages or Images

- **Add a new page**: Create a new HTML file in the `templates/` directory, and add a corresponding route in `app.py`:
  ```python
  @app.route('/newpage')
  def newpage():
      return render_template('newpage.html')
  ```
- **Add images**: Place your images in `static/images/` and reference them in HTML using:
  ```html
  <img src="{{ url_for('static', filename='images/yourimage.jpg') }}" alt="Description">
  ```

## Navigation Bar (Sidebar)

- All navigation links use Flask's `url_for` for correct routing:
  ```html
  <a href="{{ url_for('home') }}">Home</a>
  <a href="{{ url_for('about') }}">About</a>
  <a href="{{ url_for('illustration') }}">Works</a>
  <a href="{{ url_for('shop') }}">Shop</a>
  ```
- Dropdown menus can be added for more categories.

