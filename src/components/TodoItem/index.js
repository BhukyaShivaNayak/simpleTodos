// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, deleteItem} = props
  const {title, id} = details

  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button onClick={onDelete} className="delete-button" type="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
