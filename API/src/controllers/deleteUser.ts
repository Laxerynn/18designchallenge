import { ObjectId } from "mongodb";

export async function deleteUserController(req: any, res: any) { 
    try {
        const { db } = req.app;

        const { id } = req.params;

        // controleert of de gebruikers id is ingevuld
        const user = await db.collection('customers').findOne({
            _id: new ObjectId(id)
        });

        if(user) {
            await db.collection('customers').deleteOne({
                _id: new ObjectId(id),
            });
            
            res.status(200).json({ message: 'De gebruiker is succesvol verwijderd.' });
        } else {
            //als de gebruiker niet is aangemaakt, geeft het een error
            throw new Error('De gebruiker is niet verwijderd.');
        }
    }
    catch(error) {
        res.status(500).json({ error: error.toString() });
    }
}
