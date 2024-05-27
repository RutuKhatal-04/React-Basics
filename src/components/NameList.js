import React from "react";
import Person from "./Person.js";

function NameList() {
  const names = ["Bruce", "clark", "diana"];
  const person = [
    {
      id: 1,
      Name: "Bruce",
      age: 20,
      skill: "React",
    },
    {
      id: 2,
      Name: "Clark",
      age: 30,
      skill: "java",
    },
    {
      id: 3,
      Name: "Dania",
      age: 40,
      skill: "Python",
    },
    {
      id: 4,
      Name: "Dania",
      age: 50,
      skill: "JavaScript",
    },
  ];
  // In this we are mapping and html code in same file
  //   const personList = person.map((person) => (
  //     <h2>
  //       I m {person.Name} . I m {person.age} yrs old . I know {person.skill}
  //     </h2>
  //   ));

  //perosn code in different file

  //   const personList = person.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));

  // this is for without id approach

  // const nameList1 = names.map((name) => <h2>{name}</h2>); //it gives warning to add unique key prop

  //we can add name as a key prop to the h2 element

  // const nameList1 = names.map((name) => <h2 key={name}>{name}</h2>);
  //but if  multiple nmaes are same then it will give the warning as key props should be unique
  // here we are using index as key prop as it will always be unique

  const nameList1 = names.map((name, index) => (
    <h2 key={index}>
      {index} , {name}
    </h2>
  ));

  return (
    <div>
      {/* Normal */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {/* using map method */}
      {/* 
      {names.map((name) => (
        <h2>{name}</h2>
      ))} */}

      {/* {personList} */}

      {nameList1}
    </div>
  );
}

export default NameList;

//person.id id forz unique keys if we give person.name and if in list any of the name is same theen it gives warning

//key prop is special attribute to be include while creating the list of attributes

//key prop is reserved so if we try to pass as a attribute to diff fucnt then it will not work as it is used by react to render list if we want anyhting to be renderd we will have to use it as different props.

//keys helps react identify which items have changed , are added , or are removed
//help in efficient update of user interface

// 2) Know if there is no id like property in list then how to handle it is shown in this file only
//but using index as a key prop will have some issue for ui

//When to use index as a key
// 1)The itemes in your list do not have a unique id
// 2)Ths list is a static list and will not change
// 3)The list will not be reordered or filtered
