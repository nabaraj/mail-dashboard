import { useState, useEffect } from 'react'

export default function ModalWindow({ show, hidemethod, children, modalSize, title }) {
  const [showClass, setClass] = useState('');
  const [displayStyle, setDisplayStyle] = useState('none');


  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
      setDisplayStyle('block')
      setTimeout(() => {
        setClass('show');
      }, 100)
    } else {
      document.body.classList.remove('modal-open');
      setClass('');
      setTimeout(() => {
        setDisplayStyle('none');
      }, 100)
    }

  }, [show])

  return (
    <div>
      <div className={`modal fade ${showClass}`} style={{ display: `${displayStyle}` }}>
        <div className={`modal-dialog ${modalSize}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
              <button type="button" className="close" onClick={hidemethod} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modal-dialog-scrollable">
              {children}
            </div>
          </div>
        </div>
      </div>
      {showClass && <div onClick={hidemethod} className={`modal-backdrop fade ${showClass}`}></div>}
    </div>
  )
}
