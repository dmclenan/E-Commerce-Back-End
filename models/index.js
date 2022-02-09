// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignkey: "category_id",
  onDelete: "CASCADE",
})
// Categories have many Products
Category.hasMany(product,{

})
// Products belongToMany Tags (through ProductTag)
product.belongsToMany(Tag,{

})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(products,{
  
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
