import librosa
import numpy as np
import pandas as pd
import tensorflow as tf  # Assuming you're using TensorFlow for the model

# Load your trained Emotion_Voice_Detection_Model here
model = tf.keras.models.load_model('model.h5')  # Replace 'model.h5' with the actual path to your model file

# Load your recorded audio
audio_file = 'neutral.wav'  # Replace with the path to your audio file

# Preprocess the audio
def extract_features(audio_file):
    X, sample_rate = librosa.load(audio_file, res_type='kaiser_fast', duration=3, offset=0.5)
    mfccs = np.mean(librosa.feature.mfcc(y=X, sr=sample_rate, n_mfcc=25), axis=0)
    return mfccs

audio_features = extract_features(audio_file)

# Ensure that audio features have the expected shape (216,)
target_shape = 216
if audio_features.shape[0] < target_shape:
    audio_features = np.pad(audio_features, (0, target_shape - audio_features.shape[0]))
elif audio_features.shape[0] > target_shape:
    audio_features = audio_features[:target_shape]

# Convert the NumPy array to a NumPy array of shape (216, 1)
audio_features = np.expand_dims(audio_features, axis=1)

# Make a prediction
predicted_emotion = model.predict(np.expand_dims(audio_features, axis=0))

# Define a dictionary to map class indices to emotion labels
emotion_labels = {
    0: "angry",
    1: "calm",
    2: "fearful",
    3: "happy",
    4: "sad",
    5: "angry",
    6: "calm",
    7: "fearful",
    8: "happy",
    9: "sad"
}

# Get the predicted class index (the class with the highest probability)
predicted_class_index = np.argmax(predicted_emotion)

# Get the corresponding emotion label from the dictionary
predicted_emotion_label = emotion_labels[predicted_class_index]

# Print the predicted emotion
print("Predicted Emotion:", predicted_emotion_label)
