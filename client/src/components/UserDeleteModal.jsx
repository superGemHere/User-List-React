export default function UserDeleteModal({
    onClose,
    onDelete
}) {
  return (
    <div class="overlay">
      <div class="backdrop" />
      <div class="modal">
        <div class="confirm-container">
          <header class="headers">
            <h2>Are you sure you want to delete this account?</h2>
            <button class="btn close">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                class="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                onClick={onClose}
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                />
              </svg>
            </button>
          </header>
          <div class="actions">
            <div id="form-actions">
              <button id="action-save" class="btn" type="submit" onClick={onDelete}>
                Delete
              </button>
              <button id="action-cancel" class="btn" type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
