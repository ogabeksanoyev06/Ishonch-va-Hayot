<template>
  <div class="tab_content">
    <div class="module_title">{{$t("Text4-2")}}</div>
    <div class="tab_content-text">
      {{$t("Text4-2-1")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text4-2-2")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text4-2-3")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text4-2-4")}} <br />
      {{$t("Text4-2-5")}}
    </div>
    <div class="module_title text-center">{{$t("Text4-2-6")}}</div>
    <div class="bc_x">
      <div style="max-width: 350px; width: 100%">
        <p class="ul_title" style="color: #1a990f">{{$t("Text4-2-7")}}</p>
        <ul class="tab-content_ul">
          <div style="margin-right: 20px">
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>
                {{$t("Text4-2-8")}}
              </span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>
                {{$t("Text4-2-9")}}
              </span>
            </li>
          </div>
        </ul>
      </div>
      <div style="max-width: 350px; width: 100%">
        <p class="ul_title" style="color: #ec1b23">{{$t("Text4-2-10")}}</p>
        <ul class="tab-content_ul">
          <div>
            <li class="tab-content_li">
              <img src="/svg/close.svg" alt="" />
              <span>
                {{$t("Text4-2-11")}}
              </span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/close.svg" alt="" />
              <span> {{$t("Text4-2-12")}} </span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/close.svg" alt="" />
              <span> {{$t("Text4-2-13")}} </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <div class="tab_content-text">
      {{$t("Text4-2-14")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text4-2-15")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text4-2-16")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text4-2-17")}}
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">{{$t("Text4-2-18")}}</div>
      <div class="tab_content-text">
        {{$t("Text4-2-19")}}
      </div>
    </div>
    <div style="max-width: 900px; width: 100%; margin: 40px auto">
      <img class="w-100" src="/images/tabImg/122.jpg" alt="" />
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-2",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: " Вакцинация - самый эффективный способ защиты от вирусных инфекций (например, от гриппа, COVID-19);",
        },
        {
          id: 1,
          name: " Избегать многолюдных мест (особенно закрытых помещений);",
        },
        {
          id: 2,
          name: " Используйте медицинскую маску, если ухаживаете или контактируете с людьми с признаками ОРИ.",
        },
        {
          id: 3,
          name: " Соблюдение социальной дистанции в 1,5-2 метра;",
        },
        {
          id: 4,
          name: "  Гигиена рук (тщательное мытье рук с мылом не менее 20 сек, использование антисептиков, содержащих 80% спирта, в случае невозможности мытья рук);",
        },
        {
          id: 5,
          name: " Влажная уборка помещения с использованием моющих средств и дезинфицирующих средств;",
        },
        {
          id: 6,
          name: " Увлажнение и частое проветривание помещений (каждые 2-3 часа).",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tab_content-text {
  margin-bottom: 10px;
}
.bc_x {
  display: flex;
  justify-content: space-between;
}
.ul_title {
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
  text-align: center;
}
.content_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content_flex-img {
  max-width: 360px;
  width: 100%;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.content_flex-info {
  max-width: 350px;
  width: 100%;
}
@media (max-width: 768px) {
  .bc_x {
    flex-wrap: wrap;
    justify-content: center;
  }
  .content_flex {
    flex-wrap: wrap;
    justify-content: center;
  }
  .content_flex-img {
    order: 1;
  }
  .content_flex-info {
    max-width: 100%;
    order: 2;
  }
}
</style>
