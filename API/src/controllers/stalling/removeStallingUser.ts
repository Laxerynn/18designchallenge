export async function removeStallingUserController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const { id } = req.params;
  
      const { userId } = req.body;
  
      // controleert of de gebruikers id is ingevuld
      const stalling = await db.collection('stalling').findOne({
          code: id,
          userId: userId
      });
  
      if(stalling) {
        await db.collection('stalling').updateOne(
          { code: id },
          {  $set: {
              userId: "",
              isScanned: false,
              isOpen: true,
              updatedAt: new Date(), 
            }
          }
        );

        res.status(200).json({ message: 'De gebruiker is verwijderd van de stalling en is weer open.' });
      } else {
        res.status(400).json({ message: 'Deze fietsenstalling bestaat niet.' });
      }
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }