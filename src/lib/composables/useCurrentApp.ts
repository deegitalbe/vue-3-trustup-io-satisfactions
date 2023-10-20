import { getCurrentInstance, App } from "vue";
export function useCurrentApp() {
  return getCurrentInstance()?.appContext.app as App;
}

export default useCurrentApp;
