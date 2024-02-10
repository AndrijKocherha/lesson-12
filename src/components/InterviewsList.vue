<template>
   <div class="interviews-list">
      <div v-for="interviewData in interviewsList" :key="interviewData.id" class="interview">
         <div>{{ interviewData.workerName }}</div>
         <div>{{ interviewData.candidateName }}</div>
         <div>{{ interviewData.day }}</div>
         <button @click="removeInterview(interviewData.id)">Delete</button>
      </div>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
   name: 'InterviewsList',
   computed: {
      ...mapGetters('interviews', ['interviewsList']),
   },
   methods: {
      ...mapActions('interviews', ['removeInterview']),
   },
}
</script>

<style lang="scss" scoped>
.interviews-list {
   display: grid;
   gap: 10px;
   margin-bottom: 40px;
}
.interview {
   grid-template-columns: repeat(4, 300px);
   display: grid;
   border: 1px solid #000;
   padding: 5px;
   //display: flex;
}
</style>
