import { reactive } from "vue";
import { Loader } from "@henrotaym/helpers";
import SatisfactionClientFactory from "../factories/satisfaction/client/SatisfactionClientFactory";
import useCurrentApp from "./useCurrentApp";
import StoreSatisfactionEndpoint from "../api/endpoints/StoreSatisfaction";
import StoreSatisfactionRequestFactory from "../factories/satisfaction/request/StoreSatisfactionRequestFactory";
import SatisfactionStoreService from "../services/SatisfactionStoreService";
import SatisfactionRequestFactory from "../factories/satisfaction/request/SatisfactionRequestFactory";
import SatisfactionRequestDataFactory from "../factories/satisfaction/request/SatisfactionRequestDataFactory";

const useStoreSatisfactionService = () => {
  const app = useCurrentApp();
  const factory = new SatisfactionClientFactory();
  const satisfactionRequestFactory = new SatisfactionRequestFactory();
  const dataFactory = new SatisfactionRequestDataFactory();
  const requestFactory = new StoreSatisfactionRequestFactory(
    satisfactionRequestFactory,
    dataFactory
  );
  const endpoint = new StoreSatisfactionEndpoint(
    factory.create(app),
    requestFactory
  );
  const loader = new Loader(false);
  const storeService = reactive(new SatisfactionStoreService(endpoint, loader));
  return storeService;
};
export default useStoreSatisfactionService;
