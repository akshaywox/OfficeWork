const menu = [
  {
    name: "Margherita", price: 8
  },
  {
    name: "Pepperoni", price: 10
  },
  {
    name: "Hawaiian", price: 10
  },
  {
    name: "Veggie", price: 9
  },
]

const cashInRegister = 100
const nextOrderId = 1

const orderQueue = []

function addNewPizza(pizzaOb) {
  menu.push(pizzaOb)
}

function placeOrder(pizzaName) {
  const selectedpizza = menu.find(pizzaOb => pizzaOb.name === pizzaName)
  cashInRegister += selectedpizza.price
  const newOrder = { id: nextOrderId++, pizza: selectedpizza, status: "ordered" }
  orderQueue.push(newOrder)
  return newOrder
}

function CompleteOrder(orderId) {
  const order = orderQueue.find(order => order.id === orderId)
  order.status = "completed"
  return order
}
addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chiken Bacon Ranch")
CompleteOrder("1")

console.log("Menu : ", menu)
console.log("Cash in register : ", menu)
console.log("Order queue : ", menu)