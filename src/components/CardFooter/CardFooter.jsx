import React from "react";
import Paginate from "../../elements/Paginate/Paginate";
import "./_cardFooter.scss";
const CardFooter = () => {
  const [active, setActive] = React.useState(1);

  const activeHandler = (clickedActive) => {
    setActive(parseInt(clickedActive));
  };
  return (
    <footer className="card-footer">
      <p className="card-footer__description">
        Showing data 1 to 8 of 256K entries
      </p>
      <div>
        <Paginate
          active={active}
          size={40}
          step={2}
          onClickHandler={activeHandler}
        />
      </div>
    </footer>
  );
};

export default CardFooter;
