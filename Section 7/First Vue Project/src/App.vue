<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script >
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234567890",
          email: "manuel@localhost.com",
        },
        {
          id: "antonio",
          name: "Antonio Max",
          phone: "01987654320",
          email: "antonio@localhost.com",
        },
      ],
    };
  },
};
</script>
