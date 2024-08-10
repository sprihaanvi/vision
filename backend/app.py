from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import io
from PIL import Image
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Load the pre-trained model
model = load_model('EyePredModel.h5')

# Define the label mapping
labels = {0: 'cataract', 1: 'diabetic_retinopathy', 2: 'glaucoma', 3: 'normal'}

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Load and preprocess the image
    img = Image.open(io.BytesIO(file.read()))
    img = img.resize((128, 128))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)

    # Make the prediction
    prediction = model.predict(img_array)
    pred_label = np.argmax(prediction)
    accuracy = float(np.max(prediction))*100
    accuracy = round(accuracy, 3)  # Get the confidence of the prediction

    return jsonify({'prediction': labels[pred_label], 'accuracy': accuracy})

if __name__ == '__main__':
    app.run(debug=True)
