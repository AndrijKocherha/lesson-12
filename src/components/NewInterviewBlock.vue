<template>
   <div class="new-interview">
      <div class="new-interview__titles">
         <div>Працівник</div>
         <div>Кандидат</div>
         <div>Дeень</div>
      </div>
      <div class="new-interview__list">
         <select v-model="interviewObj.workerId">
            <option v-for="worker in getWorkersForSelect" :key="worker.id" :value="worker.id">
               {{ worker.name }}
            </option>
         </select>

         <select v-model="interviewObj.candidateId">
            <option v-for="candidate in getCandidatesForSelct" :key="candidate.id" :value="candidate.id">
               {{ candidate.name }}
            </option>
         </select>
         <select v-model="interviewObj.day">
            <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
         </select>
      </div>
      <button @click="addNewInterview">add new intweview</button>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { days } from '../data/days'
export default {
   name: 'NewInterviewBlock',
   data() {
      return {
         days,
         interviewObj: {
            workerId: null,
            candidateId: null,
            day: null,
         },
      }
   },
   computed: {
      //...mapGetters('workers/getWorkersForSelect', 'candidates/getCandidatesForSelct'),
      ...mapGetters('workers', ['getWorkersForSelect']),
      ...mapGetters('candidates', ['getCandidatesForSelct']),
   },
   methods: {
      ...mapActions('interviews', ['addInterview']),
      addNewInterview() {
         if (this.checkInterviewObj()) {
            this.addInterview({ ...this.interviewObj, id: new Date().getTime() })
            this.interviewObj = {
               workerId: null,
               candidateId: null,
               day: null,
            }
         }
      },
      checkInterviewObj() {
         for (const key in this.interviewObj) {
            if (!this.interviewObj[key]) return false
         }
         return true
      },
   },
}
</script>

<style lang="scss" scoped>
.new-interview {
   // .new-interview__titles
   &__titles {
      display: grid;
      grid-template-columns: repeat(3, 300px);
   }
   // .new-interview__list
   &__list {
      display: grid;
      grid-template-columns: repeat(3, 300px);
      margin-bottom: 10px;
   }
}
</style>
