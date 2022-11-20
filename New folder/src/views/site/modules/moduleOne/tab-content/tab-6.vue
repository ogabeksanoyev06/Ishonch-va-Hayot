<template>
  <div class="tab_content">
    <div class="module_title"> {{$t("Симптомы ОРВИ и гриппа")}}</div>
    <div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{ $t("Типичные симптомы ОРВИ и Гриппа") }}:
        </div>
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
          {{ $t("Типичные симптомы гриппа и других ОРИ") }}:
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
          {{
            $t(
              "В среднем, болезнь длится около 5 дней. Если температура держится дольше, возможно, возникли осложнения."
            )
          }}
        </div>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div class="imgTabs">
          <img v-if="lang" src="/images/tabImg/146.jpg" alt="" />
          <img v-else src="/images/tabImg/146uz.jpg" alt="" />
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
              {{ $t("doctor") }}
            </h4>
          </div>
        </template>
        <template slot="accordion-content">
          <div style="padding: 0 15px 15px">
            <div class="accordion-item">
              <div class="tab_content-text">
                {{ $t("doctor1") }}
              </div>
              <div class="tabImg" style="max-width: 900px">
                <img v-if="lang" src="/images/tabImg/111.jpg" alt="" />
                <img v-else src="/images/tabImg/111uz.jpg" alt="" />
              </div>
              <div class="tab_content-text">
                {{ $t("davolash") }}
              </div>
            </div>
          </div>
        </template>
      </AccordionItem>
    </Accordion>
    <div class="tab_content-title bgTab" style="margin-right: auto">
      {{ $t("treatment") }}
    </div>
    <div class="flex_box">
      <div>
        <p class="ul_title" style="color: #1a990f">{{ $t("true") }}</p>
        <ul class="tab-content_ul flex-wrap">
          <div style="margin-right: 20px">
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>{{ $t("Consultadoctor") }}</span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>{{ $t("mode") }}</span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>{{ $t("drink") }}</span>
            </li>
            <li class="tab-content_li">
              <img src="/svg/check.svg" alt="" />
              <span>{{ $t("food") }}</span>
            </li>
          </div>
        </ul>
      </div>
      <div style="max-width: 300px; width: 100%">
        <p class="ul_title" style="color: #ec1b23">{{ $t("not") }}</p>
        <ul class="tab-content_ul">
          <div>
            <li class="tab-content_li">
              <img src="/svg/close.svg" alt="" />
              <span>{{ $t("bez") }}</span>
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
import { mapState } from "vuex";
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
  computed: {
    ...mapState(["lang"]),
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
