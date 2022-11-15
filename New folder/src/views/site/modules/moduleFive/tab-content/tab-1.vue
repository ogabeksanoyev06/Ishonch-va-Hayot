<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="impInfo_content">
        <img src="/svg/ImportantInfo.svg" alt="" />
        <p style="max-width: 550px; width: 100%">
          {{$t("Text5-1")}}
        </p>
      </div>
      <Accordion :activeProp="0">
        <AccordionItem>
          <template slot="accordion-trigger">
            <div class="module__accordion-header">
              <div class="accordion-img">
                <img src="/svg/lineIcon.svg" alt="" />
              </div>
              <h4 class="accordion-text">{{$t("Text5-1-1")}}</h4>
            </div>
          </template>
          <template slot="accordion-content">
            <div style="padding: 0 15px 15px">
              <div class="accordion-item">
                <h4 class="accordion-text">
                  • {{$t("Text5-1-2")}}
                </h4>
                <h4 class="accordion-text">
                  • {{$t("Text5-1-3")}}
                </h4>
                <h4 class="accordion-text">
                  • {{$t("Text5-1-4")}}
                </h4>
                <h4 class="accordion-text">
                  • {{$t("Text5-1-5")}}
                </h4>
              </div>
            </div>
          </template>
        </AccordionItem>
      </Accordion>
      <div class="tab_content-title">{{$t("Text5-1-6")}}</div>
      <div class="tab_content-text">
        {{$t("Text5-1-7")}}
      </div>
      <div class="module_title"> {{$t("Text5-1-8")}}</div>
      <div class="tab_content-text">
        {{$t("Text5-1-9")}}
      </div>
      <div class="tab_content-text">
        {{$t("Text5-1-10")}}
      </div>
      <div class="tabImg">
        <img class="w-100" src="/images/tabImg/123.jpg" alt="wewe" />
      </div>
      <div class="tab_content-text">
        {{$t("Text5-1-11")}}
      </div>
      <div class="tab_content-text">
        {{$t("Text5-1-12")}}
      </div>
      <div class="tab_content-text">
        {{$t("Text5-1-13")}}
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
export default {
  name: "tab-1",
  components: { Accordion, AccordionItem },
  data() {
    return {};
  },
};
</script>
<style scoped>
.tabImg {
  max-width: 250px;
  width: 100%;
  margin: 20px auto;
}
.tab_content-text {
  margin-bottom: 10px;
}
</style>
