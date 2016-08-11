'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Product name',
    trim: true
  },
  upc: {
    type: Number,
    default: '',
    required: 'Please fill Product upc',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill Product description',
    trim: true
  },
  price: {
    type: Number,
    default: '',
    required: 'Please fill Product price',
    trim: true
  },
  inventory: {
    type: Number,
    default: '',
    required: 'Please fill Product inventory',
    trim: true
  },
  cost: {
    type: Number,
    default: '',
    required: 'Please fill Product cost',
    trim: true
  },
  department: {
    type: String,
    default: '',
    required: 'Please fill Product department',
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

mongoose.model('Product', ProductSchema);
