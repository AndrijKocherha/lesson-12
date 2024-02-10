<template>
   <div class="add-candidate">
      <label>Name <input v-model="candidate.name" type="text" /></label>
      <label>Age <input v-model="candidate.age" type="number" /></label>
      <label>Experience <input v-model="candidate.experience" type="number" /></label>
      <label>Position <input v-model="candidate.position" type="text" /></label>
      <button @click="addNewCandidate">Add candidate</button>
      <button @click="reset">Reset</button>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   name: 'NewCandidateBlock',
   data() {
      return {
         candidate: {
            name: null,
            age: null,
            experience: null,
            position: null,
         },
      }
   },

   methods: {
      ...mapActions('candidates', ['addCandidate']),
      reset() {
         this.candidate = {
            name: null,
            age: null,
            experience: null,
            position: null,
         }
      },
      addNewCandidate() {
         if (this.checkCandidateData()) {
            this.addCandidate(this.candidate)
            this.reset()
         }
      },
      checkCandidateData() {
         for (const key in this.candidate) {
            if (!this.candidate[key]) return false
         }
         return true
      },
   },
}
</script>

<style lang="scss" scoped>
.add-candidate {
   display: flex;
   justify-content: start;
   gap: 20px;
   margin-bottom: 50px;
}
</style>
