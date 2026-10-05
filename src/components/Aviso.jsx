export default function Aviso({ mensagem }) {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1080 }}>
      <div
        className={`toast align-items-center text-white bg-dark border-0${mensagem ? ' show' : ''}`}
        role="status"
        aria-live="polite"
      >
        <div className="toast-body">{mensagem}</div>
      </div>
    </div>
  )
}
