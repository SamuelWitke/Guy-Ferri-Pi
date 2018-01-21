#buttonInput.py
import requests
import RPi.GPIO as GPIO
from time import sleep
from guy import guy
import os

GPIO.setmode(GPIO.BCM)
sleepTime = .1

#GPIO Pin of the component
lightPin = 4
buttonPin = 17

GPIO.setup(lightPin, GPIO.OUT)
GPIO.setup(buttonPin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.output(lightPin,False)
button = False
try:
    while(True):
        button = not GPIO.input(buttonPin)
        GPIO.output(lightPin,button)
        if(button):
            print(guy)
            r = requests.get("http://192.168.0.12:4000")
            print(r.status_code)
        sleep(sleepTime)
finally:
    GPIO.output(lightPin,False)
    GPIO.cleanup()
