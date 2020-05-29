import React from "react";
import ContactCard from "./ContactCard";
import Joke from "./Joke";

// using dynamic changes

// function Body() {
//   const date = new Date();
//   const hours = date.getHours();
//   let timeOfDay;

//   //inline styling
//   const styles = {
//     fontSize: 30,
//   };

//   if (hours < 12) {
//       timeOfDay = "morning";
//       styles.color = "black"
//   } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//       styles.color = "yellow"
//   } else {
//       timeOfDay = "night";
//       styles.color = "brown"
//     }
//     //adding inline style
//   return <h1 style={styles}>Good {timeOfDay}!</h1>;
// }

// using props effeciently

// function Body() {
//   return (
//     <div className="contacts">
//       <ContactCard
//         contact={{ name: "Ms Arthy", imgUrl: "", phone: "", email: "" }}
//       />
//       <ContactCard
//         contact={{ name: "Ms Aaru", imgUrl: "", phone: "", email: "" }}
//       />
//       <ContactCard
//         contact={{ name: "Ms Pinky", imgUrl: "", phone: "", email: "" }}
//       />
//       <ContactCard
//         contact={{ name: "Ms Umapathy", imgUrl: "", phone: "", email: "" }}
//       />
//     </div>
//   );
// }

function Body() {
  return (
    <div>
      <Joke value={{  answer: "Its arthy" }} />
      <Joke value={{ question: "what is ur name", answer: "Its aaru" }} />
      <Joke value={{ question: "what is ur name", answer: "Its pinky" }} />
      <Joke value={{ question: "what is ur name", answer: "Its captain" }} />
      <Joke value={{ question: "what is ur name", answer: "Its thala" }} />
    </div>
  );
}

export default Body;
