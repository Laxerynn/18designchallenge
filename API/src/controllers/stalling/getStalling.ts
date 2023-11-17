export async function getStallingController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { qrcode } = req.params;

    console.log(qrcode);

    if (!qrcode) {
      return res.status(400).json({ message: 'Stalling qrcode is verplicht' });
    }

    const result = await db.collection('stalling').findOne({
        code: qrcode
    });

    if (!result) {
      return res.status(404).json({ message: 'Fietsenstalling niet gevonden!' });
    }

    res.status(200).json({
      message: "Fietsenstalling gevonden",
      stalling: result
    });

  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}