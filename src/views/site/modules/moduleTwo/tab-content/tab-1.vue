<template>
  <div class="tab_content">
    <!-- <Accordion :activeProp="0">
      <AccordionItem>
        <template slot="accordion-trigger">
          <div class="module__accordion-header">
            <div class="accordion-img">
              <img src="/svg/lineIcon.svg" alt="" />
            </div>
            <h4 class="accordion-text">В этом модуле вы узнаете:</h4>
          </div>
        </template>
        <template slot="accordion-content">
          <div style="padding: 0 15px 15px">
            <div class="accordion-item">
              <ul class="tab-content_ul">
                <li class="tab-content_li">
                  <img src="/svg/virusIcon.svg" alt="" />
                  <h4 class="accordion-text">
                    о некоторых особенностях COVID-19 в сочетании с
                    ВИЧ-инфекцией
                  </h4>
                </li>
                <li class="tab-content_li">
                  <img src="/svg/virusIcon.svg" alt="" />
                  <h4 class="accordion-text">
                    как АРВТ препараты взаимодействуют с COVID-19
                  </h4>
                </li>
                <li class="tab-content_li">
                  <img src="/svg/virusIcon.svg" alt="" />
                  <h4 class="accordion-text">
                    особенности ухода и поддержки беременных женщин и детей с
                    ВИЧ во время пандемии COVID-19
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </AccordionItem>
    </Accordion> -->
    <div class="tab_content-block">
      <div class="module_title">{{ $t("2.1") }}</div>
      <div class="module_title bgTab" style="display: inline-block">
        {{ $t("TextModule9-6") }}
      </div>
      <div class="tab_content-text">
        <strong class="strongColor">COVID-19</strong> — {{ $t("cov") }}
      </div>
    </div>
    <div class="tabImg" style="max-width: 900px">
      <img class="w-100" src="/images/tabImg/115.jpg" alt="" />
    </div>
    <div class="tab_content-text" style="margin-bottom: 20px">
      {{ $t("odamlar") }}
    </div>
    <div class="content_flex mb-3">
      <div class="content_flex-info">
        <div class="tab_content-title" style="color: #00419e">
          {{ $t("odamlar1") }}
        </div>
      </div>
      <div class="content_flex-img">
        <img
          src="images/tabImg/114.jpg"
          style="max-width: 200px; width: 100%"
        />
      </div>
    </div>
    <div class="tab_content-text">
      {{ $t("odamlar2") }}
    </div>
    <div class="tab_content-block mt-3">
      <div class="tab_content-title">
        {{ $t("gruppa") }}
      </div>
    </div>
    <div class="tabImg">
      <img class="w-100" src="/images/tabImg/113.jpg" alt="wewe" />
    </div>
    <!-- <div class="tab_Bag1 tab_Bag">
      <img src="images/tabBaground1.png" alt="" />
    </div> -->
    <div class="tab_Bag2 tab_Bag">
      <img src="images/tabBaground2.png" alt="" />
    </div>
    <div class="tab_content-block mt-3">
      <div class="tab_content-title">{{ $t("gruppa1") }}</div>
      <div class="tab_content-text">
        {{ $t("gruppa2") }}
      </div>
      <div class="tab_content-text">
        {{ $t("gruppa3") }}
      </div>
      <div
        class="tabImg"
        style="max-width: 900px; width: 100%; margin: 20px auto"
      >
        <img class="w-100" src="/images/tabImg/116.jpg" alt="wewe" />
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">Иммунитет</div>
      <div class="tab_content-text">
        {{ $t("imunitet1") }}
      </div>
      <div class="tab_content-text">
        {{ $t("imunitet2") }}
      </div>
      <div
        class="tabImg"
        style="max-width: 900px; width: 100%; margin: 20px auto"
      >
        <img class="w-100" src="/images/tabImg/117.jpg" alt="wewe" />
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">
        {{ $t("19") }}
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items1" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span>{{ $t(item.name) }}</span>
          </li>
        </div>
      </ul>
    </div>
    <div
      class="tabImg"
      style="max-width: 900px; width: 100%; margin: 20px auto"
    >
      <img class="w-100" src="/images/tabImg/118.jpg" alt="wewe" />
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-1",
  components: {},
  data() {
    return {
      items3: [
        {
          id: 0,
          name: "Дети;",
        },
        {
          id: 1,
          name: " Люди старше 60 лет;",
        },
        {
          id: 2,
          name: "Люди с хроническими заболеваниями легких (бронхиальная астма, хроническая обструктивная болезнь легких); ",
        },
        {
          id: 3,
          name: "Люди с хроническими заболеваниями сердечно-сосудистой системы (врожденные пороки сердца, ишемическая болезнь сердца, сердечная недостаточность);",
        },
        {
          id: 4,
          name: " Беременные женщины;",
        },
        {
          id: 5,
          name: "Медицинские работники",
        },
        {
          id: 6,
          name: "Работники общественного транспорта, предприятий общественного питания.",
        },
      ],
      items1: [
        {
          id: 0,
          name: "И COVID-19, и ОРВИ, и грипп вызывают схожие симптомы, включая кашель, нас-морк, боль в горле, повышение температуры тела, головную боль и слабость. Распространяются одинаково – воздушно – капельным путем, т.е. передаются с каплями или аэрозолями, выделяемыми зараженным человеком при кашле, чихании, произнесении слов, пении или дыхании. Капли и аэрозоли могут попадать в глаза, носоглотку или рот окружающих людей, как правило, если они находятся на расстоянии менее 1 м от зараженного лица, но иногда и дальше. Заразиться можно также трогая зараженные поверхности, а затем прикасаясь немытыми руками к глазам, носу или рту.",
        },
        {
          id: 1,
          name: "Одни и те же меры эффективно защищают от COVID-19, ОРВИ и гриппа. Против COVID-19, как и против гриппа, существуют безопасные и эффективные вакцины.",
        },
        {
          id: 2,
          name: "COVID-19 и вирусы ОРВИ и гриппа имеют сходную картину заболевания. То есть они вызывают респираторное заболевание, которое представляет собой широкий спектр вариантов болезни - от бессимптомного или легкого до тяжелого заболевания и смерти.",
        },
        {
          id: 3,
          name: "Вирусы и ОРВИ и гриппа и COVID-19 передаются одинаково воздушно-капельным путем и при контакте. В связи с чем, важные медико-санитарные меры, которые все могут предпринимать для предотвращения инфекции, являются одинаковыми, например, гигиена рук и соблюдение дыхательного этикета (кашлять в локоть или в бумажный платок с последующим незамедлительным выбрасыванием).",
        },
        {
          id: 4,
          name: "Течение болезни может быть бессимптомным, легким и тяжелым. И ОРВИ и грипп, и COVID-19 могут заканчиваться смертельным исходом.",
        },
        {
          id: 5,
          name: "COVID-19 с большей вероятностью может привести к осложнениям, госпитализации и, в некоторых случаях, к смерти – поэтому крайне важно сделать тест.",
        },
        {
          id: 6,
          name: "Коронавирусная инфекция может вызывать расстройство пищеварения (диарею, тошноту, рвоту), при ОРВИ и грипп у взрослых такие явления встречается редко.",
        },
        {
          id: 7,
          name: "При COVID-19 и ОРВИ и гриппе применяются разные способы лечения.",
        },
        {
          id: 8,
          name: "Против COVID-19 и гриппа применяются различные вакцины.",
        },
        {
          id: 9,
          name: "Вакцины, разработанные для профилактики COVID-19, не обеспечивают защиту от гриппа, а вакцины против гриппа, в свою очередь, не защищают от COVID-19.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.tab_content {
  position: relative;
  overflow: hidden;
}
.tab_Bag1 {
  position: absolute;
  right: 0;
  bottom: 400px;
  max-width: 250px;
  width: 100%;
  z-index: -1;
}
.tab_Bag2 {
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 120px;
  width: 100%;
  z-index: -1;
}
.tab_Bag img {
  width: 100%;
}
.content_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content_flex-img {
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.content_flex-info {
  max-width: 600px;
  width: 100%;
  margin-right: 30px;
}
.tabImg {
  width: 100%;
  margin: 0 auto;
}
.tab-content_ul {
  display: block;
}
@media (max-width: 768px) {
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
