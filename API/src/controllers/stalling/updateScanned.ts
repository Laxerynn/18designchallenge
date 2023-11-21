export async function updateScannedController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { id } = req.params;

    const { userId } = req.body;

    // controleert of de gebruikers id is ingevuld
    const stalling = await db.collection('stalling').findOne({
        code: id
    });

    if(stalling) {
      await db.collection('stalling').updateOne(
        { code: id },
        {  $set: {
            userId: userId,
            isScanned: true,
            isOpen: true,
            updatedAt: new Date(), 
          }
        }
      );

      res.status(200).json({ message: 'De fietsenstalling is gescanned door een gebruiker.' });
    } else {
      res.status(400).json({ message: 'Deze fietsenstalling bestaat niet.' });
    }
  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}