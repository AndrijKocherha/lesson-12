export default {
   namespaced: true,
   state: {
      candidates: [
         { name: 'Іван', id: 41, age: 28, experience: 3, position: 'Developer' },
         { name: 'Олена', id: 62, age: 25, experience: 2, position: 'Programmer' },
         { name: 'Михайло', id: 83, age: 30, experience: 5, position: 'Software Engineer' },
         { name: 'Наталія', id: 49, age: 35, experience: 7, position: 'Coder' },
         { name: 'Андрій', id: 53, age: 26, experience: 4, position: 'Software Developer' },
         { name: 'Ірина', id: 66, age: 31, experience: 6, position: 'Application Developer' },
         { name: 'Вікторія', id: 796, age: 29, experience: 4, position: 'Coding Specialist' },
         { name: 'Олександр', id: 98, age: 33, experience: 8, position: 'Programmer' },
         { name: 'Сергій', id: 699, age: 27, experience: 3, position: 'Developer' },
         { name: 'Юлія', id: 190, age: 34, experience: 7, position: 'Software Engineer' },
      ],
   },
   getters: {
      candidatesList: ({ candidates }) => candidates,
      getCandidateById: (state) => (candidateId) => {
         return state.candidates.find((candidate) => candidate.id === candidateId)
      },
      getCandidatesForSelct: (state, getters, rootState) => {
         console.log(rootState.interviews.interviewsList)
         return state.candidates.filter((candidate) => {
            for (const interview of rootState.interviews.interviewsList) {
               if (interview.candidateId === candidate.id) return false
            }
            return true
         })
      },
   },
   mutations: {
      deleteCandidate(state, candidateId) {
         state.candidates = state.candidates.filter((candidate) => candidate.id !== candidateId)
      },
      addCandidate(state, candidate) {
         state.candidates.push(candidate)
      },
   },
   actions: {
      deleteCandidate({ commit }, candidateId) {
         commit('deleteCandidate', candidateId)
      },
      onRecruit({ dispatch, getters, rootState }, candidateId) {
         rootState.workers.workersList.push(getters.getCandidateById(candidateId))
         dispatch('deleteCandidate', candidateId)
      },
      addCandidate({ commit }, candidate) {
         commit('addCandidate', { ...candidate, id: new Date().getTime() })
      },
   },
}
