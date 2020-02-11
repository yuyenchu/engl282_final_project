import React from 'react'

export const initialState = {
  // images : [
  //   {
  //     url: "../PhoShizzle_Pho.jpg",
  //     title: "Shizzle",
  //     food: "Pho",
  //     width: "100%",
  //     available: 10,
  //     reserve: 0,
  //     longlat : [-122.31335, 47.65933]
  //   },
  //   {
  //     url: "../PhoThanBrothers_Pho.jpg",
  //     title: "Thanh",
  //     food: "Pho Ga",
  //     available: 7,
  //     reserve: 0,
  //     longlat: [-122.31313, 47.66129]

  //   },
  //   {
  //     url: "../ThaigerRoom_PadThai.jpg",
  //     title: "Thaiger Room",
  //     food: "Pad Thai",
  //     available: 15,
  //     reserve: 0,
  //     longlat: [-122.31299, 47.65918]
  //   }
  // ],
  restaurantID : 3,
  restaurants : [
    {
      id: 1,
      title: "Pho Shizzle",
      items : [
        { 
          url: "../PhoShizzle_Pho.jpg",
          food: "Pho",
          available: 10,
          reserve: 0
        }
      ],
      longlat : [-122.31335, 47.65933] 
    },
    {
      id: 2,
      title: "Pho Than Brother",
      items : [
        { 
          url: "../PhoThanBrothers_Pho.jpg",
          food: "Pho tai",
          available: 7,
          reserve: 0
        }
      ],
      longlat: [-122.31313, 47.66129]
    },
    {
      id: 3,
      title: "Thaiger Room",
      items : [
        { 
          url: "../ThaigerRoom_PadThai.jpg",
          food: "Pad Thai",
          available: 12,
          reserve: 0
        }
      ],
      longlat: [-122.31299, 47.65918]
    },

    {
      id: 4,
      title: "Ezell's Famous Chicken",
      items : [
        { 
          url: "../chicken_combo.jpg",
          food: "Dinner Combo",
          available: 12,
          reserve: 0
        },
        { 
          url: "../chick.jpg",
          food: "chicken tender combo",
          available: 12,
          reserve: 0
        }
      ],
      longlat: [-122.33099, 47.66158]
    }
  ]

}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "RESERVE":
      // https://daveceddia.com/react-redux-immutability-guide/#redux-update-an-item-in-an-array-by-index
      // let updated = state.images.map((item, index) => {
      //   if (index == action.payload.index) {
      //     return {...state.images[action.payload.index], reserve:action.payload.reserve}
      //   }
      //   return item
      // })
      // return {images:updated}
      let updated = state.restaurants.map((item, index) => {
        if (index == action.payload.index) {
          // let copy = state.restaurants[action.payload.index];
          // copy.items[action.payload.itemIndex].reserve = action.payload.reserve;
          let copy = {...state.restaurants[action.payload.index]}
          copy.items[action.payload.itemIndex].reserve = action.payload.reserve;
          // return {...state.restaurants[action.payload.index], items:action.payload.reserve}
          console.log(copy);
          return copy;
        }
        return item;
      })
      // let a = {restaurants:updated};
      // console.log(a);
      return {...state, restaurants:updated};
    case "ADD":
      let update = state.restaurants.map((item, index) => {
        if (item.id == action.payload.id) {
          item.items.push({ url: action.payload.url, 
                            food: action.payload.food,
                            available: action.payload.available,
                            reserve: 0})
        }
        console.log(item);
        return item;
      })
      return {...state, restaurants:update}
    case "PICKUP":
        // let updates = state.restaurants.map((item, index) => {
        //   if (item.id == action.payload.id) {
        //     item.items.push({ url: action.payload.url, 
        //                       food: action.payload.food,
        //                       available: action.payload.available,
        //                       reserve: 0})
        //   }
        //   return item;
        // })
        // return {restaurants:updates}
        break;
    case "RestIDUpdate":
      let newID = action.payload.id;
      console.log("new id: " + newID);
      let newVal = {...state, restaurantID:newID};
      console.log(newVal);
      return newVal;
    default:
      return initialState
  }
}

export const Context = React.createContext(null)