<template>
  <kinesis-container>
    <div class="hero-banner">
      <div class="container">
        <div class="hero-banner__inner">
          <div class="hero-banner__content">
            <h1 class="hero-banner__title mb-20">COVID-19</h1>
            <p class="hero-banner__text">
              {{ $t("Home") }}
            </p>
            <div class="hero-banner__cta"></div>
          </div>
          <div class="hero-banner__photo">
            <kinesis-element :strength="10">
              <img src="/images/covidd.png" alt="" />
            </kinesis-element>
          </div>
        </div>
      </div>

      <img class="hero-banner__img1" src="/svg/covid.svg" alt="" />
      <img class="hero-banner__img2" src="/svg/covid.svg" alt="" />
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "HeroBanner",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.hero-banner {
  position: relative;
  background-color: #22376c;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(100vh - 90px);
    width: 100%;
  }
  &__img1 {
    position: absolute;
    top: 10%;
    right: 40%;
  }
  &__img2 {
    max-width: 150px;
    width: 100%;
    position: absolute;
    top: 70%;
    right: 40%;
  }

  &__title {
    font-weight: 700;
    font-size: 74px;
    line-height: 51px;
    color: #fff;
    margin-bottom: 20px;
  }
  &__text {
    font-size: 48px;
    line-height: 53px;
    color: #fff;
  }

  &__content {
    max-width: calc(50% - 20px);
  }

  &__photo {
    max-width: calc(50% - 20px);
    padding: 20px;

    img {
      max-width: 530px;
      width: 100%;
      object-fit: contain;
      margin-left: auto;
    }
  }

  &__cta {
    max-width: 500px;
    width: 100%;
    overflow: hidden;
    padding: 5px 0;
  }
  @keyframes covidAnimate {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);
    }
  }
}

@media (max-width: 850px) {
  .hero-banner__inner {
    flex-wrap: wrap;
    padding: 50px 30px;
    justify-content: unset;
  }
  .hero-banner__title {
    font-size: 36px;
    margin-bottom: 0;
  }
  .hero-banner__text {
    font-size: 28px;
    line-height: 30px;
  }
  .hero-banner__content {
    max-width: 100%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    order: 2;
  }

  .hero-banner__cta {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-banner__photo {
    margin-left: auto;
    margin-right: auto;
    order: 1;
    max-width: 80%;
    padding: 0px;
  }

  @media (max-width: 500px) {
    .hero-banner__inner {
      padding: 30px 10px;
    }

    .hero-banner__photo {
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 500px) {
  .hero-banner__inner {
    min-height: calc(100vh - 90px);
  }

  .hero-banner__photo {
    margin-bottom: 0;
  }
}
</style>
