import { reactive } from "vue";
import StoreService from "../factories/satisfaction/StoreService";

const useStoreService = () => {
  return reactive(new StoreService());
};
export default useStoreService;
