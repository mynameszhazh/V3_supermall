<template>
  <div class="detailparamsinfo">
    <table class="table1" v-if="paramsInfo.rule" v-for="(tr,index) in paramsInfo.rule.tables" :key="index">
      <tr v-for="(td, indey) in tr" :key="indey">
        <td v-for="(item, indez) in td" :key="indez">
          {{ item }}
        </td>
      </tr>
    </table>
    <!--    {{paramsInfo.rule.tables}}-->
    <table class="table2" >
      <tr v-if="paramsInfo.info" v-for="(td,index) in paramsInfo.info.set" :key="index">
        <td>
          {{ td.key }}
        </td>
        <td>
          {{ td.value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  paramsInfo: {
    type: Object,
    required: true
  }
})

</script>

<style lang='less' scoped>
.detailparamsinfo {
  margin-top: 20px;
  width: 100%;

  .table1 {
    width: 100%;

    tr {
      height: 42px;

      td {
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
      }
    }
  }

  .table2 {
    margin-top: 20px;
    width: 100%;

    tr {
      height: 45px;

      td {
        text-align: left;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
                  color: #ff5777;


        &:first-child {
          padding-left: 20px;
          width: 100px;
          color: black;
        }
      }
    }
  }
}
</style>