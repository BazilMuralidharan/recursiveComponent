import React, { useState } from "react";
import { familyTree } from "./data";
import Family from "./Family";

const SelectLevel = ({ dataFamiily }) => {
  // console.log(dataFamiily);
  const [selectChild, setSelectChild] = useState("");

  if (dataFamiily?.some((el) => el === undefined)) {
    // alert("end");
    return;
  }
  // console.log("se", selectChild);
  // console.log(dataFamiily);
  return (
    <>
      <select onChange={(e) => setSelectChild(e.target.value)}>
        <option>{"choose"}</option>
        {dataFamiily?.map((el) => {
          return <option value={el?.name}>{el?.name}</option>;
        })}
      </select>
      {selectChild && (
        <SelectLevel
          dataFamiily={dataFamiily
            ?.filter((el) => el.name === selectChild)
            ?.flatMap((el) => el?.children)}
        />
      )}
      {/* {console.log(
        "filll",
        dataFamiily
          ?.filter((el) => el.name === selectChild)
          ?.flatMap((el) => el?.children)
      )} */}
    </>
  );
};

export default function App() {
  const [stateSelect, setStateSelect] = useState("");
  return (
    <>
      <div className="App">
        <Family familyTree={familyTree} />
      </div>

      <div>
        <h4>CASCADE</h4>
        <h2>{JSON.stringify(familyTree)}</h2>
      </div>

      <h3>SELECT</h3>

      <select onChange={(e) => setStateSelect(e.target.value)}>
        <option>{"choose"}</option>

        <option>{familyTree.name}</option>
      </select>
      {familyTree?.name === stateSelect && (
        <SelectLevel dataFamiily={familyTree?.children} />
      )}
    </>
  );
}
