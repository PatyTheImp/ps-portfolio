<template>
  <div class="container">
    <img
      v-for="imageName in imageNames"
      :key="imageName"
      :src="getImgUrl(imageName)"
      :alt="imageName"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageNames: [
        "1-38aa2v1738-thumbnail",
        "1-Cadeado-thumbnail",
        "2-crop_straighten-thumbnail",
        "3-crop_Straighten2-thumbnail",
        "4-Janela-thumbnail",
        "5-rosaventos-thumbnail",
        "6-Windows-thumbnail",
      ],
    };
  },

  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic + ".jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
  margin: 50px auto;

  display: grid;
  justify-content: center;

  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 200px;
}
</style>