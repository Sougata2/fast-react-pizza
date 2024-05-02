import { useSelector } from "react-redux";
import CreateUsers from "../features/user/CreateUsers";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-4 text-center text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUsers />
      ) : (
        <Button to={"/menu"} type={"primary"}>
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
