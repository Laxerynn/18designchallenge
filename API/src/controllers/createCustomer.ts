import bcrypt from 'bcryptjs';

export async function createCustomerController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { name, email, password } = req.body;

    // controleert of de naam is ingevuld
    if (!name) {
      return res.status(400).json({ message: 'Naam is verplicht.' });
    }

    // controleert of het e-mailadres is ingevuld
    if (!email) {
      return res.status(400).json({ message: 'E-mailadres is verplicht.' });
    }

    // controleert of het wachtwoord is ingevuld
    if(!password){
      return res.status(400).json({ message: 'Wachtwoord is verplicht.' });
    }

    // controleert of de gebruikers e-mailadres al bestaat
    const existingCustomer = await db.collection('customers').findOne({
      email: email.toLowerCase()
    });

    //als de e-mailadres van de gebruiker al bestaat, geeft het een error
    if (existingCustomer) {
      return res.status(400).json({ message: 'Deze gebruiker bestaat al.' });
    }

    //hash password with bcrypt
    const saltRounds = 10;

    const result = await db.collection('customers').insertOne({
      name,
      email: email.toLowerCase(),
      password: await bcrypt.hash(password, saltRounds),
      qrcode: '',
      createdAt: new Date(),
    });

    // Code voor het controleren dat het wachtwoord die is ingevoerd wel klopt
    // console.log(bcrypt.compareSync(password, await bcrypt.hash(password, saltRounds)));

    //checkt of de gebruiker is aangemaakt in de database en geeft een bericht terug
    if (result.acknowledged) {
      res.status(200).json({ message: 'De gebruiker is aangemaakt.' });
    } else {
      //als de gebruiker niet is aangemaakt, geeft het een error
      throw new Error('De gebruiker is niet aangemaakt.');
    }
  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}