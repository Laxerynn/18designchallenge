import { ObjectId } from "mongodb";
import bcrypt from 'bcryptjs';

export async function loginCustomerController(req: any, res: any) {
  try {
    const { db } = req.app;

    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Customer email and ID is required' });
    }

    const customer = await db.collection('customers').findOne({
      email: email.toLowerCase(),
    });

    if(!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    } else {
      const passwordMatch = await bcrypt.compare(password, customer.password);

      if(!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
    }

    res.status(200).json({
        status: "SUCESS",
        message: "Customer retrieved",
        customer: customer
    });
  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}