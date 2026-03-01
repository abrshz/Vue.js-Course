<template>
  <base-card>
    <base-button
      @click="setSelectedTab('StoredResource')"
      :mode="selectedTab === 'StoredResource' ? null : 'flat'"
    >
      Stored Resources
    </base-button>

    <base-button
      @click="setSelectedTab('AddResource')"
      :mode="selectedTab === 'AddResource' ? null : 'flat'"
    >
      Add Resource
    </base-button>
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script setup>
import { ref, provide, shallowRef } from "vue";
import StoredResource from "./StoredResource.vue";
import AddResource from "./AddResource.vue";

const projects = ref([
  {
    id: "vue",
    title: "Vue.js",
    description: "The official Vue.js documentation. ",
    link: "https://vuejs.org",
  },
  {
    id: "google",
    title: "Google",
    description: "Learn to google ...",
    link: "https://google.org",
  },
  {
    id: "react",
    title: "React",
    description: "React library of JavaScript.",
    link: "https://react.dev/",
  },
]);
// 1. Define the reactive data
const selectedTab = shallowRef(StoredResource);

const removeResource = (resId) => {
  const resIndex = projects.value.findIndex((res) => res.id === resId);
  if (resIndex !== -1) {
    projects.value.splice(resIndex, 1);
  }
};
provide("resources", projects);
provide("removeResource", removeResource);

// 2. Define the function to change the tab

const setSelectedTab = (tab) => {
  selectedTab.value = tab === "StoredResource" ? StoredResource : AddResource;
};

provide("resources", projects);

const addResource = (title, description, url) => {
  const newResource = {
    id: new Date().toISOString(),
    title: title,
    description: description,
    link: url,
  };

  // Add new item to the beginning of the reactive array
  projects.value.unshift(newResource);

  // Automatically switch back to the "Stored Resources" tab
  selectedTab.value = StoredResource;
};
provide("addResource", addResource);
</script>

<style scoped>
/* You can add spacing between buttons if needed */
base-button {
  margin-right: 0.5rem;
}
</style>

<style scoped></style>
