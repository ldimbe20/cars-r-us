const database={
    paint: [
        {
            id: 1, 
            color: "Silver", 
            price: 5.99
        },
        {
           id: 2, 
           color: "MidNight Blue", 
           price: 0.99  
       },
       {
        id: 3, 
        color: "Firebrick Red", 
        price: 7.99  
        },
        {
        id: 4, 
        color: "Spring Green", 
        price: 8.99  
        },
    ],
     interior : [
        {
            id: 1, 
            type: "Beige Fabric", 
            price: 5.99
        },
        {
           id: 2, 
           type: "charcoal fabric", 
           price: 0.99  
       },
       {
        id: 2, 
        type: "White Leather", 
        price: 7.99  
        },
        {
        id: 3, 
        type: "Black Leather", 
        price: 8.99  
        },
    ],
    technology : [
        {
            id: 1, 
            type: "Basic", 
            price: 5.99
        },
        {
           id: 2, 
           type: "Navigation", 
           price: 0.99  
       },
       {
        id: 2, 
        type: "Visibility", 
        price: 7.99  
        },
        {
        id: 3, 
        type: "Ultra Package", 
        price: 8.99  
        },
    ],
    wheel : [
        {
            id: 1, 
            size: "17 inch", 
            price: 5.99
        },
        {
           id: 2, 
           size: "17 inch radial", 
           price: 0.99  
       },
       {
        id: 2, 
        size: "18 inch silver", 
        price: 7.99  
        },
        {
        id: 3, 
        size: "18 inch black", 
        price: 8.99  
        },
    ]
    

}

//exporting getPaint function which makes a copy of the paint array
export const getPaint = ()=> {
    return database.paint.map(paint => ({...paint}))
}

//exporting getInterior function which makes a copy of the interior array
export const getInterior = ()=> {
    return database.interior.map(interior => ({...interior}))

}
//exporting getTechnology function which makes a copy of the technology array
export const getTechnology = ()=> {
    return database.technology.map(technology => ({...technology}))
    
}

export const getWheels = ()=> {
    return database.wheel.map(wheels => ({...wheels}))
    
}