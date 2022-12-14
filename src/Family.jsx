import React, { useState } from "react";

export default function Family({ familyTree }) {
  const [visible, setVisible] = useState(false);
  const vis = () => setVisible((prev) => !prev);
  return (
    <div style={{ marginLeft: "30px" }}>
      <span onClick={vis}>{familyTree?.name}</span>
      {visible &&
        familyTree?.children?.map((el) => {
          return <Family familyTree={el} key={el?.name} />;
          //  <h3 key={el?.name}>{el?.name}</h3>;
        })}
    </div>
  );
}
