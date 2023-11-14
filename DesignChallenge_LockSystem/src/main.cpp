#include <Arduino.h>
#include <Servo.h>

/*
Pin initialisatie actuatoren en sensoren.
Initialisatie variabelen
*/

int ledPinRood = 7;
int ledPinGroen = 9;
int servoPin = 6;
int knopPinGroen = 5;
int knopPinRood = 8;
int buzzerPin = 12;

int fietsTrigPin = 3;
int fietsEchoPin = 2;
int spaakTrigPin = 11;
int spaakEchoPin = 10;

int maxAfstandFiets = 11;
int maxAfstandSpaak = 7;
int servoDegree = 0;

long duration;
int distance;
bool ifPressed = false;
Servo myservo;

void setup() {
  Serial.begin(9600);
  pinMode(ledPinRood, OUTPUT);
  pinMode(ledPinGroen, OUTPUT);
  pinMode(knopPinGroen, INPUT_PULLUP);
  pinMode(knopPinRood, INPUT_PULLUP);
  pinMode(buzzerPin, OUTPUT);

  pinMode(fietsTrigPin, OUTPUT);
  pinMode(fietsEchoPin, INPUT);
  pinMode(spaakTrigPin, OUTPUT);
  pinMode(spaakEchoPin, INPUT);

  myservo.attach(servoPin);
  digitalWrite(ledPinRood, HIGH);
}

/*
Function void startServo()
Check of knop ingedrukt is voor draaien servo
*/

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

/*
Function int meetAfstand()
Meet de afstand die gemeten word door de sensor
Trig = meegegeven trigPin
Echo = meegegeven echoPin
Geeft vervolgens gemeten afstand terug
*/

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

/*
Function void loop()
Leest de buttonstates en afstanden
*/

void loop() {
  int buttonStateGroen = digitalRead(knopPinGroen);
  int buttonStateRood = digitalRead(knopPinRood);
  int gemetenAfstandFiets = meetAfstand(fietsTrigPin, fietsEchoPin);
  int gemetenAfstandSpaak = meetAfstand(spaakTrigPin, spaakEchoPin);

  if (buttonStateGroen == LOW && !ifPressed && gemetenAfstandFiets < maxAfstandFiets && gemetenAfstandSpaak > maxAfstandSpaak) {
    ifPressed = true;
  }
    else if (buttonStateRood == LOW && ifPressed)
  {
    ifPressed = false;
  } 
  
  if (ifPressed && gemetenAfstandFiets > 11)
  {
    // Zet de buzzer aan met een frequentie van 1000 Hz
  tone(buzzerPin, 1500);
  delay(500); // Wacht 1 seconde

  // Zet de buzzer aan met een frequentie van 2000 Hz
  tone(buzzerPin, 2000);
  delay(500); // Wacht 1 seconde

  // Stop het geluid
  noTone(buzzerPin);
  delay(200); // Wacht 1 seconde
  }
  
  
  Serial.println(gemetenAfstandSpaak);
  startServo();
  delay(500);
}

