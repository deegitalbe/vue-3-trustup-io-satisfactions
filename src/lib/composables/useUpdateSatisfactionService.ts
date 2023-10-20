import { reactive } from "vue";
import { Loader } from "@henrotaym/helpers";
import SatisfactionClientFactory from "../factories/satisfaction/client/SatisfactionClientFactory";
import useCurrentApp from "./useCurrentApp";
import UpdateSatisfactionEndpoint from "../api/endpoints/UpdateSatisfaction";
import UpdateSatisfactionRequestFactory from "../factories/satisfaction/request/UpdateSatisfactionRequestFactory";
import SatisfactionUpdateService from "../services/SatisfactionUpdateService";

const useUpdateSatisfactionService = () => {
  const app = useCurrentApp();
  const factory = new SatisfactionClientFactory();
  const requestFactory = new UpdateSatisfactionRequestFactory();
  const endpoint = new UpdateSatisfactionEndpoint(
    factory.create(app),
    requestFactory
  );
  const loader = new Loader(false);
  const updateService = reactive(
    new SatisfactionUpdateService(endpoint, loader)
  );
  return updateService;
};
export default useUpdateSatisfactionService;
