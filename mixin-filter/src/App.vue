<template>
  <div id="app">
    <!-- <filters/> -->
  <!-- <date-filter/> -->
  <filter-trunc/>
  </div>
</template>
<script>
import filters from './components/filters.vue'
import dateFilter from './components/dateFilter.vue'
import filterTrunc from './components/filterTrunc.vue'
export default {
  components:{
    filters,
    dateFilter,
    filterTrunc
  }
  
}
</script>
