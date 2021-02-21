import { useState, useEffect } from 'react'

export default function ModalWindow({ show, hidemethod, children, modalSize, title }) {
  const [showClass, setClass] = useState('');
  const [displayStyle, setDisplayStyle] = useState('none');


  useEffect(() => {
    if (show) {
      setDisplayStyle('block')
      setTimeout(() => {
        setClass('show');
      }, 100)
    } else {
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
              <h5 className="modal-title  text-truncate" id="exampleModalLabel">{title}</h5>
              <button type="button" className="close" onClick={hidemethod} data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
      {showClass && <div onClick={hidemethod} className={`modal-backdrop fade ${showClass}`}></div>}
    </div>
  )
}
