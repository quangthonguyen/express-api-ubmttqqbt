const mongoose = require('mongoose');
const cvdSchema = new mongoose.Schema(
  {
    stt: {
      type: Number,
      require: true,
    },
    sovb: {
      type: Number,
      require: true,
    },
    loaivb: {
      type: Number,
      require: true,
    },
    donvigui: {
      type: String,
      require: true,
    },
    ngayden: {
      type: Date,
      require: true,
    },
    noidungvb: {
      type: String,
      require: true,
    },
    noidungbutphe: {
      type: String,
      require: true,
    },
    nguoithuchien: {
      type: Array,
      require: true,
    },
    nguoithuchienchinh: {
      type: String,
      require: true,
    },
    thoihan: {
      type: Date,
    },
    trangthai: {
      type: Number,
      required: true,
    },
    filepatch: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    notification: {
      type: Number,
      default: 1,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('cvd', cvdSchema);
