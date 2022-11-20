<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="module_title">
        {{ $t("Основные принципы медицинской этики.") }}
      </div>
      <div class="bgTab">{{ $t("ОСНОВНАЯ ИНФОРМАЦИЯ") }}</div>
      <div class="tab_content-text tab_content-text">
        {{ $t("module6.222") }}
      </div>
      <div class="tab_content-text">
        {{ $t("module6.333") }}
      </div>
      <div class="tab_content-block" style="margin-top: 30px">
        <div class="tab_content-text">
          <strong class="strongColor">{{ $t("module6.555") }}</strong> -
          {{ $t("module6.666") }}
          <br />
          {{ $t("module6.777") }}
        </div>
      </div>
      <div class="info_scientist">
        <div class="d-flex align-items-center">
          <p class="info_scientist-name">{{ $t("module6.888") }}</p>
          <div class="info_scientist-img">
            <img class="w-100" src="/images/tabImg/image 179.png" alt="" />
          </div>
        </div>
        <div class="tabImg" style="max-width: 550px">
          <img v-if="lang" src="/images/tabImg/126.jpg" alt="" />
          <img v-else src="/images/tabImg/126uz.png" alt="" />
        </div>
      </div>
      <div class="tab_content-text">
        <strong class="strongColor">{{ $t("module6.999") }}</strong> -
        {{ $t("module6.100") }}
      </div>
      <div class="tab_content-text">
        <strong class="strongColor"> {{ $t("module6.110") }} </strong
        >{{ $t("module6.122") }}
      </div>
      <div class="info_scientist">
        <div class="info_scientist-item">
          <div class="info_scientist-img">
            <img class="w-100" src="/images/tabImg/127.jpg" alt="" />
          </div>
          <div class="mt-3">
            <p class="info_scientist-name">{{ $t("module6.133") }}</p>
            <p class="info_scientist-text">
              {{ $t("module6.144") }}
            </p>
          </div>
        </div>
        <div class="info_scientist-item">
          <div class="info_scientist-img">
            <img class="w-100" src="/images/tabImg/128.jpg" alt="" />
          </div>
          <div class="mt-3">
            <p class="info_scientist-name">{{ $t("module6.155") }}</p>
            <p class="info_scientist-text">
              {{ $t("module6.166") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import { mapState } from "vuex";
export default {
  name: "tab-1",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["lang"]),
  },
};
</script>
<style scoped>
.tab_content-text {
  margin-bottom: 10px;
}
.info_scientist {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info_scientist-name {
  max-width: 154px;
  width: 100%;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  font-weight: 700;
  color: #1f2136;
  margin: 0 auto;
}
.info_scientist-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
  color: #1f2136;
  max-width: 300px;
  width: 100%;
}
.info_scientist-img {
  max-width: 220px;
  width: 100%;
}
.info_scientist-img img {
  width: 100%;
  object-fit: contain;
}
.tabImg {
  width: 100%;
  margin: 20px auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
.tab_content-text {
  margin-top: 10px;
}
.info_scientist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
}
@media (max-width: 768px) {
  .info_scientist {
    flex-wrap: wrap;
    justify-content: center;
  }
  .tabImg {
    margin-top: 20px;
  }
}
</style>
