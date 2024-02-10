export default {
   namespaced: true,
   state: {
      interviewsList: [
         {
            id: 1,
            workerId: 2,
            candidateId: 66,
            day: 'понеділок',
         },
      ],
   },
   getters: {
      interviewsList: (state, getters, rootState, rootGetters) => {
         return state.interviewsList.map((interviewData) => {
            return {
               id: interviewData.id,
               workerName: rootGetters['workers/getWorkerById'](interviewData.workerId).name,
               candidateName: rootGetters['candidates/getCandidateById'](interviewData.candidateId).name,
               day: interviewData.day,
            }
         })
      },
   },
   mutations: {
      removeInterview(state, interviewId) {
         state.interviewsList = state.interviewsList.filter((interview) => interviewId !== interview.id)
      },
      addInterview(state, interviewObj) {
         state.interviewsList.push(interviewObj)
      },
   },
   actions: {
      removeInterview({ commit }, interviewId) {
         commit('removeInterview', interviewId)
      },
      addInterview({ commit }, interviewObj) {
         commit('addInterview', interviewObj)
      },
   },
}
