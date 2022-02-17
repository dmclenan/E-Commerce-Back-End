const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {
    include: [Product]
  })
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
      // be sure to include its associated Products
    })
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json(err);
    })
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id }
  })
    .then((result) =>
      res.status(200).json(result))
    .catch((err) =>
      res.status(500).json(err))
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id }
  })
    .then((result) =>
      res.status(200).json(result))
    .catch((err) =>
      res.status(500).json(err))
});

module.exports = router;
