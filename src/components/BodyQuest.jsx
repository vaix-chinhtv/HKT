import { routes } from "../routes";
import { hocApiGet } from "../services/api-connect-wallet";
import Card from "./Card";

function BodyQuest() {
  // const res = hocApiGet(routes.quest.getCollection)();
  return (
    <div className="container">
      <h1 className="px-2 text-[20px] md:text-[30px] text-white border-b-2 border-[#0E21A0] mb-12 pb-2">Campaign</h1>
      <div className="px-2">
        <Card />
      </div>
    </div>
  );
}

export default BodyQuest;
