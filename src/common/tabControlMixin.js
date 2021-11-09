import { ref } from "vue";
import { POP, NEW, SELL } from "./const";

export function tabControlMixin() {
  const currentType = ref(POP);
  const tabClick = (index) => {
    switch (index) {
      case 0:
        currentType.value = POP;
        break;
      case 1:
        currentType.value = NEW;
        break;
      case 2:
        currentType.value = SELL;
        break;
    }
  };
  return {
    tabClick,
    currentType,
  };
}
