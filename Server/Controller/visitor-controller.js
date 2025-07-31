import { Visitor } from "../Database/Visitor.js";

export const SaveVisitors = async (req, res) => {
  try {
    const { ip, city, isp, timestamp, network, battery, device } = req.body;

    const abc = req.body.ip;
    const partialIp = abc.split(".").slice(0, 3).join(".");

    const primaryKey =
      city +
      partialIp +
      device.isDesktop +
      device.ram +
      device.cpuCores +
      device.touch;

    const existingVisitor = await Visitor.findOne({ visitorId: primaryKey });

    if (existingVisitor) {
      existingVisitor.visitCount = (existingVisitor.visitCount || 1) + 1;
      existingVisitor.timestamp = new Date();

      existingVisitor.network = network;
      existingVisitor.battery = battery;
      existingVisitor.device = device;

      await existingVisitor.save();

      return res.status(200).json({
        message: "Returning visitor updated",
        visits: existingVisitor.visitCount,
      });
    }

    const newVisitor = new Visitor({
      visitorId: primaryKey,
      ip,
      city,
      isp,
      timestamp,
      network,
      battery,
      device,
      visitCount: 1,
    });

    await newVisitor.save();

    return res.status(201).json({ message: "New visitor recorded", visits: 1 });
  } catch (error) {
    console.error("Visitor save error:", error.message);
    res.status(500).json({ message: "Error monitoring visitor" });
  }
};
