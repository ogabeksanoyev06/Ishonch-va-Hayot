<template>
  <div class="pre-test">
    <div class="container">
      <div class="pre-test__content">
        <div class="pre-test__main">
          <div class="pre-test__title">
            {{ $t("PreTestText") }}
          </div>
          <div class="pre-test__img">
            <img src="/images/moduleBanner1.png" alt="" />
          </div>
        </div>
        <button @click="goPreTest" class="pre-test__btn">
          {{ $t("StartPre-test") }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pre-test",
  components: {},
  data() {
    return {};
  },
  methods: {
    goPreTest() {
      this.$router.push({
        name: "pre-test",
      });

      // } else {
      //   this.$router.push({ name: "login" });
      // }
    },
  },
  computed: {},
};
</script>
<style scoped>
.pre-test {
  padding: 50px 0;
}
.pre-test__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 650px;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 60px 20px;
  margin: 0 auto;
}
.pre-test__main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pre-test__title {
  max-width: 400px;
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 148%;
  text-align: center;
  color: #1f2136;
}
.pre-test__img {
  max-width: 150px;
  width: 100%;
}
.pre-test__img img {
  width: 100%;
  object-fit: contain;
}
.pre-test__btn {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #012366;
  color: #fff;
  margin-top: 20px;
}
</style>
