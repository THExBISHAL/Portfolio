import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  visitorId: {
    type: String,
    required: true,
    unique: true,
  },
  ip: { type: String },
  city: { type: String },
  isp: { type: String },
  timestamp: { type: String },

  network: {
    type: {
      type: String,
      default: null,
    },
    rtt: { type: Number, default: null },
    downlink: { type: Number, default: null },
  },

  battery: {
    level: { type: Number, default: null },
    charging: { type: Boolean, default: null },
  },

  device: {
    isMobile: { type: Boolean, default: null },
    isTablet: { type: Boolean, default: null },
    isDesktop: { type: Boolean, default: null },
    ram: { type: Number, default: null },
    cpuCores: { type: Number, default: null },
    touch: { type: Boolean, default: null },
    orientation: { type: String, default: null },
  },
  visitCount: { type: Number, default: 1 },
});

export const Visitor = mongoose.model("Visitor", visitorSchema);
