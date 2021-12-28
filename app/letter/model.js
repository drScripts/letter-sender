const mongoose = require("mongoose");
const moment = require("moment");

const letterSchema = mongoose.Schema(
  {
    sender: {
      type: String,
      require: [true, "Please Add Sender Name"],
    },
    recipient: {
      type: String,
      require: [true, "Please Add Recipient Email"],
    },
    to: {
      type: String,
      require: [true, "Please Add To Name"],
    },
    paragraphs: [
      {
        type: String,
        require: [true, "Please Fill paragraphs"],
      },
    ],
    subject: {
      type: String,
      require: [true, "Please Add Subject"],
    },
    footer: {
      type: String,
      require: [true, "Please Add Footer"],
    },
    sendOn: {
      type: String,
      require: [true, "Please Add Date Sendding"],
    },
    status: {
      type: String,
      enum: ["pending", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Letter = mongoose.model("Letter", letterSchema);

const addData = async (data) => {
  const letter = new Letter({
    sender: data.senderName,
    recipient: data.recipientEmail,
    to: data.to,
    subject: data.subject,
    footer: data.footer,
    sendOn: data.date ?? Date.now(),
    paragraphs: data.letters,
  });

  try {
    return await letter.save();
  } catch (error) {
    return false;
  }
};

const updateStatus = async (id) => {
  try {
    await Letter.updateOne({ _id: id }, { status: "delivered" });
    return true;
  } catch (error) {
    return false;
  }
};

const findById = async (id) => {
  try {
    return await Letter.findById(id);
  } catch (error) {
    return error;
  }
};
 

module.exports = { addData, updateStatus, findById, getNow };
