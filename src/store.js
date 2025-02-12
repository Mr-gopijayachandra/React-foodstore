// import { configureStore,createSlice } from "@reduxjs/toolkit";

import { configureStore, createSlice } from "@reduxjs/toolkit";


// const productSlice=createSlice(
//     {
//     name:'products',
//     initialState:{
//          veg:[{name:'tamato',price:200.05},
//             {name:'potato',price:250.07},
//             {name:'carrot',price:300.05},
//          ],
//          Nonveg:[{name:'chicken',price:300.05},
//             {name:'mutton',price:850.07},
//             {name:'fish',price:1000.05},
//          ]
//     },
//     reducers:{}
// });
//  let cartSlice=createSlice({
//     name:'cart',
//     initialState:[],
    
//     reducers:{
//         addtocart:(state,action)=>{
//             const items=state.find(items=>state.name === action.payload.name);
//             if(items){
//                 items.quantity+=1;
//             }
//             else{
//                state.push({...action,quantity:1});
//             }
//         },
//          increment:(state,action)=>{
//             let items=state.find(items=>items.name===action.payload.name);
//             if(items){
//                 items.quantity+=1;
//             }
//          },
//          decrement:(state,action)=>{
//             let items=state.find(items=>items.name===action.payload.name)
//             if(items){
//                 items.quantity-=1;
//             }
//          },
//          remove:(state,action)=>{
//             let remove=state.find(items=>items.name !== action.payload.name);
//          },
//     }
//  })
// const store=configureStore({
//     reducer:{products:productSlice.reducer,
//              cart:cartSlice.reducer}
// })
 
// export const{addtocart,increment,decrement,remove}=cartSlice.actions;
// export default store;


const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'tomato', price: 90.05, image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" },
            { name: 'potato', price: 250.07, image: "potato.jpg" },
            { name: 'carrot', price: 300.05, image: "carrot.jpg" },
            { name: 'chilli', price: 10.05, image: "chilli.jpg" },
            { name: 'ladys finger', price: 60.05, image: "lady.png" },
            { name: 'cabbage', price: 80.05, image: "cab.png" },
            { name: 'cauliflower', price: 100.05, image: "cali.png" },
            { name: 'beans', price: 40.05, image: "beans.png" },
            

        ],
        nonveg: [
            { name: 'chicken', price: 300.05, image: "chick.jpg" },
            { name: 'mutton', price: 850.07, image: "mutton.jpg" },
            { name: 'fish', price: 1000.05, image: "fish.jpg" },
            { name: 'prawns', price: 900.05, image: "prw.png" },
            { name: 'crabe', price: 800.05, image: "crab.png" },
            { name: 'lobster', price: 950.05, image: "lob.png" },
            { name: 'apollo fish', price: 1150.05, image: "apoll.jpg" },
            { name: 'leg pices', price: 500.05, image: "leg.jpg" },
            
        ]
    },
    reducers: {}
});


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    
    reducers: {
        addtocart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                return state.filter(item => item.name !== action.payload.name);
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clear:()=>[]
    }
});
      
 let purchaseslice=createSlice({
    name:'purchase',
    initialState:[],
    reducers:{
        addToparchase:(state,action)=>{
            state.push(action.payload)
            console.log("data save successfully");
        }
    }
 });
 const authSlice = createSlice({
    name: "auth",
    initialState: {
            isAuthenticated: localStorage.getItem("username") ? true : false,
            user: localStorage.getItem("username") || "", // Get stored username
          },
  
    reducers: {
      login: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        localStorage.setItem("username", action.payload); // Store in localStorage
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = "";
        localStorage.removeItem("username"); // Clear from localStorage
      },
    },
  });
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        purchase:purchaseslice.reducer,
        auth:authSlice.reducer

    }
});

export const { addtocart, increment, decrement, remove,clear } = cartSlice.actions;
export const{addToparchase}=purchaseslice.actions;
export default store;
export const {login,logout} = authSlice.actions;
