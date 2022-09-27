import { defineStore } from "pinia";
import { ref } from "vue";

// export const cartStore = defineStore('cart', ()=>{
//     const items = ref([])

//     function addItem(item){
//         if (!items.value.find(e=>e.id==item.id)){
//             items.value.push(item);
//         }
//     }

//     function removeItem(item){
//         items.value = items.value.filter((value)=>{
//             item.id != value.id;
//         })
//     }

//     return {items, addItem, removeItem}
// })

export const cartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  actions: {
    addItem(item) {
      if (this.items.find((e) => e.id == item.id)) {
        this.items = this.items.filter((e) => e.id != item.id);
      }
      this.items.push(item);
    },
    removeItem(item) {
      this.items = this.items.filter((value) => {
        item.id != value.id;
      });
    },
  },
});
