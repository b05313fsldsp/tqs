//var mongoose = require('mongoose')
//var SchemaTypes = mongoose.Schema.Types;

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      SN: String,
      CANID: String,
      SPN1761: Number,
      TTIMESTAMP: Number,
      createdAt:String

    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tqs = mongoose.model("tqs", schema);
  return Tqs;
};
