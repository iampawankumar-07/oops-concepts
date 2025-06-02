
const EditAction = ({ onEdit }) => <button onClick={onEdit}>Edit</button>;
const DeleteAction = ({ onDelete }) => <button onClick={onDelete}>Delete</button>;

const TableRow = ({ showEdit, showDelete, ...handlers }) => (
  <div>
    {showEdit && <EditAction onEdit={handlers.onEdit} />}
    {showDelete && <DeleteAction onDelete={handlers.onDelete} />}
  </div>
);
