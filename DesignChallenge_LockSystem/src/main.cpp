#include <Arduino.h>
#include <Servo.h>

int ledPinRood = 7;
int ledPinGroen = 9;
int servoPin = 6;
int pos = 0;
int knopGroen = 5;
int knopRood = 8;
int buzzer = 12;

int afstandTrigFiets = 3;
int afstandEchoFiets = 2;
int maxAfstandFiets = 11;

int afstandTrigSpaak = 11;
int afstandEchoSpaak = 10;
int maxAfstandSpaak = 7;

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
  pinMode(buzzer, OUTPUT);

  pinMode(afstandTrigFiets, OUTPUT);
  pinMode(afstandEchoFiets, INPUT);

  pinMode(afstandTrigSpaak, OUTPUT);
  pinMode(afstandEchoSpaak, INPUT);

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


int meetAfstand(int Trig, int Echo) {
digitalWrite(Trig, LOW);
  delay(2);
  digitalWrite(Trig, HIGH);
  delay(100);
  digitalWrite(Trig, LOW);
  duration = pulseIn(Echo, HIGH);

  distance = duration * 0.032 / 2;
  return distance;
}

void loop() {
  int buttonStateGroen = digitalRead(knopGroen);
  int buttonStateRood = digitalRead(knopRood);
  int gemetenAfstandFiets = meetAfstand(afstandTrigFiets, afstandEchoFiets);
  int gemetenAfstandSpaak = meetAfstand(afstandTrigSpaak, afstandEchoSpaak);

  if (buttonStateGroen == LOW && !ifPressed && gemetenAfstandFiets < maxAfstandFiets && gemetenAfstandSpaak > maxAfstandSpaak) {
    ifPressed = true;
  }
    else if (buttonStateRood == LOW && ifPressed)
  {
    ifPressed = false;
  } 
  
  
  Serial.println(gemetenAfstandSpaak);
  startServo();
  delay(100);
  tone(buzzer, 1000);
  delay(1000);
  noTone(buzzer); 
  delay(1000);
}

