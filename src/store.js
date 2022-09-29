import { defineStore } from "pinia";
import { ref } from "vue";

export const cartStore = defineStore("cart", () => {
  const items = ref([]);

  function addItem(item) {
    if (!items.value.find((e) => e.id == item.id)) {
      items.value.push(item);
    }
  }

  function removeItem(item) {
    items.value = items.value.filter((value) => {
      item.id != value.id;
    });
  }

  return { items, addItem, removeItem };
});
