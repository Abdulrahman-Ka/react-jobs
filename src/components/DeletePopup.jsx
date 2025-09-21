export default function DeletePopup({ isOpen, onClose, onDelete }) {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-4 rounded w-72">
            <h2 className="text-lg font-bold text-red-600 mb-2">Delete?</h2>
            <p className="mb-4 text-sm">
              Are you sure you want to delete this listing?
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => onClose()}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => onDelete()}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
