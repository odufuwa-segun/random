
/* 
Potential Classes and Properties
Item
	- Id
	- Name
	- Price
	- Time to delivery # useful to estimate delivery time

Cart
	- Id
	- ArrayOf(Item)

Seat 
	- Id
	- Meta -> [Any other information to help identify the seat location/position]

Order
	- Id
	- CartId
	- CustomerId
	- TimeCreated
	- TimeCompleted
	- Status -> [cancelled, fulfilled, pending, completed]
	- PaymentMade -> [Yes, No]
	- SeatId

Customer
	- Id
	- FirstName
	- LastName

*/

/*
List of functions

*/

// View all the items on sale
function ViewAllItems(){
	
	
}
// Add Item to Cart
function AddToCart(Item){

	
}
// View items in the cart
function ViewCart(){
	
}
// Add a customer, assumption is that all customers are now. However, this can be revised for returning customers
function AddCustomer(Email, First name, Last name){
	
}
// Book an order, send the cart items to people responsible for fulfilling the order
function BookOrder(CartId, CustomerId){
	
}
// Update an order as either cancelled, fulfilled, pending, completed
function UpdateOrder(OrderId, Status) {
	
}
// to be called when payment is made by the customer
function MakePayment(OrderId){
	
}

// for when the order is delivered to the customer
function MarkOrderFulfilled(OrderId){
	UpdateOrder(OrderId, 'fulfilled');
}

// for the people processing orders, orders can be pulled based on certain criterias
function ViewOrders(filter=[all, fulfilled, pending, completed]){
	
}


