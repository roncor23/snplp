<template>
  <footer class="footer">
    <div class="container-fluid">

      <div class="copyright pull-right">
        <i class="fa fa-copyright" style="font-weight: 200"></i> {{ year }},
        made with <i class="fa fa-heart heart"></i> by
        <a href="https://www.creative-tim.com" target="_blank" rel="noopener"
          >CHED</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>
