<template>
  <div class="contact">
    <img class="module__bg" src="/svg/covid.svg" alt="" />
    <img class="module__bg2" src="/images/covidd.png" alt="" />
    <div class="container">
      <div>
        <div class="title">Контакты</div>
        <div class="content">
          <div class="content__items">
            <div class="content__items-item">
              <img src="/svg/location.svg" alt="" />
              <div class="content__info">
                <p class="content__info-title">Адрес 1:</p>
                <p class="content__info-text">
                  г. Ташкент, Учтепинский р-н, кв.-л 12, д.21А пересечение улиц
                  Фархадская и Лутфий Координаты для размещения на карте:
                  41.285794, 69.185997
                </p>
              </div>
            </div>
            <div class="content__items-item">
              <img src="/svg/location.svg" alt="" />
              <div class="content__info">
                <p class="content__info-title">Адрес 2:</p>
                <p class="content__info-text">
                  г. Ташкент, пр. Мустакиллик д.22 Координаты для размещения на
                  карте: 41.316046, 69.292179
                </p>
              </div>
            </div>
            <div class="content__items-item">
              <img src="/svg/telephone.svg" alt="" />
              <div class="content__info">
                <p class="content__info-title">Горячая линия:</p>
                <p class="content__info-text">+998(55) 503-06-00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="title">Где мы находимся?</div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&um=constructor%3Af85c1e8543e0509fb8b56bf1f025b30f38c38d0f13a1da0377bc69fd2ad757d1&amp;source=constructor"
          width="100%"
          height="600px"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App-contact",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.mapContact {
  position: relative;
  overflow: hidden;
  max-width: 100%;
  height: 400px;
}

.contact {
  height: 100%;
  padding: 20px 0;
  background: #002e7a;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.title {
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.content__items {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.content__items-item {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin-right: 40px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}
.content__items-item::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 5px;
  width: 30px;
  height: 30px;
  border: 2px solid #fff;
  transform: rotate(45deg);
  background-color: #002e7a;
  border-left-color: #002e7a;
  border-top-color: #002e7a;
  z-index: -1;
}
.content__info-title {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #fefefe;
  margin-bottom: 10px;
}
.content__info-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #fefefe;
}
.content__items-item img {
  max-width: 30px;
  width: 100%;
  margin-right: 20px;
}
.content__items-item {
  max-width: 400px;
  width: 100%;
  border: 1px solid #fefefe;
}
.module__bg {
  position: absolute;
  bottom: 52px;
  left: -100px;
  max-width: 200px;
  width: 100%;
}
.module__bg2 {
  position: absolute;
  right: -150px;
  top: 145px;
  max-width: 300px;
  width: 100%;
  opacity: 0.5;
}
.popup__content {
  display: none !important ;
}
@media (max-width: 768px) {
  .title {
    font-size: 20px;
  }
  .content__items-item {
    padding: 10px;
  }
  .content__items {
    justify-content: center;
  }
  .content__items-item {
    margin-right: 0;
  }
  iframe {
    height: 300px;
  }
}
</style>
