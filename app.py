from flask import Flask, render_template, request, redirect, url_for
from models import Messages

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/success')
def success():
    return render_template('success.html')


@app.route('/', methods=['GET', 'POST'])
def message():
    if request.method == 'POST':
    
        form = request.form
        print(form)
        name = form['name']
        email = form['email']
        message = form['message']

        new_message = Messages(name=name, email=email, message=message)
        new_message = new_message.save()
        print(new_message)
        
        try:
            return redirect(url_for('success'))
        except:
            return redirect(url_for('failure'))
        
    return render_template ('index.html')

app.run(port=3000, debug=True)
