import { matchWorkerToFilter } from '../helper'
export default {
   namespaced: true,
   state: {
      workersList: [
         { name: 'Іван', id: 1, age: 30, experience: 5, position: 'Developer' },
         { name: 'Марія', id: 2, age: 25, experience: 3, position: 'Designer' },
         { name: 'Петро', id: 3, age: 35, experience: 8, position: 'Project Manager' },
         { name: 'Ольга', id: 4, age: 28, experience: 4, position: 'Tester' },
         { name: 'Анна', id: 5, age: 32, experience: 6, position: 'Systems Analyst' },
      ],
      filterObj: {},
   },
   getters: {
      workersList: ({ workersList }) => workersList,
      getWorkerById:
         ({ workersList }) =>
         (workerId) =>
            workersList.find((worker) => worker.id == workerId),
      getFilteredWorkers: (state) => state.workersList.filter((worker) => matchWorkerToFilter(worker, state.filterObj)),
      getWorkersForSelect: (state, getters, rootState) => {
         return state.workersList.filter((worker) => {
            for (const interview of rootState.interviews.interviewsList) {
               if (interview.workerId === worker.id) return false
            }
            return true
         })
      },
   },
   mutations: {
      deleteWorker(state, workerId) {
         state.workersList = state.workersList.filter((worker) => worker.id !== workerId)
      },
      setFilterObj(state, filterData) {
         state.filterObj = filterData
      },
      updateWorker(state, workerData) {
         const workerIndx = state.workersList.findIndex((worker) => worker.id === workerData.id)
         state.workersList[workerIndx] = workerData
      },
   },
   actions: {
      deleteWorker({ commit }, workerId) {
         commit('deleteWorker', workerId)
      },
      setFilterObj({ commit }, filterData) {
         commit('setFilterObj', filterData)
      },
      updateWorker({ commit }, workerData) {
         commit('updateWorker', workerData)
      },
   },
   modules: {},
}
