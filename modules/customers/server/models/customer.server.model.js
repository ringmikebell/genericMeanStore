'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
  firstName: {
    type: String,
    default: '',
    required: 'first name',
    trim: true
  },
    lastName: {
    type: String,
    default: '',
    required: 'last name',
    trim: true
  },
  address: {
    type: String,
    default: '',
    required: 'address',
    trim: true
  },
  phoneNumber: {
    type: String,
    default: '',
    required: 'phone number',
    trim: true
  },
  dateLastPurchase: {
    type: Date,
    required: 'date of last purchase',
    trim: true
  },
  birthday: {
    type: Date,
    required: 'birthday',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Customer', CustomerSchema);
