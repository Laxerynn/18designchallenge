#include <Arduino.h>
#include <Servo.h>

int ledPinRood = 7;
int ledPinGroen = 9;
int servoPin = 6;
int pos = 0;
int knopGroen = 5;
int knopRood = 8;
int afstandTriq = 3;
int afstandEcho = 2;

long duration;
int distance;

bool ifPressed = false;

Servo myservo;

void setup() {
  Serial.begin(9600);
  pinMode(ledPinRood, OUTPUT);
  pinMode(ledPinGroen, OUTPUT);
  pinMode(knopGroen, INPUT_PULLUP);
  pinMode(knopRood, INPUT_PULLUP);
  pinMode(afstandTriq, OUTPUT);
  pinMode(afstandEcho, INPUT);
  myservo.attach(servoPin);
  digitalWrite(ledPinRood, HIGH);
}

void startServo() {
  if (ifPressed) {
    myservo.write(140);
    digitalWrite(ledPinRood, HIGH);
    digitalWrite(ledPinGroen, LOW);
  } else {
    myservo.write(0); // Zet de servo in de neutrale positie (90 graden)
    digitalWrite(ledPinRood, LOW);
    digitalWrite(ledPinGroen, HIGH);
  }
}


int meetAfstand() {
digitalWrite(afstandTriq, LOW);
  delay(2);
  digitalWrite(afstandTriq, HIGH);
  delay(100);
  digitalWrite(afstandTriq, LOW);
  duration = pulseIn(afstandEcho,HIGH);

  distance = duration * 0.032 / 2;
  return distance;
}

void loop() {
  int buttonStateGroen = digitalRead(knopGroen);
  int buttonStateRood = digitalRead(knopRood);

  if (buttonStateGroen == LOW && !ifPressed && distance < 11) {
    ifPressed = true;
  }
    else if (buttonStateRood == LOW && ifPressed)
  {
    ifPressed = false;
  } 
  
  int gemetenAfstand = meetAfstand();
  startServo();
  delay(100);
}

