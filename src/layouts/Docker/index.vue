<template>
  <!-- 仿macdock栏的菜单 -->
  <div
    class="glass w-9/12 h-20 fixed bottom-0 left-1/2 transform -translate-x-1/2 rounded-md shadow"
  >
    <ul class="dock">
      <li
        v-for="item in dockerArr"
        :key="item.id"
        @click="handleMenuItemClick(item.router)"
      >
        <img
          :src="item.title"
          style="width: 64px; height: 64px"
          @click="handleDockItemClick"
        />
      </li>
    </ul>
  </div>
</template>


<script  lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Cuts from "@/assets/cuts.png";
import Folder from "@/assets/folder.png";
import Football from "@/assets/football.png";
import Launcher from "@/assets/launcher.png";
import NewFile from "@/assets/newFile.png";
import Vscode from "@/assets/vscode.png";
export default defineComponent({
  setup() {
    const router = useRouter();
    const dockerArr = [
      { id: 4, title: Launcher, router: "/home" },
      { id: 2, title: Folder, router: "/menus" },
      { id: 6, title: Vscode, router: "/edit" },
      { id: 5, title: NewFile, router: "/create" },
      { id: 1, title: Cuts, router: "/pictures" },
      { id: 3, title: Football, router: "/discuss" },
    ];
    const handleDockItemClick = (e: any) => {
      const item = e.target.parentNode.classList;
      item.add("loading");
      setTimeout(() => {
        item.remove("loading");
      }, 2000);
    };

    const handleMenuItemClick = (rou: string) => {
      router.push(rou);
    };

    return {
      handleDockItemClick,
      dockerArr,
      handleMenuItemClick,
    };
  },
});
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
}

.dock {
  --scale: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dock li {
  margin: 0 0.5rem;
  cursor: default;
  position: relative;
  top: calc((6rem * var(--scale) - 6rem) / 2 * -1);
  transition: 15ms all ease-out;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dock li.loading {
  animation: 1s loading ease-in infinite;
}

@keyframes loading {
  0%,
  100% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-40px);
  }
}
</style>