const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema(
  {
    title: { type: String },
    start: { type: Date },
    end: { type: Date },
  },
  { collection: "todolist" }
);
module.exports = mongoose.model("todolist", todoSchema);
