import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorComponent() {

  const navigate = useNavigate()
  const pathname = window.location.pathname;
  let sp = pathname

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>' {sp} ' this page is not exists in this application</h2>
      <button onClick={() => navigate('/')}>Come Back</button>
      <button onClick={() => window.location.reload()}>Reload</button>

    </div>
  )
}

export default ErrorComponent