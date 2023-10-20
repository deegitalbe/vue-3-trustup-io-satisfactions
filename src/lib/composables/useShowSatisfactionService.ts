import { reactive } from "vue";
import { Loader } from "@henrotaym/helpers";
import SatisfactionClientFactory from "../factories/satisfaction/client/SatisfactionClientFactory";
import useCurrentApp from "./useCurrentApp";
import ShowSatisfactionRequestFactory from "../factories/satisfaction/request/ShowSatisfactionRequestFactory";
import { SatisfactionEndpoint } from "../api";
import SatisfactionShowService from "../services/SatisfactionShowService";

const useShowSatisfactionService = () => {
  const app = useCurrentApp();
  const clientFactory = new SatisfactionClientFactory();
  const requestFactory = new ShowSatisfactionRequestFactory();
  const endpoint = new SatisfactionEndpoint(
    clientFactory.create(app),
    requestFactory
  );
  const loader = new Loader(false);
  const updateService = reactive(new SatisfactionShowService(endpoint, loader));
  return updateService;
};
export default useShowSatisfactionService;
