from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import MinMaxScaler

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load and preprocess data
df = pd.read_excel(r"C:\Users\Admin\Desktop\RainfallPrediction\flask-backend\rainfall_data.xlsx")
scaler = MinMaxScaler()
numerical_features = ['Rainfall Amount (mm)', 'Temperature (°C)', 'Humidity (%)', 'Wind Speed (km/h)']
df[numerical_features] = scaler.fit_transform(df[numerical_features])
df['Rolling Rainfall (7-day)'] = df['Rainfall Amount (mm)'].rolling(window=7).mean().fillna(0)

# Train a simple model
X = df[['Temperature (°C)', 'Humidity (%)', 'Wind Speed (km/h)']]
y = df['Rainfall Amount (mm)']
model = LinearRegression()
model.fit(X, y)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array([
        data['temperature'],
        data['humidity'],
        data['wind_speed']
    ]).reshape(1, -1)
    
    # Predict using the model
    prediction = model.predict(features)
    
    return jsonify({'predicted_rainfall': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
