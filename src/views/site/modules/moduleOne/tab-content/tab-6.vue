<template>
  <div class="tab_content">
    <div class="module_title">1.2. Симптомы ОРВИ и гриппа</div>
    <div>
      <div class="tab_content-block">
        <div class="tab_content-title">Типичные симптомы ОРВИ и Гриппа:</div>
      </div>
      <ul class="tab-content_ul">
        <div>
          <li v-for="(item, i) in items" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span>{{ $t(item.name) }}</span>
          </li>
        </div>
      </ul>
      <div class="tab_content-block">
        <div class="tab_content-title">
          Типичные симптомы гриппа и других ОРИ:
        </div>
      </div>
      <ul class="tab-content_ul">
        <div class="box">
          <li v-for="(item, i) in itemsX" :key="i" class="tab-content_li">
            <img src="/svg/virusIcon.svg" alt="" />
            <span>{{ $t(item.name) }}</span>
          </li>
        </div>
        <img class="tabImg" src="/images/tabImg/image 145.png" alt="" />
      </ul>
      <div class="tab_content-block">
        <div class="tab_content-text">
          В среднем, болезнь длится около 5 дней. Если температура держится
          дольше, возможно, возникли осложнения.
        </div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div class="imgTabs">
          <img src="/images/tabImg/146.jpg" alt="" />
        </div>
      </div>
    </div>
    <Accordion :activeProp="0">
      <AccordionItem>
        <template slot="accordion-trigger">
          <div class="module__accordion-header">
            <div class="accordion-img">
              <img src="/svg/lineIcon.svg" alt="" />
            </div>
            <h4 class="accordion-text bgTab">
              Когда необходимо срочное обращение к врачу?
            </h4>
          </div>
        </template>
        <template slot="accordion-content">
          <div style="padding: 0 15px 15px">
            <div class="accordion-item">
              <div class="tab_content-text">
                Если вы обнаружили перечисленные симптомы у себя и членов семьи,
                то обратитесь к вашему лечащему врачу. Вызвать неотложную
                медицинскую помощь необходимо в следующих ситуациях:
              </div>
              <div class="tabImg" style="max-width: 900px">
                <img src="/images/tabImg/111.jpg" alt="" />
              </div>
              <div class="tab_content-text">
                Лечение ОРВИ и ГРИПП проводится под контролем врача, который
                только после осмотра назначает схему лечения. Заболевший должен
                соблюдать постельный режим, полноценно питаться и пить больше
                жидкости. Применение противовирусных средств при лёгком течении
                ОРВИ не требуется. Большинство людей выздоравливают сами по
                себе. Антибиотики не способны справиться с вирусом. Принимать
                антибиотики для профилак-тики - опасно и бесполезно Антибиотики
                назначает только врач.
              </div>
            </div>
          </div>
        </template>
      </AccordionItem>
    </Accordion>
    <div class="tab_content-title bgTab" style="margin-right: auto">
      ЛЕЧЕНИЕ
    </div>
    <div class="flex_box">
      <div>
        <p class="ul_title" style="color: #1a990f">Правильно</p>
        <ul class="tab-content_ul flex-wrap">
          <div style="margin-right: 20px">
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>Обратиться к врачу</span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>Соблюдать постельный режим</span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>Пить много жидкости</span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>Полноценно питаться</span>
            </li>
          </div>
        </ul>
      </div>
      <div style="max-width: 300px; width: 100%">
        <p class="ul_title" style="color: #ec1b23">Неправильно</p>
        <ul class="tab-content_ul">
          <div>
            <li class="tab-content_li">
              <img src="/svg/close.svg" alt="" />
              <span>Принимать антибиотики без назначения врача</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
export default {
  name: "tab-5",
  components: { Accordion, AccordionItem },
  data() {
    return {
      items: [
        {
          id: 0,
          name: "резкий подъем температуры тела (в течение нескольких часов) до высоких цифр (38-40 С), озноб;",
        },
        {
          id: 1,
          name: "чувство разбитости;",
        },
        {
          id: 2,
          name: "боли в мышцах, суставах, в животе, в глазных яблоках, слезотечение;",
        },
        {
          id: 3,
          name: "слабость и недомогание. В среднем, болезнь длится около 5 дней. Если температура держится дольше, возможно, возникли осложнения.",
        },
      ],
      itemsX: [
        {
          id: 0,
          name: "резкий подъем температуры тела (в течение нескольких часов) до высоких цифр (38-40 С), озноб;",
        },
        {
          id: 1,
          name: "чувство разбитости;",
        },
        {
          id: 2,
          name: "боли в мышцах, суставах, в животе, в глазных яблоках, слезотечение;",
        },
        {
          id: 3,
          name: "слабость и недомогание",
        },
      ],
    };
  },
};
</script>
<style scoped>
.flex_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border: 2px solid #00419e;
  padding: 15px;
}
.imgTabs {
  max-width: 748px;
  width: 100%;
  margin: 15px 0;
}
.imgTabs img {
  width: 100%;
  object-fit: contain;
}
.ul_title {
  font-weight: 600;
  font-size: 18px;
  line-height: 130%;
}
.tabImg {
  margin: 20px auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
@media (max-width: 768px) {
  .ul_title {
    text-align: start;
  }
  .tab-content_ul {
    flex-wrap: wrap;
  }
  .tab-content_ul .tabImg {
    order: 1;
  }
  .tab-content_ul .box {
    order: 2;
    margin-top: 10px;
  }
}
</style>
