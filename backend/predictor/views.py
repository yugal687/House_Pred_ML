import os
import joblib
import numpy as np
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Load the trained model once
model_path = os.path.join(os.path.dirname(__file__), 'house_price_model.pkl')
model = joblib.load(model_path)

@csrf_exempt
def predict_price(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            # Required features from California housing dataset
            # Ensure the frontend sends these exact keys
            features = np.array([
                data['MedInc'],       # Median income in block
                data['HouseAge'],     # Median house age in block
                data['AveRooms'],     # Average rooms per household
                data['AveBedrms'],    # Average bedrooms per household
                data['Population'],   # Block population
                data['AveOccup'],     # Average household occupancy
                data['Latitude'],     # Block latitude
                data['Longitude']     # Block longitude
            ]).reshape(1, -1)

            prediction = model.predict(features)

            return JsonResponse({'predicted_price': float(prediction[0])})
        except KeyError as e:
            return JsonResponse({'error': f'Missing input: {str(e)}'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    else:
        return JsonResponse({'message': 'Only POST method allowed'}, status=405)