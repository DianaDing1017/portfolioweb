from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/illustration')
def illustration():
    return render_template('illustration.html')

@app.route('/about')
def about():
    return render_template('About.html')

@app.route('/shop')
def shop():
    return render_template('Shop.html')

if __name__ == '__main__':
    app.run(debug=True) 