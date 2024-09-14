const express = require('express')
const{getCustDetails,createCust,getCustDetail,updateCust,deleteCust,getCoubyField,getMaxInvoiceNumber} = require('../controller/invoiceController')
const router = express.Router();

router.get('/',getCustDetails);
router.get('/search', getCoubyField);
router.get('/:id',getCustDetail);
router.put('/:id',updateCust);
router.delete('/:id',deleteCust);
router.post('/', createCust);
router.get('/maxinvno', getMaxInvoiceNumber);

module.exports = router;