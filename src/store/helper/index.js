export function matchWorkerToFilter(worker, filterObj) {
   if (filterObj.name && !worker.name.toLowerCase().includes(filterObj.name.toLowerCase())) return false
   if (filterObj.ageFrom && filterObj.ageFrom > worker.age) return false
   if (filterObj.ageTo && filterObj.ageTo < worker.age) return false
   if (filterObj.position && !worker.position.toLowerCase().includes(filterObj.position.toLowerCase())) return false
   if (filterObj.experienceFrom && filterObj.experienceFrom > worker.experience) return false
   if (filterObj.experienceTo && filterObj.experienceTo < worker.experience) return false
   return true
}
