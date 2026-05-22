import Franchise from "../models/Franchise.js";
import User from "../models/User.js";

// CREATE (form submit)
export const applyFranchise = async (req, res) => {
  try {
    const data = req.body;

    const existing = await Franchise.findOne({ email: data.email });
    if (existing) {
      return res.status(400).json({ message: "Already applied" });
    }

    const doc = await Franchise.create(data);

    res.json({
      message: "Application submitted",
      id: doc._id,
    });
  } catch (e) {
    res.status(500).json({ message: "Failed to submit" });
  }
};

// READ (admin)
export const getAllFranchise = async (req, res) => {
  try {
    const list = await Franchise.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data" });
  }
};

// APPROVE
export const approveFranchise = async (req, res) => {
  try {
    const { id } = req.params;

    const f = await Franchise.findById(id);
    if (!f) return res.status(404).json({ message: "Not found" });

    if (f.status === "approved") {
      return res.json({ message: "Already approved" });
    }

    // 1) status update
    f.status = "approved";
    await f.save();

    // 2) seller account create/update
    let user = await User.findOne({ email: f.email });

    if (!user) {
      user = await User.create({
        email: f.email,
        role: "seller",
      });
    } else {
      user.role = "seller";
      await user.save();
    }

    res.json({ message: "Approved & seller created" });

  } catch (err) {
    res.status(500).json({ message: "Error approving" });
  }
};

// REJECT
export const rejectFranchise = async (req, res) => {
  try {
    const { id } = req.params;

    const f = await Franchise.findById(id);
    if (!f) return res.status(404).json({ message: "Not found" });

    f.status = "rejected";
    await f.save();

    res.json({ message: "Rejected" });

  } catch (err) {
    res.status(500).json({ message: "Error rejecting" });
  }
};

// 🔥 DELETE (FIXED)
export const deleteFranchise = async (req, res) => {
  try {
    const { id } = req.params;

    const f = await Franchise.findById(id);
    if (!f) return res.status(404).json({ message: "Not found" });

    // 🔥 IMPORTANT: user role downgrade
    await User.findOneAndUpdate(
      { email: f.email },
      { role: "user" }
    );

    // delete franchise record
    await Franchise.findByIdAndDelete(id);

    res.json({ message: "Deleted & seller access removed" });

  } catch (err) {
    res.status(500).json({ message: "Error deleting" });
  }
};