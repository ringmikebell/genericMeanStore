'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
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
  dateHired: {
    type: Date,
    required: 'date hired',
    trim: true
  },
  department: {
    type: String,
    default: '',
    required: 'department',
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

mongoose.model('Employee', EmployeeSchema);
