var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    deductions: [
      {
        deductionName: 'Deduction 1',
        shortDescription: 'KMCNY',
        longDescription: 'This is a long description for this particular deduction.',
        value: 3000,
        id: '001'
      },
      {
        deductionName: 'Deduction 2',
        shortDescription: 'UIDSC',
        longDescription: 'This is a long description for this particular deduction.',
        value: 1000,
        id: '002'
      },
      {
        deductionName: 'Deduction 3',
        shortDescription: 'GQURH',
        longDescription: 'This is a long description for this particular deduction.',
        value: 3000,
        id: '003'
      },
      {
        deductionName: 'Deduction 4',
        shortDescription: 'NKQJER',
        longDescription: 'This is a long description for this particular deduction.',
        value: 2300,
        id: '004'
      },
      {
        deductionName: 'Deduction 5',
        shortDescription: 'QEWRJ',
        longDescription: 'This is a long description for this particular deduction.',
        value: 345,
        id: '005'
      },
      {
        deductionName: 'Deduction 6',
        shortDescription: 'WRDF',
        longDescription: 'This is a long description for this particular deduction.',
        value: 678,
        id: '006'
      },
      {
        deductionName: 'Deduction 7',
        shortDescription: 'GYFDYHU',
        longDescription: 'This is a long description for this particular deduction.',
        value: 6798,
        id: '007'
      },
      {
        deductionName: 'Deduction 8',
        shortDescription: 'CHGHH',
        longDescription: 'This is a long description for this particular deduction.',
        value: 1234,
        id: '008'
      },
      {
        deductionName: 'Deduction 9',
        shortDescription: 'SXDCFVG',
        longDescription: 'This is a long description for this particular deduction.',
        value: 765,
        id: '009'
      },
      {
        deductionName: 'Deduction 10',
        shortDescription: 'UHYGF',
        longDescription: 'This is a very very very very very very very long description for this particular deduction.',
        value: 3749,
        id: '010'
      }
    ]
  });
});

router.delete('/:id', function(req, res, next) {
  res.send({
    status: 'success'
  })
});

module.exports = router;
