#include <Arduino.h>
#include <Stepper.h>

/*
Pin initialisatie actuatoren en sensoren.
Initialisatie variabelen
*/

int ledPinRood = 4;
int knopPinGroen = 5;
int knopPinRood = 6;
int buzzerPin = 7;

int fietsTrigPin = 12;
int fietsEchoPin = 13;

int maxAfstandFiets = 11;

int buttonStateGroen;
int buttonStateRood;
int gemetenAfstandFiets;

long duration;
int distance;
bool ifPressed = false;

int motorPin1 = 8;
int motorPin2 = 9;
int motorPin3 = 10;
int motorPin4 = 11;

Stepper stepper(2048, motorPin1, motorPin3, motorPin2, motorPin4);

void setup() {
  Serial.begin(9600);

  pinMode(ledPinRood, OUTPUT);
  pinMode(knopPinGroen, INPUT_PULLUP);
  pinMode(knopPinRood, INPUT_PULLUP);
  pinMode(buzzerPin, OUTPUT);

  pinMode(fietsTrigPin, OUTPUT);
  pinMode(fietsEchoPin, INPUT);

  digitalWrite(ledPinRood, HIGH);

  stepper.setSpeed(15);
}



/*
Function void startServo()
Check of knop ingedrukt is voor draaien servo
*/

void startServo() {
  if (ifPressed) {
    Serial.println("on");
    digitalWrite(ledPinRood, HIGH);
    stepper.step(1000);
    delay(100);
  } else {
    Serial.println("off");
    stepper.step(-1000);
    digitalWrite(ledPinRood, LOW);    
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
  buttonStateGroen = digitalRead(knopPinGroen);
  buttonStateRood = digitalRead(knopPinRood);
  gemetenAfstandFiets = meetAfstand(fietsTrigPin, fietsEchoPin);

  if (buttonStateGroen == LOW && !ifPressed && gemetenAfstandFiets < maxAfstandFiets) 
  {
    ifPressed = true;
    startServo();
    
  }
    else if (buttonStateRood == LOW && ifPressed)
  {
    ifPressed = false;
    startServo();
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
  
  
  Serial.println(gemetenAfstandFiets);
  delay(500);
 }

