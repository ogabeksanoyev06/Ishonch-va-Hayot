<template>
  <div class="tab_content">
    <div>
      <div class="module_title">{{$t("module3.1")}}</div>
      <div class="tab_content-text">
        {{$t("module3.2")}}
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items1" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span>{{ $t(item.name) }}</span>
          </li>
        </div>
      </ul>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{$t("module3.2")}}
        </div>
        <div class="tab_content-text">
          <strong class="strongColor">{{$t("module3.3")}}</strong>. {{$t("module3.4")}}
        </div>
      </div>
      <div class="tab_content-text mb-3">
        <strong class="strongColor">{{$t("module3.5")}}</strong>,{{$t("module3.6")}}
      </div>
      <div class="tab_content-text mb-3">
        <strong class="strongColor">{{$t("module3.7")}} </strong> {{$t("module3.8")}}
      </div>
      <div class="tab_content-title">{{$t("module3.9")}}</div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <img src="/svg/check-round.svg" alt="" />
            <span>{{ $t(item.name) }}</span>
          </li>
        </div>
      </ul>
      <div class="tab_content-title">{{$t("module3.10")}}</div>
      <div class="tabImg" style="max-width: 900px">
        <img src="/images/tabImg/120.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-3",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "Регулярная влажная уборка",
        },
        {
          id: 1,
          name: "Чистка и дезинфекция поверхностей с использованием моющих и дезинфицирующих средств.",
        },
        {
          id: 2,
          name: "Прежде всего обратите внимание на дверные ручки, поверхности столов, стулья, выключатели, компьютерные клавиатуры и мышки, телефонные аппараты, пульты управлений, панели оргтехники общего пользования.",
        },
        {
          id: 3,
          name: "Нежелательно передавать друг другу личные вещи (мобильные телефоны, ручки…)",
        },
        {
          id: 4,
          name: "Увлажнение и частое проветривание помещений (каждые 2-3 часа)",
        },
      ],
      items1: [
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
          name: "Используйте медицинскую маску, если ухаживаете или контактируете с людьми с признаками ОРИ.",
        },
        {
          id: 3,
          name: "Соблюдение социальной дистанции в 1,5-2 метра;",
        },
        {
          id: 4,
          name: "Гигиена рук (тщательное мытье рук с мылом не менее 20 сек, использование антисептиков, содержащих 80% спирта, в случае невозможности мытья рук);",
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
.tabImg {
  max-width: 550px;
  width: 100%;
  margin: 20px auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
</style>
