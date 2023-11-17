export async function createStallingController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { qrcode } = req.body;

    if(!qrcode) {
      return res.status(400).json({ message: 'Stalling qrcode is verplicht' });
    }

    // controleert of de gebruikers e-mailadres al bestaat
    const existingCode = await db.collection('stalling').findOne({
      code: qrcode,
    });

    //als de e-mailadres van de gebruiker al bestaat, geeft het een error
    if (existingCode) {
      return res.status(400).json({ message: 'Deze fietsenstalling bestaat al.' });
    }

    //hash password with bcrypt
    const saltRounds = 10;

    const result = await db.collection('stalling').insertOne({
        code: qrcode,
        isScanned: false,
        isOpen: true,
        createdAt: new Date(),
    });

    //checkt of de gebruiker is aangemaakt in de database en geeft een bericht terug
    if (result.acknowledged) {
      res.status(200).json({
        status: "SUCESS", 
        message: 'De stalling is aangemaakt.' 
      });
    } else {
      //als de gebruiker niet is aangemaakt, geeft het een error
      throw new Error('De stalling is niet aangemaakt.');
    }
  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}