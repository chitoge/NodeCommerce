checkout{	// hóa đơn.
	String id
	String customerId
	String paymentMethod
	String ship_address
}
Person{
	String id
	String name
	String address
	Integer yearOfBirth
	Arraylist<ProductInCart> cart // list các sản phẩm có trong giỏ của người dùng
}
ProductInCart{ // sản phẩm có trong giỏ hàng
	String productID // productId là id của product dùng để truy vấn ra sản phẩm đó
	Integer number //số lượng sản phẩm có trong giỏ
}
Product{
	String id	// id của sản phẩm
	Integer quantity	// số lượng còn trong kho
	String title
	String description
	List<String> categories // các categories của sản phẩm
	Long pricing
}

url:
database/product{
	GET: return all the product with type List<Product>
	POST: add a product to database with the RequestBody is Product with Json type.
}
database/product/"id"{
	GET: return a product with id in path "id"
	PUT: put a product to database with the RequestBody is product with Json type.
}
database/product/find{
	GET: tìm sản phẩm
		params: 
			categories : tìm bằng categories
			from, to: tìm bằng giá tiền
			name: tìm theo tên 
}

database/person{
	POST: post person trong requestbody
	POST: add product to a person cart
		params:
			personId, productId, numberProduct
	DELETE: delete the product in cart
		params:
			personId, productId
	GET: find all person
}
database/person/find{
	GET: find person by name
		params:
			name
}

database/checkout{
	GET: get all checkout
	POST: post 1 check out from requestbody
	GET: get checkout with that id
		params:
			id
}
