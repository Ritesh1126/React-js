// gsap.to(
//     ".box",
//     {
//         x:500,
//         dureation:2,
//         delay:1,
//         backgroundColor:"red",
//         borderRadius:"50%"
//     }
// )

// console.log(React); // it is use for UI 
// console.log(ReactDOM); // React and DOM ko connect krna 



// ye js ki help se banaya 
// var h1 = document.createElement('h1');

// h1.innerHTML = "Hello From Roman ";
// document.body.appendChild(h1);

// Ye Reactjs ki help se banaya 
var h1 = React.createElement('h1', null , "hello From React "); // null property is attribute
var h2 = React.createElement('h2', null , "hello From Roman ");

var div = React.createElement('div' , null, h1 , h2)
// 1st way to write --> 

// var root = document.querySelector('#root')
// var container = ReactDOM.createRoot(root)
// container.render(h1);

// 2nd way to write -->

var root = ReactDOM.createRoot(document.querySelector('#root')).render(div);