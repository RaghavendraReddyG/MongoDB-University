db.products.find({for:{$exists:1},for:"ac3"}).forEach( function(item) { db.products.update({_id:item._id},{$inc:{price:2}}) } )
// homework.c()