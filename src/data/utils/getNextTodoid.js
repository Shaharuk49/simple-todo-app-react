export default function getNextTodoid(todos){

  

  if(todos.length === 0){
    return 1;
  }
  const maxId = todos.reduce((maxid,todo)=>Math.max(maxId, todo.id), 0);
  return maxId+1;
}