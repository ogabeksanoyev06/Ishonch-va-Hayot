<template>
  <div class="tab_content">
    <div class="module_title">1.1. {{ $t("ModulOneTitle") }}</div>
    <div>
      <div class="tab_content-block">
        <div class="tab_content-title">{{ $t("MainTitleText") }}</div>
        <div class="tab_content-text">
          {{ $t("Heading") }}
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{ $t("OsnovnoyInfo") }}
        </div>
        <div class="tab_content-text">
          {{ $t("Malumoot") }}
        </div>
      </div>
      <ul class="tab-content_ul">
        <div style="max-width: 550px; width: 100%" class="content_flex-info">
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span>{{ $t(item.name) }}</span>
          </li>
        </div>
        <div class="content_flex-img">
          <img
            src="/images/tabImg/image 142.png"
            style="max-width: 160px; width: 100%; margin: 10px auto"
            alt=""
          />
        </div>
      </ul>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">Грипп</div>
      <div class="tab_content-text">
        <strong class="strongColor">Грипп</strong> – {{ $t("Gripp") }}
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <img
        src="/images/tabImg/image 143.png"
        style="max-width: 300px; width: 100%; margin: 10px auto"
        alt=""
      />
    </div>

    <div class="tab_content-block">
      <div class="tab_content-text">
        <strong class="strongColor">Грипп </strong> – {{ $t("Bazan") }}
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-text bgTab">
        <strong class="strongColor" style="color: #fff !important">
          {{ $t("YuqishYoli1") }}
        </strong>
        <br />
        {{ $t("YuqishYoli") }}
      </div>
    </div>
    <div lass="tab_content-block">
      <div class="tab_content-text">
        {{ $t() }}
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-text">
        {{ $t("Yutal") }}
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-text">
        <strong class="strongColor"> {{ $t("xavf1") }} </strong>
        {{ $t("xavf") }}
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">Группы риска</div>
    </div>
    <div class="content_flex-img" style="max-width: 800px; width: 100%">
      <img v-if="lang" src="/images/tabImg/113.jpg" alt="" />
      <img v-else src="/images/tabImg/113uz.jpg" alt="" />
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import { mapState } from "vuex";
export default {
  name: "tab-1",

  data() {
    return {
      items: [
        {
          id: 0,
          name: "ОРИ находятся на первом месте по числу ежегодно заболевающих людей",
        },
        {
          id: 1,
          name: "Поражают органы дыхания ",
        },
        {
          id: 2,
          name: " Передаются воздушно-капельным путём (реже – через предметы и грязные руки)",
        },
        {
          id: 3,
          name: "Вирусы ОРИ живут вне организма до трех недель",
        },
        {
          id: 4,
          name: "Вероятность заражения выше в замкнутых помещениях",
        },
      ],
      items1: [
        {
          id: 0,
          name: "Грипп –  это ОРИ, которая легко распространяется от человека к человеку, вызывая серьезные осложнения различных органов и систем организма.",
        },
        {
          id: 1,
          name: "Грипп циркулирует во всем мире, вызывая эпидемии и поражая представителей любой возрастной группы. В дополнение к сезонным эпидемиям, появление нового подтипа вируса гриппа может провоцировать пандемии гриппа ",
        },
        {
          id: 2,
          name: " Грипп - одно из самых тяжелых и распространенных вирусных заболеваний зимнего сезона",
        },
        {
          id: 3,
          name: "Существует 4 типа вирусов сезонного гриппа – типы A, B, C и D. Вирусы гриппа A и B циркулируют и вызывают сезонные эпидемии болезни",
        },
        {
          id: 4,
          name: "Грипп – это заболевание, иногда приводящее к смертельному исходу",
        },
      ],
    };
  },
  computed: {
    ...mapState(["lang"]),
  },
};
</script>
<style scoped>
.content_flex-img {
  margin: 0 auto;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}

.content_flex-img svg {
  width: 100%;
  object-fit: contain;
}
.content_flex-info {
  max-width: 600px;
  width: 100%;
}

@media (max-width: 768px) {
  .tab-content_ul {
    flex-wrap: wrap;
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
