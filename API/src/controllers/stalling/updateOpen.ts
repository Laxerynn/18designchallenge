export async function updateOpenController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const { id } = req.params;
  
      const { userId } = req.body;
  
      // controleert of de gebruikers id is ingevuld
      const stalling = await db.collection('stalling').findOne({
          code: id,
          userId: userId,
          isScanned: true
      });
  
      if(stalling) {
        await db.collection('stalling').updateOne(
          { code: id },
          {  $set: {
              userId: userId,
              isScanned: true,
              isOpen: false,
              updatedAt: new Date(), 
            }
          }
        );

        res.status(200).json({ message: 'De fietsenstalling is geopend door een gebruiker.' });
      } else {
        res.status(400).json({ message: 'Deze fietsenstalling bestaat niet of is niet gescanned door een gebruiker.' });
      }
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }