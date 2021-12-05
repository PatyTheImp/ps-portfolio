<template>
  <div class="title-container">
    <div class="animate three mobile">
      <h1>
        <span>P</span><span>a</span><span>t</span><span>r</span><span>i</span
        ><span>c</span><span>i</span><span>a</span>
      </h1>
      <h1>
        <span>C</span><span>o</span><span>s</span><span>t</span><span>a</span
        ><span>'</span><span>s</span>
      </h1>
    </div>
    <div class="animate three mobile">
      <h1>
        <span>P</span><span>h</span><span>o</span><span>t</span><span>o</span
        ><span>s</span><span>h</span><span>o</span><span>p</span>
      </h1>
      <h1>
        <span>P</span><span>o</span><span>r</span><span>t</span><span>f</span
        ><span>o</span><span>l</span><span>i</span><span>o</span>
      </h1>
    </div>

    <h1 class="animate three pc">
      <span>P</span><span>a</span><span>t</span><span>r</span><span>i</span
      ><span>c</span><span>i</span><span>a</span>
      &nbsp;
      <span>C</span><span>o</span><span>s</span><span>t</span><span>a</span
      ><span>'</span><span>s</span>
    </h1>
    <h1 class="animate three pc">
      <span>P</span><span>h</span><span>o</span><span>t</span><span>o</span
      ><span>s</span><span>h</span><span>o</span><span>p</span> &nbsp;
      <span>P</span><span>o</span><span>r</span><span>t</span><span>f</span
      ><span>o</span><span>l</span><span>i</span><span>o</span>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
$break-point: 600px;

.title-container {
  font-family: "Comforter", cursive;
  font-size: 40px;
  background: linear-gradient(270deg, #12c2e9, #c471ed, #f64f59);
  background-size: 600% 600%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
  height: 100vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: gradient-animation 20s ease infinite;
}

.pc {
  display: block;
  @media (max-width: $break-point) {
    display: none;
  }
}

.mobile {
  display: none;

  @media (max-width: $break-point) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.animate span {
  display: inline-block;
}

.animate span:nth-of-type(2) {
  animation-delay: 0.05s;
}
.animate span:nth-of-type(3) {
  animation-delay: 0.1s;
}
.animate span:nth-of-type(4) {
  animation-delay: 0.15s;
}
.animate span:nth-of-type(5) {
  animation-delay: 0.2s;
}
.animate span:nth-of-type(6) {
  animation-delay: 0.25s;
}
.animate span:nth-of-type(7) {
  animation-delay: 0.3s;
}
.animate span:nth-of-type(8) {
  animation-delay: 0.35s;
}
.animate span:nth-of-type(9) {
  animation-delay: 0.4s;
}
.animate span:nth-of-type(10) {
  animation-delay: 0.45s;
}
.animate span:nth-of-type(11) {
  animation-delay: 0.5s;
}
.animate span:nth-of-type(12) {
  animation-delay: 0.55s;
}
.animate span:nth-of-type(13) {
  animation-delay: 0.6s;
}
.animate span:nth-of-type(14) {
  animation-delay: 0.65s;
}
.animate span:nth-of-type(15) {
  animation-delay: 0.7s;
}
.animate span:nth-of-type(16) {
  animation-delay: 0.75s;
}
.animate span:nth-of-type(17) {
  animation-delay: 0.8s;
}
.animate span:nth-of-type(18) {
  animation-delay: 0.85s;
}

/* Animation Three */

.three span {
  color: var(--color-dark1);
  opacity: 0;
  transform: translate(-300px, 0) scale(0);
  animation: sideSlide 0.5s forwards;
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

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>