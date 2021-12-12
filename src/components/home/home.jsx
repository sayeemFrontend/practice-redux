import * as types from "../../redux/acTypes";
import { useSelector, useDispatch } from "react-redux";

const Helo = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div>
      <div>{count} /skdskdhsid</div>
      <button onClick={() => dispatch({ type: type.ITEM_ADD })}>add</button>
    </div>
  );
};
export default Helo;
