import { ObjectId } from 'mongodb';

export async function qrcodeUserUpdateController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { id } = req.params;

    const { qrcode } = req.body;

    // controleert of de gebruikers id is ingevuld
    const user = await db.collection('customers').findOne({
        _id: new ObjectId(id)
    });

    if (user) {
      if (!qrcode) {
        return res.status(400).json({ message: 'QR-code is verplicht.' });
      } else if(qrcode.length > 6) {
        // Voorbeeld van het bijwerken van de naam van de gebruiker naar "John Doe"
        await db.collection('customers').updateOne(
          { _id: new ObjectId(id) },
          {  $set: { 
              qrcode: qrcode,
              updatedAt: new Date(), 
            }
          }
        );

        res.status(200).json({ message: 'De gebruiker is succesvol bijgewerkt.' });
      } else {
        return res.status(400).json({ message: 'QR-code moet minimaal 6 karakters bevatten.' });

      }
    } else {
      //als de gebruiker niet is aangemaakt, geeft het een error
      throw new Error('De gebruiker is niet bijgewerkt.');
    }
  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}