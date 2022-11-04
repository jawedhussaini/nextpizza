import dbConnection from "../../../utilites/mongo";
import Orderpending from "../../../models/Orderpending";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnection

  if (method === "GET") {
    try {
      const order = await Orderpending.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Orderpending.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
     try {
        await Orderpending.findByIdAndDelete(id);
        res.status(200).json("order has bin deleted")
    } catch (error) {
        res.status(500).json(error)
    }
  }
};

export default handler;