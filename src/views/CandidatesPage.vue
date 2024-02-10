<template>
   <div>
      <new-candidate-block />
      <humans-list :humansList="candidatesList" btn-title="recruit" @onClick="onRecruit" @delete="deleteCandidate" />
   </div>
</template>

<script>
import HumansList from '@/components/HumansList.vue'
import { mapActions, mapGetters } from 'vuex'
import NewCandidateBlock from '@/components/NewCandidateBlock.vue'
export default {
   components: { HumansList, NewCandidateBlock },
   name: 'CandidatesPage',
   computed: {
      ...mapGetters('candidates', ['candidatesList']),
   },
   methods: {
      ...mapActions('candidates', ['deleteCandidate', 'onRecruit']),
   },
}
</script>

<style lang="scss" scoped></style>
