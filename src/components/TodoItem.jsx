import useTodo from "../hooks/useTodo"

function TodoItem(props) {
  const {job, setEditId} = props
  const {hdlDel} = useTodo()

  const onDelete = () => {
    if(confirm('คุณต้องการลบ List นี้หรือไม่')) { hdlDel(job.id) }
  }
  return (
    <div className="todo-item">
      <p className={job.completed ? 'job-done' : ''}>{job.todo} </p>
      <div className="btn-group">
        <button onClick={()=>{setEditId(job.id)}}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem