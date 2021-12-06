<template>
  <div class="container">
    <img src="../assets/images/1-38aa2v1738-thumbnail.jpg" alt="praia" />
    <img src="../assets/images/1-Cadeado-thumbnail.jpg" alt="cadeado" />
    <img src="../assets/images/2-crop_straighten-thumbnail.jpg" alt="lago" />
    <img src="../assets/images/3-crop_Straighten2-thumbnail.jpg" alt="flores" />
    <img src="../assets/images/4-Janela-thumbnail.jpg" alt="janela" />
    <img src="../assets/images/6-Windows-thumbnail.jpg" alt="janelas" />
    <img src="../assets/images/5-rosaventos-thumbnail.jpg" alt="rosa dos ventos" />
  </div>
</template>

<script>
export default {
  mounted() {
    const container = document.querySelector(".container");

    const revealContainer = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.add("test");
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealContainer, {
      root: null,
      threshold: 0.15,
    });

    sectionObserver.observe(container);
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

  & img {
    &:nth-of-type(2) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(3) {
      animation-delay: 1s;
    }
    &:nth-of-type(4) {
      animation-delay: 1.5s;
    }
    &:nth-of-type(5) {
      animation-delay: 2s;
    }
    &:nth-of-type(6) {
      animation-delay: 2.5s;
    }
    &:nth-of-type(7) {
      animation-delay: 3s;
    }
    &:nth-of-type(8) {
      animation-delay: 0.35s;
    }
    &:nth-of-type(9) {
      animation-delay: 0.4s;
    }
    &:nth-of-type(10) {
      animation-delay: 0.45s;
    }
    &:nth-of-type(11) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(12) {
      animation-delay: 0.55s;
    }
    &:nth-of-type(13) {
      animation-delay: 0.6s;
    }
    &:nth-of-type(14) {
      animation-delay: 0.65s;
    }
    &:nth-of-type(15) {
      animation-delay: 0.7s;
    }
    &:nth-of-type(16) {
      animation-delay: 0.75s;
    }
    &:nth-of-type(17) {
      animation-delay: 0.8s;
    }
    &:nth-of-type(18) {
      animation-delay: 0.85s;
    }
  }
}

.test img {
  opacity: 0;
  transform: translate(-300px, 0) scale(0);
  animation: sideSlide 0.75s forwards;
}

@keyframes sideSlide {
  60% {
    transform: translate(20px, 0) scale(1);
    color: var(--color-dark1);
  }

  80% {
    transform: translate(20px, 0) scale(1);
    color: var(--color-dark1);
  }

  99% {
    transform: translate(0) scale(1.2);
    color: var(--color-pink);
  }

  100% {
    transform: translate(0) scale(1);
    opacity: 1;
    color: var(--color-dark1);
  }
}
</style>