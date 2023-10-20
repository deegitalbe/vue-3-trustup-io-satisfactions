import { reactive } from "vue";
import { ReasonIndexService } from "../services";
import { ReasonEndpoint } from "../api";
import { Loader } from "@henrotaym/helpers";
import SatisfactionClientFactory from "../factories/satisfaction/client/SatisfactionClientFactory";
import useCurrentApp from "./useCurrentApp";
const useReasonIndexService = () => {
  const app = useCurrentApp();
  const factory = new SatisfactionClientFactory();
  const endpoint = new ReasonEndpoint(factory.create(app));
  const loader = new Loader(false);
  const reasonIndexService = reactive(new ReasonIndexService(endpoint, loader));
  return reasonIndexService;
};
export default useReasonIndexService;
