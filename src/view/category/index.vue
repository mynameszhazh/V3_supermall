<template>
  <div id="category">
    <!-- <toast ref="toast"></toast> -->
    <nav-bar bgcolor="#ff8198">
      <template v-slot:center>
        <div class="title">商品分类</div>
      </template>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>

      <!--         :data="[categoryData]" -->
      <scroll
        id="tab-content"
        :probe-type="3"
        ref="category_scroll"
        :pull-up-load="true"
        @pullingup="pullingup"
        @content-Scroll-Change="contentScrollChange"
      >
        <tab-content-category :sub-categories="showSubcategory"></tab-content-category>
        <!-- <tab-control :titles="['综合', '新品', '销量']" @itemClick="tabClick"></tab-control> -->
        <!-- <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail> -->
      </scroll>
    </div>
  </div>
</template>

<script setup>
import NavBar from '/components/common/navbar/index.vue'
import TabMenu from './childComps/TabMenu.vue'
import TabContentCategory from './childComps/TabContentCategory.vue'
// import TabContentDetail from './childComps/TabContentDetail/vue'
// import TabControl from '/components/content/tabcontrol'
import Scroll from '/components/common/scroll/index.vue'

import { ref, getCurrentInstance, onMounted, computed } from 'vue'
import { getCategory, getSubcategory, getCategoryDetail } from "@/network/category";
import { POP, SELL, NEW } from "@/common/const";
import { tabControlMixin } from "@/common/tabControlMixin.js";
import { debounces } from '@/utils/debounce'
// import Toast from '@/components/common/toast/index.vue'


const { tabClick, currentType } = tabControlMixin()

const categories = ref([])
const categoryData = ref({})
const category_scroll = ref(null)
const currentIndex = ref(-1)


const showSubcategory = computed(() => {
  if (currentIndex.value === -1) return {}
  return categoryData.value[currentIndex.value].subcategories
})

const showCategoryDetail = computed(() => {
  if (currentIndex.value === -1) return []
  return categoryData.value[currentIndex.value].categoryDetail[currentType.value]
})

const _getCategory = () => {
  getCategory().then(res => {
    // 1.获取分类数据
    categories.value = res.data.category.list
    // 2.初始化每个类别的子数据
    for (let i = 0; i < categories.value.length; i++) {
      categoryData.value[i] = {
        subcategories: {},
        categoryDetail: {
          'pop': [],
          'new': [],
          'sell': []
        }
      }
    }
    // 3.请求第一个分类的数据
    _getSubcategories(0)
  })
}
const _getSubcategories = (index) => {
  currentIndex.value = index;
  const mailKey = categories.value[index].maitKey;
  getSubcategory(mailKey).then(res => {
    categoryData.value[index].subcategories = res.data
    categoryData.value = { ...categoryData.value }
    _getCategoryDetail(POP)
    _getCategoryDetail(SELL)
    _getCategoryDetail(NEW)
  })
}

const _getCategoryDetail = (type) => {
  // 1.获取请求的miniWallkey
  const miniWallkey = categories.value[currentIndex.value].miniWallkey;
  // 2.发送请求,传入miniWallkey和type
  getCategoryDetail(miniWallkey, type).then(res => {
    // 3.将获取的数据保存下来
    categoryData.value[currentIndex.value].categoryDetail[type] = res
    categoryData.value = { ...categoryData.value }
  })
}

/**
 * 事件响应相关的方法
 */
const selectItem = (index) => {
  // console.log(index)
  category_scroll.value.scrollTo(0, 0, 0)
  /**
   * 超级垃圾的使用方式，真的 这个时为了防止第一次出现不加载的情况，后面的防抖函数是其它的操作没有问题
   */
  setTimeout(() => {
    category_scroll.value.refresh()
  }, 200);

  _getSubcategories(index)
}

const pullingup = (item) => {
  // console.log(item)
}
let refreshs = null

onMounted(() => {
  refreshs = debounces(category_scroll.value.refresh, 50)
  /**
   * 超级垃圾的使用方式，真的 这个时为了防止第一次出现不加载的情况，后面的防抖函数是其它的操作没有问题
   */
  setTimeout(() => {
    category_scroll.value.refresh()
  }, 200);
})
const contentScrollChange = (item) => {
  // console.log(item)
  refreshs()
}

_getCategory()

</script>

<style scoped>
/* .v3popup {
  z-index: 500000;
} */
#category {
  height: 100vh;
  background-color: #fff;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 57px;

  display: flex;
}

#tab-content {
  /* height: 100%; */
  flex: 1;
}
</style>