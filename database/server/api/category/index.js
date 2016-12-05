'use strict';

var express = require('express');
var controller = require('./category.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

router.get('/all', auth.hasRole('admin'), controller.indexAll); // also index inactive & nested categories
router.get('/', controller.index);
router.get('/:id/children', controller.indexChildren);
router.get('/:id', controller.show);
router.post('/', auth.hasRole('admin'), controller.create);
router.put('/:id', auth.hasRole('admin'), controller.upsert);
router.patch('/:id', auth.hasRole('admin'), controller.patch);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
