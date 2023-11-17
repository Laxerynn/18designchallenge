export async function getStallingsController(req: any, res: any) {
  try {
    const { db } = req.app;

    const result = await db.collection('stalling').find().toArray();

    res.status(200).json({
      message: "Stallingen gevonden",
      stalling: result
    });

  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}