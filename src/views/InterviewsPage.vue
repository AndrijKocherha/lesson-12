<template>
   <div class="interviews">
      <div class="interviews__titles">
         <div>працівник</div>
         <div>Кандидат</div>
         <div>День</div>
      </div>
      <interviews-list />
      <new-interview-block />
   </div>
</template>

<script>
import InterviewsList from '@/components/InterviewsList.vue'
import { mapGetters } from 'vuex'
import NewInterviewBlock from '@/components/NewInterviewBlock.vue'
export default {
   components: { InterviewsList, NewInterviewBlock },
   name: 'InterviewsPage',
   computed: {
      ...mapGetters('interviews', ['interviewsList']),
   },
}
</script>

<style lang="scss" scoped>
.interviews__titles {
   grid-template-columns: repeat(4, 300px);
   display: grid;
   font-weight: 600;
   font-size: 20px;
   color: #279dba;
   &:not(:last-child) {
      margin-bottom: 40px;
   }
}
</style>
