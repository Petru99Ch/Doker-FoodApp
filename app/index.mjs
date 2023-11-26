
import { createFood, getAllFood, upDateFood, deleteFood, sql, getAllByPriceRange,getAllCheapFirst, getAllExpensiveFirst, getByPartialName} from "./orm.mjs"

await createFood({id:1, name:"Soup Hot", price_amount: 25.5, price_currency:"MDL", available: 3 })
await createFood({id:2, name:"Salade Vegetarian", price_amount: 60, price_currency:"MDL", available: 2 })
await createFood({id:3, name:"Pasta Carbonara", price_amount: 42.5, price_currency:"MDL", available: 1 })
await createFood({id:4, name:"Pizza Diablo", price_amount: 185, price_currency:"MDL", available: 5 })
await createFood({id:5, name:"Lasagne Red", price_amount: 105, price_currency:"MDL", available: 4 })


const food1 = await getAllFood()

await upDateFood({id:2 , name: "Second Food New Name"})

await deleteFood({id:2})

const food2 = await getAllByPriceRange(58, 110)

const food3 = await getAllCheapFirst()

const food4 = await getByPartialName("las")




console.log(food4)

sql.end()

