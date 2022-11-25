import axios from 'axios'
import config from '../config'
import { useEffect } from 'react'
import { useState } from 'react'
import jsPDF from 'jspdf'
import { useNavigate } from 'react-router-dom'
import logo from '../logo/logo.PNG'
const File = () => {

    const navigate = useNavigate()

    useEffect(() => {
    if (!sessionStorage['token']) {
      navigate('/file')
    } else {
      getFile()
    }
    // eslint-disable-next-line
  }, [])

  const getFile = () => {
    axios
      .get(config.serverURL + `/file`, {
        headers: { token: sessionStorage['token'] },
      })
      .then((response) => {
        const result = response.data
        if (result['status'] === 'error') {
          alert(result['status'])
        } else {
            navigate('/file')
        }
      })
  }
  const downloadFile = () => {
    var doc = new jsPDF('landscape', 'px', 'a4', 'false')
    doc.addImage(logo, 'PNG', 65, 20, 100, 100)
    doc.setFont('Helvertica', 'bold')
    doc.setTextColor('red')
    doc.setFontSize(80)
    doc.text(200, 50, 'mobigic')
    doc.setFont('Helvertica', 'bold')
    doc.setFontSize(18)
    doc.setTextColor('Black')
    doc.text(60, 170, 'Name: Nachiket Madhusudan Khule')
    doc.text(60, 190, 'Email: nachiketkhule.nk@gmail.com')
    doc.text(60, 210, 'Phone: 9158786236')
    doc.text(60, 230, 'Education: PGDAC')
    doc.text(60, 250, 'Exp: Fresher')
    doc.setTextColor('red')
    doc.setFont('Helvertica', 'Normal')
    doc.setTextColor('Black')
    doc.setFontSize(20)
    doc.text(150, 380, '*** THANK YOU FOR THE OPPORTUNITY ***')
    doc.save('Invoice.pdf')
  }
  return (
    <div className='container-fluid'>
      <h1
        style={{
          padding: 10,
        }}>
        My Files
      </h1>

      <table
        className='table table-light table-striped'
        style={{ textAlign: 'center' }}>
      <tbody>
              <tr> 
                <td>
                  <button>
                    Delete File
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      downloadFile()
                      alert('Pdf Downloaded Successfully')
                    }}
                    className='btn btn-sm btn-success'>
                    Download File
                  </button>
                </td>
              </tr>
        </tbody>
      </table>
    </div>
  )


}

export default File