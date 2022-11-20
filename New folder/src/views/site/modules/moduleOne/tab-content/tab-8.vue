<template>
  <div class="tab_content">
    <div class="module_title">{{ $t("Меры профилактики ОРВИ и гриппа") }}</div>
    <div class="tab_content-text">
      {{ $t("1.3.1") }}
    </div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          style="width: 100%; height: 400px; object-fit: contain"
          src="https://www.youtube.com/embed/8kYemQyFg58"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="tab_content-text">
      {{ $t("asosiy") }}
    </div>

    <div class="tab_content-text">
      <strong class="strongColor">Вакцинация</strong> – {{ $t("vaksina1") }}
    </div>
    <div class="tab_content-title text-center mt-3 bgTab">
      {{ $t("vaksina2") }}
    </div>
    <div class="box">
      <div style="background-color: #198754">
        <strong class="strongColor">Вакцина</strong> – {{ $t("trans1") }}
      </div>
      <div style="background-color: #6610f2">
        <strong class="strongColor">{{ $t("trans2") }}</strong> –
        {{ $t("trans3") }}
      </div>
    </div>
    <ul class="tab-content_ul">
      <div class="content_flex-info">
        <li v-for="(item, i) in items1" :key="i" class="tab-content_li">
          <img src="/svg/virusIcon.svg" alt="" />
          <span>{{ $t(item.name) }}</span>
        </li>
      </div>
      <div class="content_flex-img">
        <img src="/images/tabImg/image 154.png" alt="" />
      </div>
    </ul>
    <div class="tab_content-text">
      <strong class="strongColor">{{ $t("boost") }}</strong> –
      {{ $t("boost1") }}
    </div>
    <div class="tab_content-text mt-3">
      {{ $t("boost2") }}
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-8",
  components: {},
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
          name: "Оптимальное время для вакцинации октябрь- ноябрь",
        },
        {
          id: 1,
          name: "Вакцинация детей против гриппа возможна, начиная с 6-месячного возраста",
        },
        {
          id: 2,
          name: "Вакцина против гриппа становится эффективной примерно через 14 дней после вакцинации",
        },
        {
          id: 3,
          name: "Вакцинация против гриппа хорошо переносится",
        },
        {
          id: 4,
          name: "Вакцинация на 90 % снижает заболеваемость, на 60 % снижает госпитализацию",
        },
      ],
    };
  },
  methods: {
    playerStateChanged() {
      //console.log(event)
    },
  },
};
</script>
<style scoped>
.video-player-wrap {
  margin: 30px 0;
}
.box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
}
.box div {
  max-width: 330px;
  width: 100%;
  color: white;
  font-size: 18px;
  font-weight: 500;
  border-radius: 4px;
  padding: 10px 5px;
  margin-right: 15px;
  margin-bottom: 15px;
  text-align: center;
}
.content_flex-img {
  max-width: 160px;
  width: 100%;
  margin: 10px auto;
}
.content_flex-img img {
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
