const { db } = require('../config/database');

const deleteController = async (req, res) => {
  console.log("raw request body:", req.body);

  const body = req.body;

  // Now includes 'delete_id'
  const id =
    typeof body === 'string'
      ? body
      : body?.id || body?._id || body?.volunteerId || body?.userId || body?.delete_id;

  if (!id) {
    console.log(" Could not find 'id' in request body. Full body was:", body);
    return res.status(400).json({ error: "Invalid or missing volunteer ID" });
  }

  try {
    const volunteerRef = db.collection("users").doc(id);
    const doc = await volunteerRef.get();

    if (!doc.exists) {
      console.log(` Volunteer with ID ${id} not found.`);
      return res.status(404).json({ error: "Volunteer not found" });
    }

    await volunteerRef.delete();
    console.log(` Volunteer with ID ${id} deleted successfully.`);
    return res.redirect("/user/volunteers");
    //return res.status(200).json({ message: "Volunteer deleted successfully" });
  } catch (error) {
    console.error("Error deleting volunteer:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = deleteController;


