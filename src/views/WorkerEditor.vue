<template>
   <div>
      <div class="form">
         <h4>Editor</h4>
         <label>
            <div>Імя</div>
            <input v-model="workerObj.name" type="text" />
         </label>

         <label>
            <div>Вік</div>
            <input v-model="workerObj.age" type="number" />
         </label>
         <label>
            <div>Посада</div>
            <input v-model="workerObj.position" type="text" />
         </label>
         <label>
            <div>Досвід</div>
            <input v-model="workerObj.experience" type="number" />
         </label>
      </div>
      <button @click="saveNewWorkerData">Save</button>
      <router-link :to="{ name: 'workers' }">Cancle</router-link>
   </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'WorkerEditor',
   data() {
      return {
         workerObj: {},
      }
   },
   computed: {
      ...mapGetters('workers', ['getWorkerById']),
      getWorkerId() {
         return this.$route.params.id
      },
   },
   created() {
      this.workerObj = { ...this.getWorkerById(this.getWorkerId) }
   },
   methods: {
      ...mapActions('workers', ['updateWorker']),
      saveNewWorkerData() {
         this.updateWorker(this.workerObj)
         this.$router.push({ name: 'workers' })
      },
   },
}
</script>

<style lang="scss" scoped></style>
