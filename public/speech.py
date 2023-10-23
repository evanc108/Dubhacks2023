import io
import os
import subprocess
from google.cloud import speech
from google.oauth2 import service_account

def convert_audio_to_linear16(input_file, output_file):
    """Converts an audio file to LINEAR16 using FFmpeg."""

    if input_file.endswith(".mp3"):
        command = ["ffmpeg", "-i", input_file, "-f", "s16le", "-ar", "16000", output_file]
    elif input_file.endswith(".m4a"):
        command = ["ffmpeg", "-i", input_file, "-f", "s16le", "-ar", "16000", "-ac", "1", output_file]
    else:
        raise ValueError("Unsupported audio format: {}".format(input_file))

    subprocess.run(command, check=True)

def transcribe_file(speech_file, credentials_file):
    """Transcribes the given audio file using the Google Cloud Speech-to-Text API."""

    # Load credentials from JSON file
    credentials_path = os.path.join(os.path.dirname(__file__), "../public/apikey/key.json")
    credentials = service_account.Credentials.from_service_account_file(credentials_path)

    client = speech.SpeechClient(credentials=credentials)

    # Convert audio to LINEAR16 if necessary
    if speech_file.endswith((".mp3", ".m4a")):
        linear16_file = os.path.splitext(speech_file)[0] + ".raw"
        convert_audio_to_linear16(speech_file, linear16_file)
        speech_file = linear16_file

    with io.open(speech_file, "rb") as audio_file:
        content = audio_file.read()

    audio = speech.RecognitionAudio(content=content)

    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=16000,
        language_code="en-US",
    )

    response = client.recognize(config=config, audio=audio)

    for result in response.results:
        alternative = result.alternatives[0]
        print(u"Transcript: {}".format(alternative.transcript))
        emotionDetection(alternative.transcript)

# Emotional Detection NLP
def emotionDetection(text):
    import nltk
    from nltk.sentiment.vader import SentimentIntensityAnalyzer

    # Download VADER sentiment lexicon
    nltk.download('vader_lexicon')

    # Initialize sentiment analyzer
    analyzer = SentimentIntensityAnalyzer()

    sentiment = analyzer.polarity_scores(text)
    print(sentiment)

if __name__ == "__main__":
    speech_file = os.path.join(os.path.dirname(__file__), "../public/audio-test/positive.m4a")
    credentials_file = "credentials.json"  # Replace with the path to your JSON credentials file
    transcribe_file(speech_file, credentials_file)
    





