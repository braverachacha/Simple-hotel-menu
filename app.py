from flask import Flask, render_template

chacha = Flask(__name__)

@chacha.route('/')
def home():
    return render_template('index.html')
if __name__ == '__main__':
    chacha.run(debug=True)
