import postgres from 'postgres'


// connect to  the database 

const sql = postgres('postgres://food:qazwsx@localhost:7117/food')


// CRUD operations

const createFood = async (food) =>{
    await sql `
        INSERT INTO food VALUES 
        (${food.id}, ${food.name},
            ${food.price_amount},${food.price_currency}, 
            ${food.available} );
    `
}

const getAllFood = async () =>{
    const food = await sql `
        SELECT * FROM food;
    `

    return food
}

const upDateFood = async (food) =>{
    await sql `
        UPDATE food 
        SET name = ${food.name}
        WHERE id = ${food.id}
    `
}

const deleteFood = async (food) =>{
    await sql `
        DELETE FROM food 
        WHERE id = ${food.id}
    `
}


// HW:


// minPrice < > maxPrice

const getAllByPriceRange = async (minPrice, maxPrice) =>{
   const food = await sql `
        SELECT * FROM food
        WHERE price_amount > ${minPrice} AND price_amount < ${maxPrice};
    `

    return food
}


// Cheap First
    const getAllCheapFirst = async () =>{
        const food = await sql `
            SELECT * FROM food
            ORDER BY price_amount;
        `

        return food
    }

// Expensive First

const getAllExpensiveFirst = async () =>{
    const food = await sql `
        SELECT * FROM food
        ORDER BY price_amount DESC;
    `

    return food
}

// Partial Name 

const getByPartialName = async (keywords) =>{
    let key = `%${keywords}%`
    const food = await sql `
        SELECT * FROM food
        WHERE name ILIKE ${key}
    `
    return food
}

export {createFood,getAllFood,upDateFood, deleteFood, sql, getAllByPriceRange, getAllCheapFirst,getAllExpensiveFirst, getByPartialName }