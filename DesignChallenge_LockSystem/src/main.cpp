#include <Arduino.h>
#include <Servo.h>

int ledPinRood = 7;
int servoPin = 6;
int pos = 0;
int knopGroen = 5;
int knopRood = 8;

bool ifPressed = false;

Servo myservo;

void setup() {
  Serial.begin(9600);
  pinMode(ledPinRood, OUTPUT);
  pinMode(knopGroen, INPUT_PULLUP);
  pinMode(knopRood, INPUT_PULLUP);
  myservo.attach(servoPin);
  digitalWrite(ledPinRood, LOW);
}

void startServo() {
  if (ifPressed) {
    myservo.write(140);
    
  } else {
    myservo.write(0); // Zet de servo in de neutrale positie (90 graden)
    digitalWrite(ledPinRood, HIGH);
  }
}

void loop() {
  int buttonStateGroen = digitalRead(knopGroen);
  int buttonStateRood = digitalRead(knopRood);

  if (buttonStateGroen == LOW && !ifPressed) {
    ifPressed = true;
  }
    else if (buttonStateRood == LOW && ifPressed)
  {
    ifPressed = false;
  }
  

  startServo();
  delay(1);
}
