
# 🏡 House Price Prediction Web App

A full-stack machine learning web app that predicts California house prices using a trained **Linear Regression model**.  
Built with **Django (backend)**, **Next.js (frontend)**, and **scikit-learn** for the model.

---

## 🚀 Live Demo

> [Optional: Add your deployed link here if available – Vercel, Render, etc.]

---

## 📸 Screenshots

> _(Optional: Add screenshots of your UI and prediction result here)_

---

## 🧠 ML Model Details

- Dataset: `California housing` from `sklearn.datasets`
- Algorithm: Linear Regression
- Target: Median house value (scaled to $100,000 units)
- Features used:
  - `MedInc`, `HouseAge`, `AveRooms`, `AveBedrms`, `Population`, `AveOccup`, `Latitude`, `Longitude`
- Evaluation metrics:
  - R² Score, MSE
- Model saved as `house_price_model.pkl` using `joblib`

---

## 🛠️ Tech Stack

| Layer     | Tech                   |
|-----------|------------------------|
| Frontend  | Next.js, Tailwind CSS  |
| Backend   | Django REST API        |
| ML Model  | Scikit-learn           |
| CORS      | django-cors-headers    |

---

## 📁 Project Structure

```bash
house-price-predictor/
├── backend/
│   ├── house_price_project/
│   │   └── settings.py
│   ├── predictor/
│   │   ├── views.py
│   │   ├── house_price_model.pkl
│   └── manage.py
├── frontend/
│   └── house-price-frontend/
│       ├── pages/
│       │   └── predict.js
│       ├── components/
│       │   └── PredictionForm.js
│       └── tailwind.config.js
```

---

## ⚙️ How to Run Locally

### 🔹 1. Clone the repo
```bash
git clone https://github.com/your-username/house-price-predictor.git
cd house-price-predictor
```

### 🔹 2. Set up the backend (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py runserver
```

### 🔹 3. Set up the frontend (Next.js)
```bash
cd ../frontend/house-price-frontend
npm install
npm run dev
```

---

## 📡 API Endpoint

**POST** `/api/predict/`

```json
{
  "MedInc": 8.3252,
  "HouseAge": 41.0,
  "AveRooms": 6.9841,
  "AveBedrms": 1.0238,
  "Population": 322.0,
  "AveOccup": 2.5556,
  "Latitude": 37.88,
  "Longitude": -122.23
}
```

Returns:
```json
{ "predicted_price": 4.529 }
```

---

## 🧰 Future Improvements

- Add data visualizations (Map, Charts)
- Model switch (e.g., Ridge, Random Forest)
- User authentication for saved predictions
- Deploy to Vercel (frontend) and Render (backend)

---

## 👨‍💻 Author

- **Yugal Pageni** – [yugal687](https://github.com/yugal687)
