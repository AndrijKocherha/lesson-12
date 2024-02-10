<template>
   <div class="workers-container">
      <workers-filter />
      <!--<div class="humans__list">
         <div class="humans__header">
            <div>Імя</div>
            <div>Вік</div>
            <div>Досвід</div>
            <div>Посада</div>
         </div>
         <div v-for="worker in getFilteredWorkers" class="humans__item" :key="worker.id">
            <div>{{ worker.name }}</div>
            <div>{{ worker.age }}</div>
            <div>{{ worker.experience }}</div>
            <div>{{ worker.position }}</div>
            <button @click="deleteWorker(worker.id)">Delete</button>
            <router-link :to="{ name: 'worker-edit', params: { id: worker.id } }">edit</router-link>
         </div>
      </div>-->
      <humans-list :humansList="getFilteredWorkers" btn-title="edit" @onClick="onEdit" @delete="deleteWorker" />
   </div>
</template>

<script>
import WorkersFilter from '@/components/WorkersFilter.vue'
import { mapActions, mapGetters } from 'vuex'
import HumansList from '@/components/HumansList.vue'
export default {
   name: 'WorkersPage',
   components: { WorkersFilter, HumansList },
   computed: {
      ...mapGetters('workers', ['getFilteredWorkers']),
   },
   methods: {
      ...mapActions('workers', ['deleteWorker']),
      onEdit(id) {
         this.$router.push({ name: 'worker-edit', params: { id } })
      },
   },
}
</script>

<style lang="scss" scoped>
.workers-container {
   display: flex;
   gap: 60px;
}
//.humans {
//   // .employee__list
//   &__list {
//   }
//   // .employee__header
//   &__header {
//      display: grid;
//      font-size: 20px;
//      grid-template-columns: repeat(4, 150px);
//      &:not(:last-child) {
//         margin-bottom: 20px;
//      }
//   }
//   &__item {
//      display: grid;
//      border: 1px solid #000;
//      padding: 5px;
//      &:not(:last-child) {
//         margin-bottom: 7px;
//      }
//      grid-template-columns: repeat(6, 150px);
//   }
//}
</style>
