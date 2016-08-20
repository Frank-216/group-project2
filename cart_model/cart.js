module.exports = function Cart() {
	this.items = {};
	this.totalQty = 0;
	this.totalPrice = 0;
	// plus shipping
	this.plusShipping = 0;
};
