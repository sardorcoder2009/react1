import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
}

function ListGroup({ items }: Props) {
  const [index, setIndex] = useState(-1);

  const handleClick = (i: number) => {
    setIndex(i);
  };

  return (
    <>
      <h2 className="title">Users</h2>
      <ul className="list">
        {items.map((item, i) => (
          <li
            onClick={() => {
              handleClick(i);
            }}
            key={item}
            className={index === i ? "item active" : "item"}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
